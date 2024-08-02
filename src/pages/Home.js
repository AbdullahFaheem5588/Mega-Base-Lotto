import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Lotteries from "../components/Lotteries";

export default function Home() {
  const [lotteries, setLotteries] = useState([]);
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);

    // Simulate data fetching (remove in production and replace with actual data fetching)
    const fetchLotteries = async () => {
      try {
        // Replace this with actual API call if needed
        const data = [
          {
            id: "1",
            title: "Mega Jackpot Lottery",
            description:
              "Join the Mega Jackpot Lottery for a chance to win big! Buy your tickets now and be part of the excitement.",
            participants: 1500,
            expiresAt: new Date(Date.now() + 48 * 60 * 60 * 1000), // 2 days from now
            owner: true,
            group: {
              hasJoined: false,
            },
            ticketPrice: "0.1 ETH",
            drawsAt: "2024-08-05 18:00:00",
          },
          {
            id: "2",
            title: "Super Prize Lottery",
            description:
              "Don’t miss your chance to win amazing prizes in the Super Prize Lottery! Tickets are selling fast.",
            participants: 1200,
            expiresAt: new Date(Date.now() + 72 * 60 * 60 * 1000), // 3 days from now
            owner: true,
            group: {
              hasJoined: true,
            },
            ticketPrice: "0.2 ETH",
            drawsAt: "2024-08-06 19:00:00",
          },
          {
            id: "3",
            title: "Grand Fortune Lottery",
            description:
              "Be part of the Grand Fortune Lottery for a chance at a life-changing win. Secure your ticket today!",
            participants: 2000,
            expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000), // 1 day from now
            owner: false,
            group: {
              hasJoined: false,
            },
            ticketPrice: "0.15 ETH",
            drawsAt: "2024-08-04 20:00:00",
          },
          {
            id: "4",
            title: "Lucky Star Lottery",
            description:
              "The Lucky Star Lottery offers incredible rewards. Get your tickets and become a winner!",
            participants: 1800,
            expiresAt: new Date(Date.now() + 96 * 60 * 60 * 1000), // 4 days from now
            owner: false,
            group: {
              hasJoined: true,
            },
            ticketPrice: "0.05 ETH",
            drawsAt: "2024-08-07 21:00:00",
          },
          {
            id: "5",
            title: "Ultimate Prize Lottery",
            description:
              "Join the Ultimate Prize Lottery and grab your chance to win the ultimate prize. Tickets are available now!",
            participants: 2500,
            expiresAt: new Date(Date.now() + 60 * 60 * 1000), // 1 hour from now
            owner: true,
            group: {
              hasJoined: false,
            },
            ticketPrice: "0.3 ETH",
            drawsAt: "2024-08-03 22:00:00",
          },
          {
            id: "6",
            title: "Big Win Lottery",
            description:
              "The Big Win Lottery is your ticket to a grand prize. Purchase your ticket and enter the draw!",
            participants: 1400,
            expiresAt: new Date(Date.now() + 120 * 60 * 60 * 1000), // 5 days from now
            owner: false,
            group: {
              hasJoined: false,
            },
            ticketPrice: "0.25 ETH",
            drawsAt: "2024-08-08 18:00:00",
          },
          {
            id: "7",
            title: "Fortune Finder Lottery",
            description:
              "Find your fortune with the Fortune Finder Lottery. Buy your tickets now and win big!",
            participants: 1600,
            expiresAt: new Date(Date.now() + 36 * 60 * 60 * 1000), // 1.5 days from now
            owner: true,
            group: {
              hasJoined: true,
            },
            ticketPrice: "0.1 ETH",
            drawsAt: "2024-08-05 15:00:00",
          },
        ];

        setLotteries(data);
      } catch (error) {
        console.error("Error fetching Lotteries:", error);
      }
    };

    fetchLotteries();
  }, []);

  if (!showChild || typeof window === "undefined") {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Lotteries Lotteries={lotteries} />
    </div>
  );
}
