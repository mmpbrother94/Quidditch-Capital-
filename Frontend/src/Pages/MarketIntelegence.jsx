// import React, { useEffect, useState } from "react";
// import { FaBell } from "react-icons/fa"; // Notification icon
// import { FiFilter } from "react-icons/fi"; // Filter icon
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";

// function MarketIntelegence() {
//   const [stockData, setStockData] = useState([
//     { id: 1, product: "Bitcoin", stock: 150, price: "$60,000" },
//     { id: 2, product: "Ethereum", stock: 200, price: "$3,500" },
//     { id: 3, product: "Litecoin", stock: 80, price: "$150" },
//     { id: 4, product: "Ripple", stock: 500, price: "$0.45" },
//   ]);

//   const [rates, setRates] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchRates = async () => {
//       try {
//         const response = await fetch(
//           `https://api.exchangerate-api.com/v4/latest/USD`
//         );
//         if (!response.ok) {
//           throw new Error("Failed to fetch exchange rates");
//         }
//         const data = await response.json();
//         setRates(data.rates);
//         setLoading(false);
//       } catch (error) {
//         setError(error.message);
//         setLoading(false);
//       }
//     };

//     fetchRates();
//   }, []);

//   return (
//     <div className="bg-gradient-to-r  from-gray-800 to-blue-900 min-h-screen text-white p-6">
//       <div className="max-w-7xl mx-auto space-y-8">
//         {/* Header */}
//         <div className="flex justify-between items-center border-b pb-4">
//           <div>
//             <h2 className="text-4xl font-bold animate-fade-in">Market Intelligence</h2>
//             <p className="text-gray-300">Analysis of market trends and investment flows</p>
//           </div>
//           <div className="flex space-x-4">
//             <select className="bg-white text-black px-4 py-2 rounded-lg shadow-lg transition hover:bg-gray-100">
//               <option>Yearly</option>
//               <option>Quarterly</option>
//               <option>Monthly</option>
//             </select>
//             <button className="flex items-center bg-white text-black px-4 py-2 rounded-lg shadow-lg transition hover:bg-gray-100">
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

//         {/* Exchange Rates */}
//         <div className="bg-white text-black p-6 rounded-lg shadow-xl animate-slide-in">
//           <h2 className="text-3xl font-bold mb-4">💱 Exchange Rates</h2>
//           {loading ? (
//             <p className="text-center text-blue-600 animate-pulse">Loading...</p>
//           ) : error ? (
//             <p className="text-center text-red-500">{error}</p>
//           ) : (
//             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//               {Object.entries(rates)
//                 .slice(0, 12)
//                 .map(([currency, rate]) => (
//                   <div
//                     key={currency}
//                     className="p-4 border rounded-lg shadow-md transition transform hover:scale-105 bg-gray-100"
//                   >
//                     <h3 className="text-lg font-semibold">{currency}</h3>
//                     <p className="text-blue-600 text-xl font-bold">{rate.toFixed(4)}</p>
//                   </div>
//                 ))}
//             </div>
//           )}
//         </div>

//         {/* Stock Data */}
//         <div className="bg-white text-black p-6 rounded-lg shadow-xl animate-slide-in">
//           <h2 className="text-3xl font-bold mb-4">📊 Stock Data</h2>
//           <div className="overflow-x-auto">
//             <table className="w-full border-collapse">
//               <thead>
//                 <tr className="bg-gray-200">
//                   <th className="p-4 text-left">#</th>
//                   <th className="p-4 text-left">Product</th>
//                   <th className="p-4 text-left">Stock</th>
//                   <th className="p-4 text-left">Price</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {stockData.map((item, index) => (
//                   <tr
//                     key={item.id}
//                     className={`border-t transition hover:bg-gray-100 ${
//                       index % 2 === 0 ? "bg-gray-50" : "bg-white"
//                     }`}
//                   >
//                     <td className="p-4">{item.id}</td>
//                     <td className="p-4 font-semibold">{item.product}</td>
//                     <td
//                       className={`p-4 font-bold ${
//                         item.stock > 100
//                           ? "text-green-500"
//                           : item.stock > 50
//                           ? "text-yellow-500"
//                           : "text-red-500"
//                       }`}
//                     >
//                       {item.stock}
//                     </td>
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

// export default MarketIntelegence;

import React, { useEffect, useState } from "react";
import { FaQuidditch, FaBolt } from "react-icons/fa"; // Quidditch & Lightning icons
import { FiFilter } from "react-icons/fi"; // Filter icon
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function MarketIntelegence() {
  const [stockData, setStockData] = useState([
    { id: 1, team: "Gryffindor", bludgerImpact: "High", price: "$2,500" },
    { id: 2, team: "Slytherin", bludgerImpact: "Medium", price: "$3,200" },
    { id: 3, team: "Hufflepuff", bludgerImpact: "Low", price: "$1,800" },
    { id: 4, team: "Ravenclaw", bludgerImpact: "High", price: "$2,700" },
  ]);

  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/USD`);
        if (!response.ok) {
          throw new Error("Failed to fetch exchange rates");
        }
        const data = await response.json();
        setRates(data.rates);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchRates();
  }, []);

  return (
    <div className="bg-gradient-to-r from-purple-900 via-black to-yellow-700 min-h-screen text-gold-200 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-4 border-gold-400">
          <div>
            <h2 className="text-4xl font-bold text-yellow-400">Quidditch Market Simulator</h2>
            <p className="text-gray-300">Track stock volatility like Bludger Attacks ⚡</p>
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

        {/* Exchange Rates */}
        <div className="bg-black text-gold-300 p-6 rounded-lg shadow-xl">
          <h2 className="text-3xl font-bold mb-4">⚡ Exchange Rates</h2>
          {loading ? (
            <p className="text-center text-yellow-400 animate-pulse">Summoning data...</p>
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {Object.entries(rates)
                .slice(0, 12)
                .map(([currency, rate]) => (
                  <div key={currency} className="p-4 border border-yellow-500 rounded-lg bg-gray-800">
                    <h3 className="text-lg font-semibold">{currency}</h3>
                    <p className="text-yellow-400 text-xl font-bold">{rate.toFixed(4)}</p>
                  </div>
                ))}
            </div>
          )}
        </div>

        {/* Bludger Attacks Stock Data */}
        <div className="bg-black text-gold-300 p-6 rounded-lg shadow-xl">
          <h2 className="text-3xl font-bold mb-4">🏆 Bludger Attack Volatility</h2>
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
                {stockData.map((item, index) => (
                  <tr
                    key={item.id}
                    className={`border-t transition hover:bg-yellow-600 hover:text-black ${{
                      High: "bg-red-700 text-red-300",
                      Medium: "bg-yellow-700 text-yellow-300",
                      Low: "bg-green-700 text-green-300",
                    }[item.bludgerImpact]}`}
                  >
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

export default MarketIntelegence;
