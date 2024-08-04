import React from "react";
import { FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { globalActions } from "../store/globalSlices";
import { signUpWithCometChat, loginWithCometChat } from "../services/chat";

const AuthChat = ({ isOpen, onClose }) => {
  const { wallet } = useSelector((states) => states.globalStates);
  const { setCurrentUser } = globalActions;
  const dispatch = useDispatch();
  const { CometChat } = window;

  // const handleSignUp = async () => {
  //   if (wallet === "") return toast.warning("Connect your wallet");
  //   await toast.promise(
  //     new Promise(async (resolve, reject) => {
  //       await signUpWithCometChat(CometChat, wallet)
  //         .then((user) => {
  //           dispatch(setCurrentUser(JSON.parse(JSON.stringify(user))));
  //           resolve();
  //         })
  //         .catch(() => reject());
  //     }),
  //     {
  //       pending: "Signing up...",
  //       success: "Account created, please login 👌",
  //       error: "Encountered error 🤯",
  //     }
  //   );
  // };

  // const handleLogin = async () => {
  //   if (wallet === "") return toast.warning("Connect your wallet");
  //   await toast.promise(
  //     new Promise(async (resolve, reject) => {
  //       await loginWithCometChat(CometChat, wallet)
  //         .then(async (user) => {
  //           dispatch(setCurrentUser(JSON.parse(JSON.stringify(user))));
  //           onClose();
  //           resolve();
  //           window.location.reload();
  //         })
  //         .catch(() => reject());
  //     }),
  //     {
  //       pending: "Logging in...",
  //       success: "Login successful 👌",
  //       error: "Encountered error 🤯",
  //     }
  //   );
  // };

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center
      bg-black bg-opacity-50 transform transition-transform duration-300 ${
        isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
      }`}
    >
      <div
        className="bg-gray-800 shadow-xl shadow-gray-900 rounded-xl
        w-11/12 md:w-2/5 p-6 transition-transform transform
        duration-300 ease-in-out"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-purple-400">
            Login to Continue
          </h2>
          <FaTimes className="cursor-pointer text-white" onClick={onClose} />
        </div>

        <div className="flex items-center justify-center space-x-4 mt-4">
          <button
            className="flex flex-row justify-center items-center w-full text-white text-md py-2 px-5 rounded-full
            bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 transition-transform transform hover:scale-105"
            // onClick={handleLogin}
          >
            Login
          </button>
          <button
            className="flex flex-row justify-center items-center w-full text-white text-md py-2 px-5 rounded-full
            bg-gradient-to-r from-gray-500 to-gray-700 hover:from-gray-600 hover:to-gray-800 transition-transform transform hover:scale-105"
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
