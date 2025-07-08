// import React from 'react';
import { FaMagic, FaFilter, FaBroom, FaChartLine } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Reports() {
  const reports = [
    { id: 1, category: "Seeker's Risk", date: "March 15, 2024", title: "Seeker's Risk Analysis Q1 2024", description: "Predicts risk for each team’s portfolio using real-time stock market data.", color: "bg-yellow-500 text-black" },
    { id: 2, category: "Bludger Attacks", date: "February 28, 2024", title: "Option Chain Volatility", description: "Visualizing market volatility as Bludger attack patterns in team investments.", color: "bg-red-600 text-white" },
    { id: 3, category: "Snitch Chase", date: "February 10, 2024", title: "Seeker Trajectory Forecasting", description: "AI-driven models predict portfolio success like a Seeker chasing the Snitch.", color: "bg-blue-900 text-black" },
    { id: 4, category: "Team Tokens", date: "January 25, 2024", title: "Fantasy Token Investment Trends", description: "Blockchain-based Quidditch team investment patterns and trends.", color: "bg-green-500 text-white" },
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-indigo-900 p-10 font-harrypotter">
      <div className="container mx-auto bg-gradient-to-r from-yellow-700 to-red-700 shadow-lg rounded-xl p-8 border-4 border-gold-500"> 
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <h1 className="text-4xl font-bold text-gold-400">Quidditch Market Analysis</h1>
          <p className="text-white text-2xl font-bold mt-2">A Magical Take on Financial Markets & Team Performance</p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex justify-between items-center mb-6 bg-gray-800 p-4 rounded-lg"
        >
          <input type="text" placeholder="Search spellbound reports..." className="border px-4 py-2 rounded-md w-80 shadow-sm focus:ring-2 focus:ring-gold-500 bg-gray-700 text-white" />
          <select className="border px-4 py-2 rounded-md shadow-lg bg-gray-900 text-white">
            <option>All Categories</option>
            <option>Seeker's Risk</option>
            <option>Bludger Attacks</option>
            <option>Snitch Chase</option>
            <option>Team Tokens</option>
          </select>
          <button className="bg-gold-500 text-black px-4 py-2 rounded-md flex items-center shadow-lg hover:bg-gold-600 transition">
            <FaFilter className="mr-2" /> Filters
          </button>
        </motion.div>

        {/* Reports List */}
        <div className="space-y-6">
          {reports.map((report, index) => (
            <motion.div
              key={report.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-6 rounded-lg shadow-lg flex justify-between items-center transform hover:scale-105 transition duration-300"
              style={{ backgroundColor: '#1A1A1D', boxShadow: '5px 5px 15px rgba(255, 215, 0, 0.5)' }}
            >
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${report.color}`}>{report.category}</span>
                  <span className="text-gray-400">{report.date}</span>
                </div>
                <h2 className="text-xl font-bold text-gold-400">{report.title}</h2>
                <p className="text-gray-300">{report.description}</p>
              </div>
              <button className="flex items-center bg-green-200 text-black px-4 py-2 rounded-md hover:bg-gold-600 transition">
                <FaBroom className="mr-2" /> Download
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Reports;