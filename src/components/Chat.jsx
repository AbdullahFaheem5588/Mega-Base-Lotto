import { FaTimes, FaPaperPlane } from "react-icons/fa";
import Identicon from "react-identicons";
import { useState, useRef } from "react";

const Chat = ({ id, isOpen, onClose }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      text: "Hello, how can I help you?",
      sentAt: "1628893200",
      sender: { uid: "user2" },
    },
    {
      text: "I have a question about my order.",
      sentAt: "1628896800",
      sender: { uid: "user1" },
    },
    {
      text: "Sure, I'd be happy to assist!",
      sentAt: "1628900400",
      sender: { uid: "user2" },
    },
    {
      text: "Sure, I'd be happy to assist!",
      sentAt: "1628900400",
      sender: { uid: "user1" },
    },
    {
      text: "Sure, I'd be happy to assist!",
      sentAt: "1628900400",
      sender: { uid: "user2" },
    },
  ]);
  const messagesEndRef = useRef(null);

  const scrollToEnd = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      setMessages([
        ...messages,
        {
          text: message,
          sentAt: Date.now().toString(),
          sender: { uid: "user1" },
        },
      ]);
      setMessage("");
      scrollToEnd();
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 transform transition-transform duration-300 ${
        isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
      }`}
    >
      <div className="bg-gray-900 text-white shadow-lg shadow-slate-900 rounded-xl w-11/12 md:w-4/5 h-[30rem] p-6 relative">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Chat</h2>
          <FaTimes className="cursor-pointer" onClick={onClose} />
        </div>

        <div className="flex flex-col overflow-y-scroll h-[22rem] pb-5">
          {messages?.map((msg, i) => (
            <Message
              key={i}
              msg={msg.text}
              time={Number(msg.sentAt)}
              uid={msg.sender.uid}
              isCurrentUser={msg.sender.uid === "user1"} // Example: user1 is the current user
            />
          ))}
          <div className="bg-transparent py-10" ref={messagesEndRef} />
        </div>

        <form
          className="absolute bottom-0 left-0 w-full flex items-center p-3"
          onSubmit={handleSendMessage}
        >
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-grow py-2 px-3 bg-gray-800 text-white placeholder-gray-400 rounded-md border-none focus:outline-none focus:ring-0"
            placeholder="Leave a message..."
          />
          <button
            type="submit"
            className="ml-2 text-blue-500 hover:text-blue-300"
          >
            <FaPaperPlane size={20} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;

const Message = ({ msg, isCurrentUser, time, uid }) => {
  return isCurrentUser ? (
    <div className="flex flex-col items-end mt-4 px-4">
      <div className="flex flex-col items-end space-x-2">
        <div className="flex items-start space-x-2">
          <div className="bg-blue-500 py-2 px-4 rounded-lg max-w-xs">
            <p className="text-white">{msg}</p>
          </div>
          <Identicon
            string={uid}
            size={30}
            className="rounded-full shadow-md"
          />
        </div>
        <span className="text-gray-400 text-sm mt-2">
          {new Date(time).toLocaleString()}
        </span>
      </div>
    </div>
  ) : (
    <div className="flex flex-col items-start mt-4">
      <div className="flex flex-col items-start space-x-2">
        <Identicon string={uid} size={30} className="rounded-full shadow-md" />
        <div className="bg-gray-600 py-2 px-4 rounded-lg max-w-xs">
          <p className="text-white">{msg}</p>
        </div>
        <span className="text-gray-400 text-sm mt-2">
          {new Date(time).toLocaleString()}
        </span>
      </div>
    </div>
  );
};
