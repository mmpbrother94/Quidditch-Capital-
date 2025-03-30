// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { FaBroom, FaMagic, FaCoins } from "react-icons/fa";

// const SeekerRisk = () => {
//   const [team, setTeam] = useState("");
//   const [tolerance, setTolerance] = useState("");
//   const [timeFrame, setTimeFrame] = useState("");

//   const analyzeRisk = () => {
//     console.log("Analyzing Risk for:", { team, tolerance, timeFrame });
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-800 to-gold-500 p-6">
//       <motion.div 
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         className="bg-gray-900 p-8 rounded-2xl shadow-2xl w-full max-w-md border-4 border-gold-500"
//       >
//         <h2 className="text-2xl font-bold text-center text-gold-400 mb-6">Seeker's Risk Analysis</h2>
//         <p className="text-center text-gray-300 mb-4">Predict portfolio risk like a Seeker chasing the Snitch! 🏆✨</p>
        
//         <div className="space-y-4">
//           <motion.div 
//             initial={{ x: "100%" }} 
//             animate={{ x: 0 }} 
//             transition={{ duration: 0.5 }}
//           >
//             <label className="block text-gold-300 font-semibold">Select Quidditch Team:</label>
//             <motion.select 
//               whileFocus={{ scale: 1.05 }}
//               className="w-full p-2 border border-gold-500 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-gold-400"
//               value={team} 
//               onChange={(e) => setTeam(e.target.value)}
//             >
//               <option value="">Enter Quidditch Team</option>
//               <option value="Gryffindor">Gryffindor</option>
//               <option value="Slytherin">Slytherin</option>
//               <option value="Ravenclaw">Ravenclaw</option>
//               <option value="Hufflepuff">Hufflepuff</option>
//             </motion.select>
//           </motion.div>
          
//           <motion.div 
//             initial={{ x: "100%" }} 
//             animate={{ x: 0 }} 
//             transition={{ duration: 0.6 }}
//           >
//             <label className="block text-gold-300 font-semibold">Enter Risk Tolerance:</label>
//             <motion.select 
//               whileFocus={{ scale: 1.05 }}
//               className="w-full p-2 border border-gold-500 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-gold-400"
//               value={tolerance} 
//               onChange={(e) => setTolerance(e.target.value)}
//             >
//               <option value="">Enter Risk Tolerance</option>
//               <option value="High">High</option>
//               <option value="Medium">Medium</option>
//               <option value="Low">Low</option>
//             </motion.select>
//           </motion.div>

//           <motion.div 
//             initial={{ x: "100%" }} 
//             animate={{ x: 0 }} 
//             transition={{ duration: 0.7 }}
//           >
//             <label className="block text-gold-300 font-semibold">Enter Time Frame:</label>
//             <motion.select 
//               whileFocus={{ scale: 1.05 }}
//               className="w-full p-2 border border-gold-500 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-gold-400"
//               value={timeFrame} 
//               onChange={(e) => setTimeFrame(e.target.value)}
//             >
//               <option value="">Enter Time Frame</option>
//               <option value="Short-Term">Short-Term</option>
//               <option value="Medium-Term">Medium-Term</option>
//               <option value="Long-Term">Long-Term</option>
//             </motion.select>
//           </motion.div>
//         </div>
        
//         <motion.button 
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           onClick={analyzeRisk} 
//           className="mt-6 w-full bg-white text-black p-2 rounded-md font-semibold text-lg shadow-md hover:bg-gold-600 transition flex items-center justify-center gap-2"
//         >
//           <FaMagic /> Analyze Risk
//         </motion.button>
//       </motion.div>
//     </div>
//   );
// };

// export default SeekerRisk;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaMagic } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SeekerRisk = () => {
  const [team, setTeam] = useState("");
  const [tolerance, setTolerance] = useState("");
  const [timeFrame, setTimeFrame] = useState("");
  const navigate = useNavigate();

  const analyzeRisk = () => {
    const results = [
      `Predicted Seeker Path (Stock Price) for ${team}: $222.82\nSuggested Strategy: Safe Move (Defensive Strategy)`,
      `Predicted Seeker Path (Stock Price) for ${team}: $315.45\nSuggested Strategy: High-Risk Move (Aggressive Strategy)`
    ];
    const randomResult = results[Math.floor(Math.random() * results.length)];

    navigate("/Result", {
      state: { team, tolerance, timeFrame, result: randomResult },
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-800 to-gold-500 p-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-gray-900 p-8 rounded-2xl shadow-2xl w-full max-w-md border-4 border-gold-500"
      >
        <h2 className="text-2xl font-bold text-center text-gold-400 mb-6">Seeker's Risk Analysis</h2>
        <p className="text-center text-gray-300 mb-4">Predict portfolio risk like a Seeker chasing the Snitch! 🏆✨</p>
        
        <div className="space-y-4">
          <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} transition={{ duration: 0.5 }}>
            <label className="block text-gold-300 font-semibold">Select Quidditch Team:</label>
            <select className="w-full p-2 border border-gold-500 rounded-md bg-gray-800 text-white" value={team} onChange={(e) => setTeam(e.target.value)}>
              <option value="">Enter Quidditch Team</option>
              <option value="Gryffindor">Gryffindor</option>
              <option value="Slytherin">Slytherin</option>
              <option value="Ravenclaw">Ravenclaw</option>
              <option value="Hufflepuff">Hufflepuff</option>
            </select>
          </motion.div>
          
          <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} transition={{ duration: 0.6 }}>
            <label className="block text-gold-300 font-semibold">Enter Risk Tolerance:</label>
            <select className="w-full p-2 border border-gold-500 rounded-md bg-gray-800 text-white" value={tolerance} onChange={(e) => setTolerance(e.target.value)}>
              <option value="">Enter Risk Tolerance</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </motion.div>

          <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} transition={{ duration: 0.7 }}>
            <label className="block text-gold-300 font-semibold">Enter Time Frame:</label>
            <select className="w-full p-2 border border-gold-500 rounded-md bg-gray-800 text-white" value={timeFrame} onChange={(e) => setTimeFrame(e.target.value)}>
              <option value="">Enter Time Frame</option>
              <option value="Short-Term">Short-Term</option>
              <option value="Medium-Term">Medium-Term</option>
              <option value="Long-Term">Long-Term</option>
            </select>
          </motion.div>
        </div>
        
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={analyzeRisk} 
          className="mt-6 w-full bg-white text-black p-2 rounded-md font-semibold text-lg shadow-md hover:bg-gold-600 flex items-center justify-center gap-2"
        >
          <FaMagic /> Analyze Risk
        </motion.button>
      </motion.div>
    </div>
  );
};

export default SeekerRisk;
