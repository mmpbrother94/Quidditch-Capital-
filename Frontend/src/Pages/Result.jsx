import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { team, tolerance, timeFrame, result } = location.state || {};

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      <div className="bg-gray-800 p-6 rounded-lg shadow-xl text-center w-full max-w-md">
        <h2 className="text-2xl font-bold text-gold-400 mb-4">Risk Analysis Result</h2>
        <p className="text-lg"><strong>Team:</strong> {team}</p>
        <p className="text-lg"><strong>Risk Tolerance:</strong> {tolerance}</p>
        <p className="text-lg"><strong>Time Frame:</strong> {timeFrame}</p>
        <div className="mt-4 p-4 bg-gray-700 rounded-md shadow-inner">
          <p className="text-lg font-semibold">{result}</p>
        </div>
        <button
          onClick={() => navigate("/")}
          className="mt-6 px-4 py-2 bg-gold-500 text-black rounded-lg shadow-md hover:bg-gold-600 transition"
        >
          Back to Analysis
        </button>
      </div>
    </div>
  );
};

export default Result;
