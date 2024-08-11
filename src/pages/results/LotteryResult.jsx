import React from "react";
import SubHeader from "../../components/SubHeader";
import { useLocation } from "react-router-dom";
import {
  generateLottery,
  getPurchasedNumbers,
  generateLotteryParticipants,
} from "../../services/fakeData";
import ResultTable from "../../components/ResultTable";
import { Helmet } from "react-helmet";

const LotteryResult = ({}) => {
  const location = useLocation();
  const { lottery } = location.state || {};
  const lotteryResult = [];
  const participantsList = generateLotteryParticipants(lottery.id);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <Helmet>
        <title>Lottery Result - Mega Base Lotto</title>
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <div className="relative z-10 min-h-screen flex flex-col">
        <SubHeader />
        <ResultTable
          lottery={lottery}
          participants={participantsList}
          result={lotteryResult}
        />
      </div>
    </div>
  );
};

export default LotteryResult;
