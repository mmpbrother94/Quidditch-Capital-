// import React from 'react'
// import React, { useEffect, useState } from "react";
// import { Line } from "react-chartjs-2";
// import { motion } from "framer-motion";
// import { GiBroom, GiWizardStaff, GiQuidditchBroom } from "react-icons/gi";
// import axios from "axios";
// import ReportGeneration from './ReportGeneration'


// function Dashboard() {
//   const [stockData, setStockData] = useState(null);

//   useEffect(() => {
//     fetchStockData();
//   }, []);

//   const fetchStockData = async () => {
//     try {
//       const response = await axios.get(
//         "https://www.alphavantage.co/query",
//         {
//           params: {
//             function: "TIME_SERIES_DAILY",
//             symbol: "AAPL",
//             apikey: "2EZ3CGFZSGWQHCGH",
//           },
//         }
//       );
//       const timeSeries = response.data["Time Series (Daily)"];
//       const labels = Object.keys(timeSeries).slice(0, 10).reverse();
//       const dataPoints = labels.map((date) => parseFloat(timeSeries[date]["4. close"]));
//       setStockData({ labels, data: dataPoints });
//     } catch (error) {
//       console.error("Error fetching stock data:", error);
//     }
//   };

//   return (
//     <div className="p-8 bg-gray-900 min-h-screen text-white">
//       {/* Header */}
//       <motion.h1
//         className="text-4xl font-bold text-yellow-400 flex items-center"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         <GiBroom className="mr-3" /> Quidditch Dashboard
//       </motion.h1>

//       {/* Stock Market Chart */}
//       {stockData ? (
//         <div className="bg-gray-800 p-6 mt-6 rounded-lg shadow-lg">
//           <h2 className="text-xl font-semibold text-yellow-300">Stock Market Spells</h2>
//           <Line
//             data={{
//               labels: stockData.labels,
//               datasets: [
//                 {
//                   label: "Stock Price (AAPL)",
//                   data: stockData.data,
//                   borderColor: "gold",
//                   backgroundColor: "rgba(255, 215, 0, 0.5)",
//                 },
//               ],
//             }}
//           />
//         </div>
//       ) : (
//         <p className="mt-4">Loading stock data...</p>
//       )}

//       {/* Quidditch Trading Features */}
//       <div className="grid grid-cols-2 gap-6 mt-8">
//         <motion.div
//           className="bg-gray-800 p-6 rounded-lg shadow-lg"
//           whileHover={{ scale: 1.05 }}
//         >
//           <h2 className="text-xl font-semibold text-red-400 flex items-center">
//             <GiQuidditchBroom className="mr-2" /> Bludger Attacks (Option Chain)
//           </h2>
//           <p className="text-gray-300">Visualizing options trading as attack patterns.</p>
//         </motion.div>

//         <motion.div
//           className="bg-gray-800 p-6 rounded-lg shadow-lg"
//           whileHover={{ scale: 1.05 }}
//         >
//           <h2 className="text-xl font-semibold text-blue-400 flex items-center">
//             <GiWizardStaff className="mr-2" /> Seeker's Risk Analysis
//           </h2>
//           <p className="text-gray-300">Predicting portfolio risk like a Seeker's Snitch chase.</p>
//         </motion.div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;

import React from 'react'
// import ReportGeneration from './ReportGeneration'
function Dashboard() {
  return (
    <>
        <div>Dashboard</div>
    </>
  )
}

export default Dashboard