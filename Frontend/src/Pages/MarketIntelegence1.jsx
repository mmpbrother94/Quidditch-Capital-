import React, { useEffect, useState } from "react";
import { GiBroom, GiQuidditchBroom, GiSnitchQuidditch } from "react-icons/gi"; // Quidditch Icons
import { FaMagic } from "react-icons/fa"; // Magic Effect Icon
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import axios from "axios";

function MarketIntelegence() {
  const [optionChain, setOptionChain] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOptionData = async () => {
      try {
        const response = await axios.get("https://api.polygon.io/v3/snapshot/options_chain?apiKey=YOUR_API_KEY");
        setOptionChain(response.data.results);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch option chain data");
        setLoading(false);
      }
    };
    fetchOptionData();
  }, []);

  return (
    <div className="bg-gradient-to-r from-purple-900 to-indigo-900 min-h-screen text-white p-6 font-harry">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-4 border-yellow-400">
          <div>
            <h2 className="text-4xl font-bold flex items-center">
              <GiBroom className="mr-3 text-yellow-400" /> Bludger Attacks (Options Market)
            </h2>
            <p className="text-gray-300">Navigate the fast-moving bludgers of the options chain!</p>
          </div>
        </div>

        {/* Animation Section */}
        <div className="flex justify-center items-center w-full h-60">
          <DotLottieReact
            src="https://lottie.host/7a2dfb60-4c5b-41f6-bd1f-1d4cfcd9b73c/animation.lottie"
            loop
            autoplay
            className="w-96"
          />
        </div>

        {/* Option Chain Data */}
        <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-xl border border-yellow-400">
          <h2 className="text-3xl font-bold mb-4 flex items-center">
            <GiSnitchQuidditch className="mr-3 text-yellow-400" /> Options Chain Data
          </h2>
          {loading ? (
            <p className="text-center text-yellow-400 animate-pulse">Summoning Data...</p>
          ) : error ? (
            <p className="text-center text-red-800">{error}</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-yellow-400">
                <thead>
                  <tr className="bg-yellow-400 text-black">
                    <th className="p-4">Symbol</th>
                    <th className="p-4">Strike Price</th>
                    <th className="p-4">Bid</th>
                    <th className="p-4">Ask</th>
                    <th className="p-4">Volume</th>
                  </tr>
                </thead>
                <tbody>
                  {optionChain.slice(0, 10).map((option, index) => (
                    <tr key={index} className="border-t border-yellow-400 hover:bg-yellow-100 text-white hover:text-black">
                      <td className="p-4 font-bold">{option.contract_symbol}</td>
                      <td className="p-4">{option.strike_price}</td>
                      <td className="p-4">{option.bid_price}</td>
                      <td className="p-4">{option.ask_price}</td>
                      <td className="p-4">{option.volume}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MarketIntelegence;
