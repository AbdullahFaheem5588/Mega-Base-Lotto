import React from "react";
import SubHeader from "../../components/SubHeader";
import DrawTime from "../../components/DrawTime";
import { useLocation } from "react-router-dom";
//import Generator from "../../components/Generator";
import AuthChat from "../../components/AuthChat";
//import Chat from "../../components/Chat";

const Draws = () => {
  const location = useLocation();
  const { lottery } = location.state || {};
  const luckyNumbers = [
    "123456",
    "234567",
    "345678",
    "456789",
    "567890",
    "678901",
    "789012",
    "890123",
    "901234",
    "012345",
  ];
  const purchasedNumbers = ["123456", "234567", "345678"];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="relative z-10 min-h-screen flex flex-col">
        <SubHeader />

        <div className="w-full">
          <DrawTime
            lottery={lottery}
            luckyNumbers={luckyNumbers}
            participants={purchasedNumbers}
          />
          <AuthChat isOpen={false} />
          {/* <Generator />
      
      <Chat id="sample-id" /> */}
        </div>
      </div>
    </div>
  );
};

export default Draws;
