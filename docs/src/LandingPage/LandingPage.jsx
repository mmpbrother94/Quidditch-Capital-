import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBroom, FaMagic, FaCoins } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Footer from "../Home/Footer";

function LandingPage() {
  const sentence = "Quidditch-Themed Fintech Simulation";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < sentence.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + sentence[index]);
        setIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index, sentence]);

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-y-auto">
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-gray-800 shadow-lg sticky top-0 z-50 border-b-2 border-blue-500">
        <div className="text-4xl font-extrabold tracking-wide bg-gradient-to-r from-pink-400 to-blue-500 text-transparent bg-clip-text drop-shadow-[4px_8px_8px_rgba(0,0,0,4.5)]">
          FinQuidditch
        </div>
        <div className="flex space-x-4">
          <NavLink
            to="/mainpage"
            className="bg-gradient-to-r from-pink-400 to-blue-500 hover:from-blue-500 hover:to-pink-400 text-black drop-shadow-[4px_8px_8px_rgba(0,0,0,4.5)] font-semibold rounded-2xl px-5 py-2 shadow-md transition-all transform hover:scale-105"
          >
            Join the Arena
          </NavLink>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full">
        {/* Upper Section with Video Background */}
        <div className="relative min-h-screen flex items-center justify-center">
          <video
            autoPlay
            loop
            muted
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          >
            <source src="Quidditch-theme.mp4" type="video/mp4" />
          </video>

          <div className="bg-black bg-opacity-20 rounded-2xl p-6 shadow-lg">
            <div className="relative z-10 text-center px-10 left-5">
              <h2 className="text-5xl font-extrabold text-transparent bg-clip-text animate-gradient bg-gradient-to-r from-pink-600 via-purple-400 to-blue-600 relative">
                <span className="absolute inset-0 text-black -z-10 drop-shadow-[3px_3px_0px_black]">
                  Welcome to the Future of Trading
                </span>
                Welcome to the Future of Trading
              </h2>

              <motion.h1
                className="text-6xl font-extrabold bg-gradient-to-r from-pink-400 to-blue-500 text-transparent bg-clip-text mt-4 drop-shadow-[4px_8px_8px_rgba(0,0,0,4.5)]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                {displayedText}
              </motion.h1>
              <div className="mt-8">
                <NavLink
                  to="/mainpage"
                  className="bg-gradient-to-r from-pink-400 to-blue-500 hover:from-blue-500 hover:to-pink-400 text-black drop-shadow-[3px_3px_0px_black] font-bold rounded-2xl px-8 py-3 text-lg shadow-lg transform transition-all hover:scale-105"
                >
                  Enter the Arena
                </NavLink>
              </div>
              {/* Card Section */}
              <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <motion.div
                  className="bg-gray-800 p-6 rounded-xl text-center shadow-xl border border-blue-500 hover:scale-110 transition-all"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaBroom className="text-blue-500 text-6xl mx-auto" />
                  <h3 className="text-2xl mt-4 font-semibold bg-gradient-to-r from-pink-400 to-blue-500 text-transparent bg-clip-text">
                    Trade Like a Seeker
                  </h3>
                </motion.div>
                <motion.div
                  className="bg-gray-800 p-6 rounded-xl text-center shadow-xl border border-purple-500 hover:scale-110 transition-all"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaMagic className="text-purple-500 text-6xl mx-auto" />
                  <h3 className="text-2xl mt-4 font-semibold bg-gradient-to-r from-pink-400 to-blue-500 text-transparent bg-clip-text">
                    AI-Powered Spells
                  </h3>
                </motion.div>
                <motion.div
                  className="bg-gray-800 p-6 rounded-xl text-center shadow-xl border border-green-500 hover:scale-110 transition-all"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaCoins className="text-green-500 text-6xl mx-auto" />
                  <h3 className="text-2xl mt-4 font-semibold bg-gradient-to-r from-pink-400 to-blue-500 text-transparent bg-clip-text">
                    Magical Economy
                  </h3>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Lower Section */}
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-gray-950 px-10 py-16 text-white">
          <div className="text-left space-y-6">
            <h2 className="text-5xl font-extrabold bg-gradient-to-r from-pink-400 to-blue-500 text-transparent bg-clip-text">
              Master the Quidditch Market
            </h2>
            <h2 className="font-bold text-4xl">Compete, Invest, and Win</h2>
            <p className="text-lg text-gray-300">
              Get started in just a few minutes
            </p>
            <ol className="list-decimal pl-6 text-lg space-y-2">
              <li className="text-blue-300">
                Participate in real-time VR trading matches
              </li>
              <li className="text-blue-300">
                Predict market trends like a Seeker
              </li>
              <li className="text-blue-300">Trade with AI-driven insights</li>
            </ol>
            <NavLink
              to="/signup"
              className="mt-6 bg-gradient-to-r from-pink-500 to-blue-500 hover:from-blue-500 hover:to-pink-400 text-black px-8 py-3 rounded-lg shadow-lg font-semibold transform transition-all hover:scale-105"
            >
              Learn More
            </NavLink>
          </div>
          <div className="flex justify-center items-center">
            <DotLottieReact
              className="w-[25rem] h-[25rem]"
              src="https://lottie.host/871f2ab8-e04e-4eaa-aed6-920e4c80a542/t2kFA5cxie.lottie"
              loop
              autoplay
            />
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}

export default LandingPage;
