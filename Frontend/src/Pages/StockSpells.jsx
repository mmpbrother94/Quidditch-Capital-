// import { FaChartLine, FaMoneyBillWave, FaBriefcase } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { DollarSign } from "lucide-react";
// function StockSpells() {
//   return (
//     <>
//       <div className="min-h-screen bg-gradient-to-br from-black to-red-900 text-white p-10">
      
//       {/* Header */}
//       <header className="text-center mb-16">
//         <h1 className="text-5xl font-bold text-yellow-400">Stock Market Spells</h1>
//         <p className="text-lg mt-4 text-gray-300">Harness real-world stock data to cast winning spells and boost your Quidditch team's performance.</p>
//       </header>

//       {/* Indicators Section */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        
//         {/* GDP Card */}
//         <motion.div
//           className="bg-red-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
//           whileHover={{ scale: 1.05 }}
//         >
//           <FaChartLine className="text-yellow-400 text-6xl mx-auto" />
//           <h2 className="text-3xl font-bold mt-4 text-yellow-300">Team Performance</h2>
//           <p className="mt-4 text-gray-300">The team’s success rate increased by <span className="text-yellow-400">3.5%</span>, driven by stock market insights.</p>
//           <button className="mt-6 bg-gray-700 hover:bg-gray-800 text-white px-6 py-2 rounded-lg transition">
//             Learn More
//           </button>
//         </motion.div>

//         {/* Inflation Card */}
//         <motion.div
//           className="bg-red-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
//           whileHover={{ scale: 1.05 }}
//         >
//           <FaMoneyBillWave className="text-green-400 text-6xl mx-auto" />
//           <h2 className="text-3xl font-bold mt-4 text-green-300">Option Chain Bludgers</h2>
//           <p className="mt-4 text-gray-300">Market volatility increased by <span className="text-green-400">2.8%</span>, affecting trading strategies.</p>
//           <button className="mt-6 bg-gray-700 hover:bg-gray-800 text-white px-6 py-2 rounded-lg transition">
//             Learn More
//           </button>
//         </motion.div>

//         {/* Unemployment Card */}
//         <motion.div
//           className="bg-red-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
//           whileHover={{ scale: 1.05 }}
//         >
//           <FaBriefcase className="text-blue-400 text-6xl mx-auto" />
//           <h2 className="text-3xl font-bold mt-4 text-blue-300">Seeker Trajectory</h2>
//           <p className="mt-4 text-gray-300">Risk analysis suggests a <span className="text-blue-400">1.2%</span> adjustment in Seeker movements.</p>
//           <button className="mt-6 bg-gray-700 hover:bg-gray-800 text-white px-6 py-2 rounded-lg transition">
//             Learn More
//           </button>
//         </motion.div>

//         {/* Foreign Exchange Reserves */}
//         <motion.div
//           className="bg-red-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
//           whileHover={{ scale: 1.05 }}
//         >
//           <DollarSign size={70} color="purple" className="text-purple-400 text-6xl mx-auto" />
//           <h2 className="text-3xl font-bold mt-4 text-purple-300">Fantasy Team Tokens</h2>
//           <p className="mt-4 text-gray-300">Investment in teams saw a <span className="text-purple-400">6.2%</span> surge, showing high engagement.</p>
//           <button className="mt-6 bg-gray-700 hover:bg-gray-800 text-white px-6 py-2 rounded-lg transition">
//             Learn More
//           </button>
//         </motion.div>
//       </div>

