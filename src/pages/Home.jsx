import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import Lotteries from "../components/Lotteries";
import { Helmet } from "react-helmet";
import { monitorWalletConnection } from "../services/blockchain";

export default function Home() {
  const dispatch = useDispatch();
  const lotteries = useSelector((state) => state.globalStates.lotteries);
  const effectRan = useRef(false);

  useEffect(() => {
    if (effectRan.current === false) {
      console.log(lotteries);
      monitorWalletConnection();
      effectRan.current = true;
    }

    return () => {
      effectRan.current = true;
    };
  }, [dispatch]);

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
