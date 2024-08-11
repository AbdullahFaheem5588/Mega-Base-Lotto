import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEthereum } from "react-icons/fa";
import Countdown from "./Countdown";
import Generator from "./Generator";
import { useSelector } from "react-redux";
import { formatDate } from "../services/blockchain";

const LotteryTable = ({ lottery, luckyNumbers, participants }) => {
  const { wallet } = useSelector((states) => states.globalStates);
  console.log("Wallet: ", wallet);
  console.log("lottery owner: ", lottery.owner);
  const navigate = useNavigate();
  const [generateModalIsOpen, setGenerateModalIsOpen] = useState(false);

  const handlePurchase = (luckyNumberId) => {
    alert("Ticket purchased successfully " + luckyNumberId);
  };

  const toggleGenerateModal = () => {
    setGenerateModalIsOpen(!generateModalIsOpen);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 px-5">
      <div className="flex flex-col items-center justify-center text-center py-10">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-purple-400 py-5">
            {lottery?.title}
          </h1>
          <p className="text-sm md:text-xl text-gray-300 max-w-3xl mx-auto">
            {lottery?.description}
            <br />
            {lottery?.participants || 0} participants
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center space-y-4 mb-6">
        {lottery?.expiresAt && <Countdown timestamp={lottery?.expiresAt} />}

        <div className="flex flex-wrap justify-center items-center space-x-2">
          {lottery?.owner.toLowerCase() === wallet?.toLowerCase() && (
            <>
              <button
                disabled={lottery.expiresAt < Date.now()}
                onClick={toggleGenerateModal}
                className={`bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-4 py-2 md:px-6 md:py-2 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105 mt-auto mb-4 mx-auto
                ${
                  lottery?.expiresAt < Date.now()
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
              >
                Generate Lucky Numbers
              </button>
              <button
                onClick={() =>
                  navigate("/lotteryresult", {
                    state: { lottery: lottery },
                  })
                }
                className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-4 py-2 md:px-6 md:py-2 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105 mt-auto mb-4 mx-auto"
              >
                Draw Result
              </button>
            </>
          )}
        </div>
      </div>

      <div className="bg-white text-xs sm:text-sm overflow-x-auto flex flex-col w-full sm:w-3/4 mx-auto p-5 rounded-md shadow-lg">
        <div className="pb-4 text-center">
          <p className="font-semibold text-xl sm:text-2xl text-black">
            Select Your Winning Lottery Numbers
          </p>
        </div>

        <table className="table-auto">
          <thead className="block">
            <tr className="flex justify-between text-left text-black">
              <th className="px-2 sm:px-4 py-2">#</th>
              <th className="px-2 sm:px-4 py-2">Ticket Price</th>
              <th className="px-2 sm:px-4 py-2">Draw Date</th>
              <th className="px-2 sm:px-4 py-2">Ticket Number</th>
              <th className="px-2 sm:px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody className="max-h-80 overflow-y-auto block">
            {luckyNumbers?.map((luckyNumber, i) => (
              <tr className="flex justify-between border-b text-left" key={i}>
                <td className="px-2 sm:px-4 py-2 font-semibold text-black">
                  {i + 1}
                </td>
                <td className="px-2 sm:px-4 py-2 font-semibold text-black">
                  <div className="flex justify-center items-center space-x-1">
                    <FaEthereum />
                    <span>{lottery?.ticketPrice}</span>
                  </div>
                </td>
                <td className="px-2 sm:px-4 py-2 font-semibold text-black">
                  {formatDate(lottery.drawsAt)}
                </td>
                <td className="px-2 sm:px-4 py-2 font-semibold text-black">
                  {luckyNumber}
                </td>
                <td className="px-2 sm:px-4 py-2 font-semibold">
                  <button
                    disabled={participants.includes(luckyNumber)}
                    onClick={() => handlePurchase(luckyNumber)}
                    className={`bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-full font-semibold text-xs sm:text-sm shadow-lg 
                      ${
                        participants.includes(luckyNumber)
                          ? "opacity-50 cursor-not-allowed"
                          : "hover:shadow-xl transition-transform duration-300 transform hover:scale-105 mt-auto mx-auto"
                      }`}
                  >
                    BUY NOW
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Generator isOpen={generateModalIsOpen} onClose={toggleGenerateModal} />
    </div>
  );
};

export default LotteryTable;
