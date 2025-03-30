import React from 'react';
import { FaBroom, FaMagic, FaSearch } from 'react-icons/fa';
import { BarChart3, LineChart, Wallet, TrendingUp, Banknote, Scale, Globe, Briefcase } from 'lucide-react';

const categories = [
  { title: 'Seeker Strategies', description: 'Risk analysis using Seeker trajectory models', icon: <FaBroom /> },
  { title: 'Bludger Trades', description: 'Option chains visualized as Bludger attacks', icon: <BarChart3 /> },
  { title: 'Snitch Predictions', description: 'Predicting market shifts like a Snitch’s flight', icon: <LineChart /> },
  { title: 'Investment Potions', description: 'Magical assets and fantasy team tokens', icon: <Wallet /> },
  { title: 'Hogwarts Market Trends', description: 'Stock movements affecting Quidditch matches', icon: <TrendingUp /> },
  { title: 'Wizarding Forex', description: 'Galleons to Muggle currency insights', icon: <Banknote /> },
  { title: 'Magical Market Insights', description: 'Highlights key trends and predictions 🔮', icon: <Globe /> },
  { title: 'Blockchain Spells', description: 'Smart contracts and decentralized finance', icon: <Briefcase /> },
];

const exampleQueries = [
  'Predict Snitch movement using market trends',
  'Analyze Quidditch team performance by stock fluctuations',
  'How do Bludger trades affect risk?',
  'Show investment potion recipes',
  '....'
];

function MarketMagic() {
  return (
    <div className="bg-gradient-to-r from-[#4A1A2C] to-[#1E3A5F] min-h-screen p-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gold drop-shadow-lg">Magical Market Insights 🧙‍♂️</h1>
          <p className="text-gray-300 mt-2 text-lg">Gamify stock trading with Quidditch magic! 🏆✨</p>
        </div>

        <div className="bg-[#2A1A40] p-8 rounded-xl shadow-lg mb-12 transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-semibold mb-4 text-gold">Ask a wizardly question about market trends</h2>
          <div className="flex flex-col md:flex-row items-center md:space-x-4">
            <input
              type="text"
              placeholder="e.g., Predict Snitch movement using market trends"
              className="border border-gold px-4 py-3 w-full rounded-lg text-white bg-[#1E3A5F] shadow-sm focus:ring-2 focus:ring-gold"
            />
            <button className="bg-gold text-[#2A1A40] px-6 py-3 rounded-lg flex items-center hover:bg-yellow-500 transition shadow-md">
              <FaSearch className="mr-2" />
              Search
            </button>
          </div>
          <div className="flex flex-wrap gap-3 mt-6">
            {exampleQueries.map((query, idx) => (
              <button
                key={idx}
                className="bg-[#703670] text-white px-4 py-2 rounded-md hover:bg-[#8A479A] transition shadow-sm"
              >
                {query}
              </button>
            ))}
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-gold">Browse Wizarding Finance Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#703670] to-[#9B5ABD] p-6 rounded-lg shadow-lg flex justify-between items-center hover:shadow-2xl transition-transform transform hover:scale-105"
            >
              <div className="flex items-center space-x-4">
                <div className="text-4xl text-gold animate-pulse">{item.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="text-gray-200 text-sm">{item.description}</p>
                </div>
              </div>
              <FaMagic className="text-gold transition-transform transform hover:translate-x-2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MarketMagic;
