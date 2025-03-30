// import React, { useEffect, useState } from "react";
// import { FaQuidditch, FaBolt } from "react-icons/fa"; // Quidditch & Lightning icons
// import { FiFilter } from "react-icons/fi"; // Filter icon
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";

// function BludgerChain() {
//   const [stockData, setStockData] = useState([
//     { id: 1, team: "Gryffindor", bludgerImpact: "High", price: "$2,500" },
//     { id: 2, team: "Slytherin", bludgerImpact: "Medium", price: "$3,200" },
//     { id: 3, team: "Hufflepuff", bludgerImpact: "Low", price: "$1,800" },
//     { id: 4, team: "Ravenclaw", bludgerImpact: "High", price: "$2,700" },
//   ]);

//   const [rates, setRates] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   return (
//     <div className="bg-gradient-to-r from-purple-900 via-black to-yellow-700 min-h-screen text-gold-200 p-6">
//       <div className="max-w-7xl mx-auto space-y-8">
//         {/* Header */}
//         <div className="flex justify-between items-center border-b pb-4 border-gold-400">
//           <div>
//             <h2 className="text-4xl font-bold text-yellow-400">Quidditch Market Simulator</h2>
//             <p className="text-gray-300">Track stock volatility like Bludger Attacks</p>
//           </div>
//           <div className="flex space-x-4">
//             <select className="bg-yellow-400 text-black px-4 py-2 rounded-lg shadow-lg hover:bg-yellow-300">
//               <option>Live Match</option>
//               <option>Past Season</option>
//               <option>Fantasy League</option>
//             </select>
//             <button className="flex items-center bg-yellow-400 text-black px-4 py-2 rounded-lg shadow-lg hover:bg-yellow-300">
//               <FiFilter className="mr-2" /> More Filters
//             </button>
//           </div>
//         </div>

//         {/* Animation Section */}
//         <div className="flex justify-center items-center w-full h-60">
//           <DotLottieReact
//             src="https://lottie.host/841f10c5-71bf-4b32-90e9-a76aa1a77e80/GXJ0ETPY5i.lottie"
//             loop
//             autoplay
//             className="w-96"
//           />
//         </div>

//         {/* Bludger Attacks Stock Data */}
//         <div className="bg-black text-gold-300 p-6 rounded-lg shadow-xl">
//           <h2 className="text-3xl font-bold mb-4">🏆Bludger Attack Volatility</h2>
//           <div className="overflow-x-auto">
//             <table className="w-full border-collapse">
//               <thead>
//                 <tr className="bg-yellow-500 text-black">
//                   <th className="p-4 text-left">#</th>
//                   <th className="p-4 text-left">Team</th>
//                   <th className="p-4 text-left">Bludger Impact</th>
//                   <th className="p-4 text-left">Stock Price</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {stockData.map((item, index) => (
//                   <tr
//                     key={item.id}
//                     className={`border-t transition hover:bg-yellow-600 hover:text-black ${{
//                       High: "bg-red-700 text-red-300",
//                       Medium: "bg-yellow-700 text-yellow-300",
//                       Low: "bg-green-700 text-green-300",
//                     }[item.bludgerImpact]}`}
//                   >
//                     <td className="p-4">{item.id}</td>
//                     <td className="p-4 font-semibold">{item.team}</td>
//                     <td className="p-4 font-bold">{item.bludgerImpact}</td>
//                     <td className="p-4 font-bold">{item.price}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BludgerChain;




import React, { useState } from "react";
import { FaQuidditch, FaBolt } from "react-icons/fa"; // Quidditch & Lightning icons
import { FiFilter } from "react-icons/fi"; // Filter icon
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useNavigate } from "react-router-dom";

