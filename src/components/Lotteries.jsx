import React from "react";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../services/blockchain";

const Lotteries = ({ Lotteries }) => {
  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 pt-10 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-purple-400 py-5">
            Explore Our Mega Lotteries
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Unleash your luck with our thrilling Mega Base Lotto lotteries. Each
            draw offers you a chance to win big, with a fair and transparent
            system that ensures every player has a premium experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {Lotteries?.map((lottery) => (
            <Lottery lottery={lottery} key={lottery.id} />
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iMTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNTYiIGhlaWdodD0iMTAwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNMjggNjZMMCA1MEwyOCAzNGw1NiAzMnoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-10 z-0"></div>
    </div>
  );
};

const Lottery = ({ lottery }) => {
  const navigate = useNavigate();
  return (
    <div className="transform transition-transform duration-300 hover:scale-105">
      <div className="w-full shadow-xl shadow-gray-900 rounded-lg overflow-hidden bg-gray-800 p-5 hover:bg-gray-700 transition-colors">
        <div className="flex items-center space-x-4 mb-4">
          <img
            width={120}
            height={120}
            src={lottery.image}
            alt="icon"
            className="rounded-full w-24 h-24 object-cover border-4 border-gray-700 shadow-lg"
          />
          <div>
            <p className="text-green-400 text-xl font-semibold">
              Upto: {lottery.prize} ETH
            </p>
            <p className="text-sm text-gray-400">
              Draws On: {formatDate(lottery.drawsAt)}
            </p>
          </div>
        </div>
        <div className="py-4">
          <p className="font-bold text-xl text-green-300">{lottery.title}</p>
          <p className="text-sm text-gray-300 mt-2">{lottery.description}</p>
        </div>

        <button
          onClick={() =>
            navigate("lotterydetails", {
              state: { id: lottery.id },
            })
          }
          className="block w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 py-2 px-4 rounded-md text-white font-bold text-center mt-4 shadow-md hover:shadow-xl transition-transform transform hover:scale-105"
        >
          PLAY NOW
        </button>
      </div>
    </div>
  );
};

export default Lotteries;
