import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";

const Winners = ({ isOpen, onClose }) => {
  const [noOfWinners, setNoOfWinners] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(noOfWinners);
    setNoOfWinners("");
    onClose();
  };

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen flex
      items-center justify-center bg-black bg-opacity-50
      transform transition-transform duration-300 ${
        isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
      }`}
    >
      <div
        className="bg-gray-800 shadow-xl shadow-gray-900 rounded-xl
        w-11/12 md:w-2/5 h-7/12 p-6 transition-transform transform
        duration-300 ease-in-out"
      >
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-purple-400">
              Emerging Winners
            </p>
            <button
              onClick={() => {
                setNoOfWinners("");
                onClose();
              }}
              type="button"
              className="border-0 bg-transparent text-white focus:outline-none"
            >
              <FaTimes />
            </button>
          </div>

          <div
            className="flex justify-between items-center
          bg-gray-700 rounded-xl p-2.5 my-5"
          >
            <input
              className="block w-full bg-transparent
              border-0 text-sm text-gray-300 focus:outline-none
              focus:ring-0"
              type="number"
              step={1}
              min={1}
              name="noOfWinners"
              placeholder="Winners e.g 5"
              onChange={(e) => setNoOfWinners(e.target.value)}
              value={noOfWinners}
              required
            />
          </div>

          <button
            type="submit"
            className="flex flex-row justify-center items-center
              w-full text-white text-md py-2 px-5 rounded-full
              bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 transition-transform transform hover:scale-105"
          >
            Draw Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Winners;
