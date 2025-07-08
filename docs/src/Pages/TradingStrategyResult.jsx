import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function TradingStrategyResult() {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedTeam, selectedExpDate, randomStrategy } = location.state || {};

  return (
    <div className="bg-gradient-to-r from-purple-900 via-black to-yellow-700 min-h-screen text-gold-200 p-6 flex flex-col justify-center items-center">
      <div className="bg-black text-yellow-300 p-8 rounded-lg shadow-xl w-full max-w-lg text-center">
        <h1 className="text-3xl font-bold mb-4">Trading Strategy Result</h1>
        <p className="text-xl font-semibold mb-2">Selected Team: <span className="text-yellow-500">{selectedTeam}</span></p>
        <p className="text-xl font-semibold mb-2">Expiration Date: <span className="text-yellow-500">{selectedExpDate}</span></p>
        <p className="text-2xl font-bold mt-4">Suggested Trading Strategy:</p>
        <p className="text-yellow-400 text-xl font-semibold">{randomStrategy}</p>
        <button 
          onClick={() => navigate(-1)}
          className="mt-6 bg-yellow-500 text-black px-6 py-2 rounded-lg shadow-lg hover:bg-yellow-400 font-bold"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default TradingStrategyResult;
