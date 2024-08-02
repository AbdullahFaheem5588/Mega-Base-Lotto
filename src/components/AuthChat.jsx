import React from "react";
import { FaTimes } from "react-icons/fa";

const AuthChat = ({ isOpen, onClose, onSignUp, onLogin }) => {
  // const handleSignUp = async () => {
  //   const wallet = {};
  //   if (!wallet) return alert("Connect your wallet");
  //   try {
  //     await onSignUp(wallet);
  //     alert("Account created, please login 👌");
  //   } catch (error) {
  //     alert("Encountered error 🤯");
  //   }
  // };

  // const handleLogin = async () => {
  //   if (!wallet) return alert("Connect your wallet");
  //   try {
  //     await onLogin(wallet);
  //     alert("Login successful 👌");
  //     onClose();
  //     window.location.reload();
  //   } catch (error) {
  //     alert("Encountered error 🤯");
  //   }
  // };

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center
      bg-black bg-opacity-50 transform z-50 transition-transform duration-300 ${
        isOpen ? "scale-100" : "scale-0"
      }`}
    >
      <div className="bg-white shadow-lg shadow-slate-900 rounded-xl w-11/12 md:w-2/5 p-6 relative">
        <div className="flex items-center justify-between">
          <h2>Auth</h2>
          <FaTimes className="cursor-pointer" onClick={onClose} />
        </div>

        <div className="flex items-center justify-center space-x-4 mt-4">
          <button
            className="p-2 bg-amber-600 rounded-md text-white focus:outline-none focus:ring-0"
            //onClick={handleLogin}
          >
            Login
          </button>
          <button
            className="p-2 bg-gray-600 rounded-md text-white focus:outline-none focus:ring-0"
            // onClick={handleSignUp}
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthChat;
