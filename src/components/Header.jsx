import React, { useState, useEffect, useRef } from "react";
import networking from "../assets/networking.png";
import logowithname from "../assets/LogoWithName.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { connectWallet, truncate } from "../services/blockchain";

const Header = () => {
  const { wallet } = useSelector((states) => states.globalStates);
  const navigate = useNavigate();
  // State to manage mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Reference to the mobile menu container
  const menuRef = useRef(null);

  // Toggle mobile menu visibility
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Close menu if clicking outside of it
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  // Attach and detach event listener for clicks outside of the menu
  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-900 to-indigo-800 text-white overflow-hidden">
      {/* Background particle effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iMTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNTYiIGhlaWdodD0iMTAwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNMjggNjZMMCA1MEwyOCAzNGw1NiAzMnoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNCIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
      </div>

      <div className="relative container mx-auto px-4 py-5">
        {/* Navigation */}
        <nav className="flex items-center justify-between mb-16">
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center z-50">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none transition-transform duration-300 transform hover:scale-110"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
          <div className="hidden md:flex flex items-center space-x-4 z-40">
            <a href="/index">
              <img
                src={logowithname}
                alt="Mega Base Lotto"
                className="w-15 h-12 transition-transform duration-300 hover:scale-105"
              />
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-6 text-sm font-medium z-40">
            <a
              href="/#Home"
              className="hover:text-pink-400 transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="/#aboutus"
              className="hover:text-pink-400 transition-colors duration-300"
            >
              About Us
            </a>
          </div>
          {wallet ? (
            <button className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-6 py-2 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105 hidden md:block z-30">
              {truncate(wallet, 4, 4, 11)}
            </button>
          ) : (
            <button
              onClick={connectWallet}
              className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-6 py-2 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105 hidden md:block z-30"
            >
              Connect Wallet
            </button>
          )}
        </nav>

        {/* Mobile Menu */}
        <div
          ref={menuRef}
          className={`fixed top-0 left-0 w-64 bg-purple-900 text-white h-screen transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0 z-50" : "-translate-x-full z-40"
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="flex flex-col items-center py-4 z-50">
              <a href="/">
                <img
                  src={logowithname}
                  alt="Mega Base Lotto"
                  className="w-15 h-12 mb-4"
                />
              </a>
              <ul className="flex flex-col w-full p-4 space-y-4 overflow-y-auto">
                <li>
                  <a
                    href="/#home"
                    className="flex items-center justify-center block py-4 px-6 text-lg font-semibold text-white bg-gradient-to-r from-purple-700 to-purple-900 rounded-lg shadow-xl hover:from-purple-600 hover:to-purple-800 transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/#aboutus"
                    className="flex items-center justify-center block py-4 px-6 text-lg font-semibold text-white bg-gradient-to-r from-purple-700 to-purple-900 rounded-lg shadow-xl hover:from-purple-600 hover:to-purple-800 transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About Us
                  </a>
                </li>
              </ul>
            </div>
            {wallet ? (
              <button className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-6 py-2 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105 mt-auto mb-4 mx-auto">
                {truncate(wallet, 4, 4, 11)}
              </button>
            ) : (
              <button
                onClick={() => {
                  connectWallet();
                  setIsMenuOpen(false);
                }}
                className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-6 py-2 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105 mt-auto mb-4 mx-auto"
              >
                Connect Wallet
              </button>
            )}
          </div>
        </div>

        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500">
                The Ultimate Memecoin Lottery Game
              </span>
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Experience the thrill of crypto lottery with Mega Base Lotto -
              where every token is a ticket to win big
            </p>
            <button
              onClick={() => navigate("/create")}
              className="bg-white text-purple-900 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105 relative z-10"
            >
              Create Lottery
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full filter blur-3xl opacity-70 transition-all duration-500"></div>
              <img
                src={networking}
                alt="Lottery Excitement"
                className="relative rounded-lg max-w-md w-full transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
