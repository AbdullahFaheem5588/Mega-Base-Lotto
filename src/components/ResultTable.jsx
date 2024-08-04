import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEthereum } from "react-icons/fa";
import Identicon from "react-identicons";
import Countdown from "./Countdown";
import Winners from "./Winners";
import { truncate } from "../services/blockchain";

const ResultTable = ({ lottery, participants, result }) => {
  const navigate = useNavigate();
  const [winnersModalIsOpen, setWinnersModalIsOpen] = useState(false);

  const toggleWinnersModal = () => {
    setWinnersModalIsOpen(!winnersModalIsOpen);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 px-5">
      <div className="flex flex-col items-center justify-center text-center py-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-purple-400 py-5">
            {lottery?.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            {lottery?.description}
            <br />
            Result for{" "}
            <span className="font-medium text-green-600">
              {result?.winners?.length} winners
            </span>{" "}
            out of{" "}
            <span className="font-medium text-black">
              {lottery?.participants} participants
            </span>{" "}
            <span className="font-medium text-green-600">
              {result?.winners?.length > 0 ? "Drawn" : "Not Drawn"}
            </span>
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center space-y-4 mb-6">
        {lottery?.expiresAt ? (
          <Countdown timestamp={lottery?.expiresAt} />
        ) : null}

        <div className="flex flex-wrap justify-center items-center space-x-2">
          {lottery?.owner ? (
            <button
              onClick={toggleWinnersModal}
              className={`bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-6 py-2 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105 mt-auto mb-4
                ${
                  lottery?.expiresAt < Date.now()
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
            >
              Perform Draw
            </button>
          ) : null}
        </div>
      </div>

      <div className="bg-white text-sm overflow-x-auto flex flex-col w-full sm:w-3/4 mx-auto p-5 rounded-md shadow-lg">
        <div className="pb-4 text-center">
          <p className="font-semibold text-2xl text-black">Winners & Losers</p>
        </div>
        <div className="space-y-2 max-h-80 overflow-y-auto">
          {participants?.map((participant, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row justify-start items-center border-b border-gray-100 py-2 space-y-2 sm:space-y-0 sm:space-x-2"
            >
              <Identicon
                size={30}
                string={participant.account}
                className="rounded-full h-12 w-12"
              />
              <div className="flex flex-wrap justify-center items-center space-x-2 text-sm">
                <p className="font-semibold text-lg text-slate-500">
                  {truncate(participant.account, 4, 4, 11)}
                </p>
                <p className="text-slate-500">{participant.lotteryNumber}</p>
                {result?.winners?.includes(participant.lotteryNumber) ? (
                  <p className="text-green-500 flex justify-start items-center">
                    + <FaEthereum /> result?.sharePerWinner {" winner"}
                  </p>
                ) : (
                  <p className="text-red-500 flex justify-start items-center">
                    - <FaEthereum /> {lottery?.ticketPrice}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Winners isOpen={winnersModalIsOpen} onClose={toggleWinnersModal} />
    </div>
  );
};

export default ResultTable;
