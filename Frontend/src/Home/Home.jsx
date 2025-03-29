import { FaChartBar, FaChartLine, FaFileAlt, FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function Home() {
  const sentence = "- Enter the Gringotts Trading Pitch and master the magic of finance -";
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

  const features = [
    {
      title: "Stock Market Spells",
      link: "/EconomicIndicator",
      description:
        "Harness real-world stock data to cast winning spells and boost your Quidditch team's performance.",
      icon: <FaChartBar className="text-gold-500 text-3xl" />,
    },
    {
      title: "Bludger Attacks (Option Chain)",
      link: "/marketIntelegence",
      description:
        "Visualize trading options as strategic Bludger attacks to outmaneuver opponents in the financial arena.",
      icon: <FaChartLine className="text-red-600 text-3xl" />,
    },
    {
      title: "Seeker's Risk Analysis",
      link: "/reportgeneration",
      description:
        "Predict portfolio risk using Seeker-like trajectory models as you chase the Golden Snitch of investments.",
      icon: <FaFileAlt className="text-blue-600 text-3xl" />,
    },
    {
      title: "Magical Market Insights",
      link: "/mainpage/exploreData",
      description:
        "Explore the mystical depths of financial data with intuitive visualizations and natural language analysis.",
      icon: <FaSearch className="text-indigo-500 text-3xl" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-indigo-900 text-white overflow-hidden">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center text-center py-20 px-6 relative"
      >
        {/* Left Animation */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 hidden md:block">
          <DotLottieReact 
            className="w-[35rem] h-[35rem]"
            src="https://lottie.host/b42a5e7a-a594-459d-951e-a4d70bc099ae/SFpT0cl0YK.lottie" 
            loop 
            autoplay 
          />
        </div>
        
        <h1 className="text-5xl font-extrabold">
          Quidditch Meets Fintech in
          <span className="bg-gradient-to-r from-gold-300 to-red-600 bg-clip-text text-transparent"> Gringotts Trading Pitch</span>
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mt-4">
          Trade, strategize, and outmaneuver opponents using real-world market forces in a magical Quidditch setting.
        </p>
        <motion.p 
          className="text-xl shadow-xl rounded-2xl font-semibold bg-gradient-to-bl from-red-700 to-gold-500 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0 }}
        >
          {displayedText}
        </motion.p>
        
        {/* Right Animation */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden md:block">
          <DotLottieReact 
            className="w-[35rem] h-[35rem]"
            src="https://lottie.host/b42a5e7a-a594-459d-951e-a4d70bc099ae/SFpT0cl0YK.lottie" 
            loop 
            autoplay 
          />
        </div>
      </motion.div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-12 py-12">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-bl from-gray-800 to-red-700 shadow-xl rounded-xl p-6 flex space-x-4 items-center transition-all transform hover:scale-105 hover:shadow-2xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gold-500 p-5 rounded-full shadow-lg">
              {feature.icon}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">{feature.title}</h2>
              <p className="text-gray-200 mt-2">{feature.description}</p>
              <NavLink
                to={`${feature.link}`}
                className="text-yellow-300 font-medium mt-4 inline-block hover:text-yellow-400"
              >
                Explore →
              </NavLink>
            </div>
          </motion.div>
        ))}
      </div>
        {/* CTA Section */}
      <section className="bg-gradient-to-b from-black to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <img src="/Quidditch-08.jpg" alt="Quidditch Trading" className="w-full h-full object-cover" />
            
          </motion.div>

          {/* Text Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
          >
            <h1 className="text-5xl font-bold leading-tight text-white">
            A Fintech Experience Like No Other <br />
              <span className="bg-gradient-to-r from-red-600 to-gold-500 text-2xl rounded-xl ">- Magic Meets Market -</span>
            </h1>
            <p className="text-gray-300 mt-6 leading-relaxed">
            Dive into the wizarding world of financial markets and let Quidditch strategies guide your investments....!
            </p>
            <div className="mt-8 flex items-center space-x-4">
              <button className="bg-gradient-to-r from-red-700 to-gold-500 text-gray-900 font-bold px-6 py-3 rounded-xl shadow-md hover:bg-yellow-500 transition">
              ENTER THE PITCH
              </button>
              <button className="flex items-center text-yellow-600 hover:text-yellow-500">
                ▶ Watch It in Action
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
