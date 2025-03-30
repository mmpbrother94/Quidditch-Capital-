import React from "react";
import { Line, Bar, Pie, Radar, Doughnut, Scatter } from "react-chartjs-2";
import { motion } from "framer-motion";
import { FaBroom, FaCoins, FaMagic } from "react-icons/fa";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend, RadialLinearScale } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend, RadialLinearScale);

const Dashboard = () => {
  // Sample Data
  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug","Sep","Oct","Nov","Dec"],
    datasets: [
      {
        label: "User Growth",
        data: [10, 40, 20, 70, 50, 10, 130, 44, 30, 90, 100, 150],
        borderColor: "#FFD700",
        backgroundColor: "rgba(255, 215, 0, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const barData = {
    labels: ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"],
    datasets: [
      {
        label: "Sales (in $1000)",
        data: [78, 40, 60, 80],
        backgroundColor: ["#FF5733", "#33FF57", "#3357FF", "#F4C542"],
      },
    ],
  };

  const pieData = {
    labels: ["Completed", "In Progress", "Pending"],
    datasets: [
      {
        data: [45, 30, 25],
        backgroundColor: ["#28A745", "#FFC107", "#DC3545"],
      },
    ],
  };

  // New Visuals
  const radarData = {
    labels: ["Seeker", "Keeper", "Chaser", "Beater", "Snitch Control"],
    datasets: [
      {
        label: "Quidditch Player Performance",
        data: [90, 80, 75, 85, 95],
        backgroundColor: "rgba(72, 61, 139, 0.3)",
        borderColor: "#483D8B",
      },
    ],
  };

  const doughnutData = {
    labels: ["Galleons", "Sickles", "Knuts"],
    datasets: [
      {
        data: [60, 30, 10],
        backgroundColor: ["#FFD700", "#C0C0C0", "#CD7F32"],
      },
    ],
  };

  const scatterData = {
    datasets: [
      {
        label: "Snitch & Broomstick Speed",
        data: [
          { x: 10, y: 80 },
          { x: 20, y: 90 },
          { x: 30, y: 75 },
          { x: 40, y: 85 },
          { x: 50, y: 95 },
        ],
        backgroundColor: "#FF4500",
      },
    ],
  };

  return (
    <div className="p-8 bg-gray-900 min-h-screen text-white">
      {/* Header */}
      <motion.h1
        className="text-4xl font-bold text-yellow-400 text-center mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Quidditch Market Dashboard
      </motion.h1>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Line Chart */}
        <motion.div className="bg-gray-800 p-6 rounded-lg shadow-lg" whileHover={{ scale: 1.05 }}>
          <h2 className="text-xl font-semibold text-yellow-300 mb-4 flex items-center"><FaMagic className="mr-2" />User Growth Over Time</h2>
          <Line data={lineData} />
        </motion.div>

        {/* Bar Chart */}
        <motion.div className="bg-gray-800 p-6 rounded-lg shadow-lg" whileHover={{ scale: 1.05 }}>
          <h2 className="text-xl font-semibold text-blue-300 mb-4 flex items-center"><FaBroom className="mr-2" />Sales Analysis</h2>
          <Bar data={barData} />
        </motion.div>

        {/* Pie Chart */}
        <motion.div className="bg-gray-800 p-6 rounded-lg shadow-lg" whileHover={{ scale: 1.05 }}>
          <h2 className="text-xl font-semibold text-green-300 mb-4 flex items-center"><FaCoins className="mr-2" />Task Completion Status</h2>
          <Pie data={pieData} />
        </motion.div>

        {/* Radar Chart */}
        <motion.div className="bg-gray-800 p-6 rounded-lg shadow-lg" whileHover={{ scale: 1.05 }}>
          <h2 className="text-xl font-semibold text-purple-300 mb-4">Quidditch Player Performance</h2>
          <Radar data={radarData} />
        </motion.div>

        {/* Doughnut Chart */}
        <motion.div className="bg-gray-800 p-6 rounded-lg shadow-lg" whileHover={{ scale: 1.05 }}>
          <h2 className="text-xl font-semibold text-orange-300 mb-4">Gringotts Coin Distribution</h2>
          <Doughnut data={doughnutData} />
        </motion.div>

        {/* Scatter Plot */}
        <motion.div className="bg-gray-800 p-6 rounded-lg shadow-lg" whileHover={{ scale: 1.05 }}>
          <h2 className="text-xl font-semibold text-red-300 mb-4">Snitch & Broomstick Speed</h2>
          <Scatter data={scatterData} />
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
