import React from "react";
import SubHeader from "../../components/SubHeader";
import LotteryTable from "../../components/LotteryTable";
import { useLocation } from "react-router-dom";
import { getPurchasedNumbers } from "../../services/fakeData";
import { Helmet } from "react-helmet";

const LotteryDetails = () => {
  const location = useLocation();
  const { lottery } = location.state || {};
  const luckyNumbers = getPurchasedNumbers(5);
  const purchasedNumbers = getPurchasedNumbers(5);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <Helmet>
        <title>Lottery Detials - Mega Base Lotto</title>
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <div className="relative z-10 min-h-screen flex flex-col">
        <SubHeader />

        <div className="w-full">
          <LotteryTable
            lottery={lottery}
            luckyNumbers={luckyNumbers}
            participants={purchasedNumbers}
          />
        </div>
      </div>
    </div>
  );
};

export default LotteryDetails;