//       {/* Statistical Summary */}
//       <div className="mt-20 bg-gray-900 rounded-lg p-10 shadow-lg">
//         <h2 className="text-4xl font-bold mb-6 text-yellow-400">Statistical Summary</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//           <div>
//             <p className="text-lg text-gray-300">
//               The stock market-driven Quidditch game is thriving with increased engagement, optimized strategies, and more dynamic gameplay. 
//               Traders and players alike are navigating the mystical world of finance with ease.
//             </p>
//           </div>
//           <div className="space-y-4">
//             <div className="flex justify-between text-xl">
//               <span>Team Performance:</span>
//               <span className="text-yellow-400">+3.5%</span>
//             </div>
//             <div className="flex justify-between text-xl">
//               <span>Market Volatility:</span>
//               <span className="text-green-400">+2.8%</span>
//             </div>
//             <div className="flex justify-between text-xl">
//               <span>Seeker Strategy Adjustments:</span>
//               <span className="text-blue-400">-1.2%</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     </>
//   )
// }

// export default StockSpells


import { FaChartLine, FaMoneyBillWave, FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";
import { DollarSign } from "lucide-react";
import { useNavigate } from "react-router-dom";

function StockSpells() {
  const navigate = useNavigate();

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-black to-red-900 text-white p-10">
      
      {/* Header */}
      <header className="text-center mb-16">
        <h1 className="text-5xl font-bold text-yellow-400">Stock Market Spells</h1>
        <p className="text-lg mt-4 text-gray-300">Harness real-world stock data to cast winning spells and boost your Quidditch team's performance.</p>
      </header>

      {/* Indicators Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* GDP Card */}
        <motion.div
          className="bg-red-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
          whileHover={{ scale: 1.05 }}
        >
          <FaChartLine className="text-yellow-400 text-6xl mx-auto" />
          <h2 className="text-3xl font-bold mt-4 text-yellow-300">Team Performance</h2>
          <p className="mt-4 text-gray-300">The team’s success rate increased by <span className="text-yellow-400">3.5%</span>, driven by stock market insights.</p>
          <button 
            className="mt-6 bg-gray-700 hover:bg-gray-800 text-white px-6 py-2 rounded-lg transition"
            onClick={() => navigate("/TeamTradingPoints")}
          >
            Learn More
          </button>
        </motion.div>

        {/* Inflation Card */}
        <motion.div
          className="bg-red-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
          whileHover={{ scale: 1.05 }}
        >
          <FaMoneyBillWave className="text-green-400 text-6xl mx-auto" />
          <h2 className="text-3xl font-bold mt-4 text-green-300">Option Chain Bludgers</h2>
          <p className="mt-4 text-gray-300">Market volatility increased by <span className="text-green-400">2.8%</span>, affecting trading strategies.</p>
          <button className="mt-6 bg-gray-700 hover:bg-gray-800 text-white px-6 py-2 rounded-lg transition">
            Learn More
          </button>
        </motion.div>

        {/* Unemployment Card */}
        <motion.div
          className="bg-red-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
          whileHover={{ scale: 1.05 }}
        >
          <FaBriefcase className="text-blue-400 text-6xl mx-auto" />
          <h2 className="text-3xl font-bold mt-4 text-blue-300">Seeker Trajectory</h2>
          <p className="mt-4 text-gray-300">Risk analysis suggests a <span className="text-blue-400">1.2%</span> adjustment in Seeker movements.</p>
          <button className="mt-6 bg-gray-700 hover:bg-gray-800 text-white px-6 py-2 rounded-lg transition">
            Learn More
          </button>
        </motion.div>

        {/* Foreign Exchange Reserves */}
        <motion.div
          className="bg-red-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
          whileHover={{ scale: 1.05 }}
        >
          <DollarSign size={70} color="purple" className="text-purple-400 text-6xl mx-auto" />
          <h2 className="text-3xl font-bold mt-4 text-purple-300">Fantasy Team Tokens</h2>
          <p className="mt-4 text-gray-300">Investment in teams saw a <span className="text-purple-400">6.2%</span> surge, showing high engagement.</p>
          <button className="mt-6 bg-gray-700 hover:bg-gray-800 text-white px-6 py-2 rounded-lg transition">
            Learn More
          </button>
        </motion.div>
      </div>
    </div>
    </>
  );
}

export default StockSpells;

