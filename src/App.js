import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Jackpots from "./components/Jackpots";
import "./index.css";

function App() {
  const [showChild, setShowChild] = useState(false);
  const [jackpots, setJackpots] = useState([]);

  useEffect(() => {
    setShowChild(true);

    // Simulate data fetching (remove in production and replace with actual data fetching)
    const fetchJackpots = async () => {
      try {
        // Replace this with actual API call if needed
        const data = [
          {
            id: 1,
            image: "https://via.placeholder.com/100",
            prize: "$1000",
            drawsAt: "2024-08-01",
            title: "Jackpot 1",
            description: "Description for Jackpot 1",
          },
          {
            id: 2,
            image: "https://via.placeholder.com/100",
            prize: "$2000",
            drawsAt: "2024-08-02",
            title: "Jackpot 2",
            description: "Description for Jackpot 2",
          },
          {
            id: 2,
            image: "https://via.placeholder.com/100",
            prize: "$2000",
            drawsAt: "2024-08-02",
            title: "Jackpot 2",
            description: "Description for Jackpot 2",
          },
          {
            id: 2,
            image: "https://via.placeholder.com/100",
            prize: "$2000",
            drawsAt: "2024-08-02",
            title: "Jackpot 2",
            description: "Description for Jackpot 2",
          },
          {
            id: 2,
            image: "https://via.placeholder.com/100",
            prize: "$2000",
            drawsAt: "2024-08-02",
            title: "Jackpot 2",
            description: "Description for Jackpot 2",
          },
          {
            id: 2,
            image: "https://via.placeholder.com/100",
            prize: "$2000",
            drawsAt: "2024-08-02",
            title: "Jackpot 2",
            description: "Description for Jackpot 2",
          },
        ];
        setJackpots(data);
      } catch (error) {
        console.error("Error fetching jackpots:", error);
      }
    };

    fetchJackpots();
  }, []);

  if (!showChild || typeof window === "undefined") {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Jackpots jackpots={jackpots} />
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;
