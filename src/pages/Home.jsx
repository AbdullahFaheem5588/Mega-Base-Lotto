import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Lotteries from "../components/Lotteries";
import { generateLotteries } from "../services/fakeData";
import { Helmet } from "react-helmet";

export default function Home() {
  const [lotteries, setLotteries] = useState([]);

  useEffect(() => {
    const fetchLotteries = async () => {
      try {
        const data = generateLotteries(5);
        setLotteries(data);
      } catch (error) {
        console.error("Error fetching Lotteries:", error);
      }
    };

    fetchLotteries();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Helmet>
        <title>Mega Base Lotto</title>
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <Header />
      <Lotteries Lotteries={lotteries} />
    </div>
  );
}