function BludgerChain() {
  const navigate = useNavigate();
  const [selectedTeam, setSelectedTeam] = useState("Gryffindor");
  const [selectedExpDate, setSelectedExpDate] = useState("2025-04-04");

  const expirationDates = [
    "2025-04-04", "2025-04-11", "2025-04-17", "2025-04-25", "2025-05-02",
    "2025-05-16", "2025-06-20", "2025-07-18", "2025-08-15", "2025-09-19",
    "2025-10-17", "2025-12-19", "2026-01-16", "2026-03-20", "2026-06-18",
    "2026-12-18", "2027-01-15", "2027-06-17", "2027-12-17"
  ];

  const strategies = [
    "Balanced Trade (Moderate Risk)",
    "Safe Trade (Defensive Strategy)",
    "High-Risk Trade (Aggressive Strategy)"
  ];

  const handleStrategy = () => {
    const randomStrategy = strategies[Math.floor(Math.random() * strategies.length)];
    navigate("/TradingStrategyResult", { state: { selectedTeam, selectedExpDate, randomStrategy } });
  };

  return (
    <div className="bg-gradient-to-r from-purple-900 via-black to-yellow-700 min-h-screen text-gold-200 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-4 border-gold-400">
          <div>
            <h2 className="text-4xl font-bold text-yellow-400">Quidditch Market Simulator</h2>
            <p className="text-gray-300">Track stock volatility like Bludger Attacks</p>
          </div>
          <div className="flex space-x-4">
            <select className="bg-yellow-400 text-black px-4 py-2 rounded-lg shadow-lg hover:bg-yellow-300">
              <option>Live Match</option>
              <option>Past Season</option>
              <option>Fantasy League</option>
            </select>
            <button className="flex items-center bg-yellow-400 text-black px-4 py-2 rounded-lg shadow-lg hover:bg-yellow-300">
              <FiFilter className="mr-2" /> More Filters
            </button>
          </div>
        </div>

        {/* Animation Section */}
        <div className="flex justify-center items-center w-full h-60">
          <DotLottieReact
            src="https://lottie.host/841f10c5-71bf-4b32-90e9-a76aa1a77e80/GXJ0ETPY5i.lottie"
            loop
            autoplay
            className="w-96"
          />
        </div>

        {/* Input Fields */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-x-4 md:space-y-0">
          <select
            value={selectedTeam}
            onChange={(e) => setSelectedTeam(e.target.value)}
            className="bg-yellow-400 text-black px-4 py-2 rounded-lg shadow-lg hover:bg-yellow-300"
          >
            <option>Gryffindor</option>
            <option>Slytherin</option>
            <option>Ravenclaw</option>
            <option>Hufflepuff</option>
          </select>

          <select
            value={selectedExpDate}
            onChange={(e) => setSelectedExpDate(e.target.value)}
            className="bg-yellow-400 text-black px-4 py-2 rounded-lg shadow-lg hover:bg-yellow-300"
          >
            {expirationDates.map((date) => (
              <option key={date} value={date}>{date}</option>
            ))}
          </select>

          <button
            onClick={handleStrategy}
            className="bg-yellow-500 text-black px-6 py-2 rounded-lg shadow-lg hover:bg-yellow-400 font-bold"
          >
            Suggested Trading Strategy
          </button>
        </div>

        {/* Bludger Attacks Stock Data */}
        <div className="bg-black text-gold-300 p-6 rounded-lg shadow-xl">
          <h2 className="text-3xl font-bold mb-4">🏆Bludger Attack Volatility</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-yellow-500 text-black">
                  <th className="p-4 text-left">#</th>
                  <th className="p-4 text-left">Team</th>
                  <th className="p-4 text-left">Bludger Impact</th>
                  <th className="p-4 text-left">Stock Price</th>
                </tr>
              </thead>
              <tbody>
                {[{ id: 1, team: "Gryffindor", bludgerImpact: "High", price: "$2,500" },
                  { id: 2, team: "Slytherin", bludgerImpact: "Medium", price: "$3,200" },
                  { id: 3, team: "Hufflepuff", bludgerImpact: "Low", price: "$1,800" },
                  { id: 4, team: "Ravenclaw", bludgerImpact: "High", price: "$2,700" }
                ].map((item) => (
                  <tr key={item.id} className="border-t transition hover:bg-yellow-600 hover:text-black">
                    <td className="p-4">{item.id}</td>
                    <td className="p-4 font-semibold">{item.team}</td>
                    <td className="p-4 font-bold">{item.bludgerImpact}</td>
                    <td className="p-4 font-bold">{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BludgerChain;






// import React, { useState } from "react";
// import { FaQuidditch, FaBolt } from "react-icons/fa";
// import { FiFilter } from "react-icons/fi";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";
// import { useNavigate } from "react-router-dom";

// function BludgerChain() {
//   const navigate = useNavigate();
//   const [selectedTeam, setSelectedTeam] = useState("Gryffindor");
//   const [selectedExpDate, setSelectedExpDate] = useState("2025-04-04");

//   const expirationDates = [
//     "2025-04-04",
//     "2025-04-11",
//     "2025-04-17",
//     "2025-04-25",
//     "2025-05-02",
//     "2025-05-16",
//     "2025-06-20",
//     "2025-07-18",
//     "2025-08-15",
//     "2025-09-19",
//     "2025-10-17",
//     "2025-12-19",
//     "2026-01-16",
//     "2026-03-20",
//     "2026-06-18",
//     "2026-12-18",
//     "2027-01-15",
//     "2027-06-17",
//     "2027-12-17",
//   ];

//   const tradingStrategies = [
//     "Balanced Trade (Moderate Risk)",
//     "Safe Trade (Defensive Strategy)",
//     "High-Risk Trade (Aggressive Strategy)",
//   ];

//   const handleSuggestedStrategy = () => {
//     const randomStrategy =
//       tradingStrategies[Math.floor(Math.random() * tradingStrategies.length)];
//     navigate("/trading-strategy", {
//       state: {
//         team: selectedTeam,
//         expDate: selectedExpDate,
//         strategy: randomStrategy,
//       },
//     });
//   };

//   return (
//     <div className="bg-gradient-to-r from-purple-900 via-black to-yellow-700 min-h-screen text-gold-200 p-6">
//       <div className="max-w-7xl mx-auto space-y-8">
//         <div className="flex justify-between items-center border-b pb-4 border-gold-400">
//           <div>
//             <h2 className="text-4xl font-bold text-yellow-400">
//               Quidditch Market Simulator
//             </h2>
//             <p className="text-gray-300">
//               Track stock volatility like Bludger Attacks
//             </p>
//           </div>
//           <div className="flex space-x-4">
//             <select className="bg-yellow-400 text-black px-4 py-2 rounded-lg shadow-lg hover:bg-yellow-300">
//               <option>Live Match</option>
//               <option>Past Season</option>
//               <option>Fantasy League</option>
//             </select>
//             <button className="flex items-center bg-yellow-400 text-black px-4 py-2 rounded-lg shadow-lg hover:bg-yellow-300">
//               <FiFilter className="mr-2" /> More Filters
//             </button>
//           </div>
//         </div>

//         <div className="flex justify-center items-center w-full h-60">
//           <DotLottieReact
//             src="https://lottie.host/841f10c5-71bf-4b32-90e9-a76aa1a77e80/GXJ0ETPY5i.lottie"
//             loop
//             autoplay
//             className="w-96"
//           />
//         </div>

//         {/* Input Fields */}
//         <div className="bg-black text-gold-300 p-6 rounded-lg shadow-xl space-y-4">
//           <h2 className="text-3xl font-bold mb-4">Select Your Trade</h2>
//           <div className="flex space-x-4">
//             <div>
//               <label className="block text-yellow-400 mb-2">Select Team:</label>
//               <select
//                 value={selectedTeam}
//                 onChange={(e) => setSelectedTeam(e.target.value)}
//                 className="bg-yellow-400 text-black px-4 py-2 rounded-lg shadow-lg hover:bg-yellow-300"
//               >
//                 <option>Gryffindor</option>
//                 <option>Slytherin</option>
//                 <option>Ravenclaw</option>
//                 <option>Hufflepuff</option>
//               </select>
//             </div>
//             <div>
//               <label className="block text-yellow-400 mb-2">
//                 Choose Exp Date:
//               </label>
//               <select
//                 value={selectedExpDate}
//                 onChange={(e) => setSelectedExpDate(e.target.value)}
//                 className="bg-yellow-400 text-black px-4 py-2 rounded-lg shadow-lg hover:bg-yellow-300"
//               >
//                 {expirationDates.map((date) => (
//                   <option key={date}>{date}</option>
//                 ))}
//               </select>
//             </div>
//           </div>
//           <button
//             onClick={handleSuggestedStrategy}
//             className="mt-4 bg-yellow-400 text-black px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-300 w-full font-bold"
//           >
//             Suggested Trading Strategy
//           </button>
//         </div>
//         {/* Bludger Attacks Stock Data */}
//         <div className="bg-black text-gold-300 p-6 rounded-lg shadow-xl">
//           <h2 className="text-3xl font-bold mb-4">
//             🏆Bludger Attack Volatility
//           </h2>
//           <div className="overflow-x-auto">
//             <table className="w-full border-collapse">
//               <thead>
//                 <tr className="bg-yellow-500 text-black">
//                   <th className="p-4 text-left">#</th>
//                   <th className="p-4 text-left">Team</th>
//                   <th className="p-4 text-left">Bludger Impact</th>
//                   <th className="p-4 text-left">Stock Price</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {stockData.map((item, index) => (
//                   <tr
//                     key={item.id}
//                     className={`border-t transition hover:bg-yellow-600 hover:text-black ${
//                       {
//                         High: "bg-red-700 text-red-300",
//                         Medium: "bg-yellow-700 text-yellow-300",
//                         Low: "bg-green-700 text-green-300",
//                       }[item.bludgerImpact]
//                     }`}
//                   >
//                     <td className="p-4">{item.id}</td>
//                     <td className="p-4 font-semibold">{item.team}</td>
//                     <td className="p-4 font-bold">{item.bludgerImpact}</td>
//                     <td className="p-4 font-bold">{item.price}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BludgerChain;
