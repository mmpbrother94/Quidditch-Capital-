import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";

function Footer() {
  return (
    <>
      <footer className="bg-gradient-to-br from-[#4b2e83] to-[#8b0000] text-gold-300 py-12 relative border-t-4 border-gold-500 shadow-lg">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
          
          {/* Newsletter Section */}
          <div>
            <h2 className="text-xl font-bold text-gold-400 mb-4">Subscribe to the Quidditch Ledger</h2>
            <div className="flex items-center bg-[#2c1a4b] rounded-lg p-2">
              <input
                type="email"
                placeholder="Your Owl Post Address"
                className="w-full bg-transparent text-white placeholder-gray-400 outline-none p-2"
              />
              <button className="bg-gold-500 hover:bg-gold-600 text-white px-4 py-2 rounded-lg">
                🧙‍♂️
              </button>
            </div>
            <h3 className="mt-6 text-lg font-semibold text-gold-400">Download Our App</h3>
            <div className="flex space-x-4 mt-2">
              <img src="./appstore.png" alt="App Store" className="h-10" />
              <img src="./googleplay.png" alt="Google Play" className="h-10" />
            </div>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-xl font-bold text-gold-400 mb-4">Hogwarts Hall</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gold-500">About Us</a></li>
              <li><a href="#" className="hover:text-gold-500">Privacy Spells</a></li>
              <li><a href="#" className="hover:text-gold-500">Contact the Ministry</a></li>
            </ul>
          </div>

          {/* Blogs Section */}
          <div>
            <h3 className="text-xl font-bold text-gold-400 mb-4">Seeker's Journal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gold-500">Market Predictions</a></li>
              <li><a href="#" className="hover:text-gold-500">Bludger Strategies</a></li>
            </ul>
          </div>

          {/* Support and Social Section */}
          <div>
            <h3 className="text-xl font-bold text-gold-400 mb-4">Wizarding Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gold-500">FAQ</a></li>
              <li><a href="#" className="hover:text-gold-500">Help Desk</a></li>
            </ul>
            <h3 className="text-xl font-bold text-gold-400 mt-6 mb-4">Connect with Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gold-500"><FaTwitter size={24} /></a>
              <a href="#" className="hover:text-gold-500"><FaFacebookF size={24} /></a>
              <a href="#" className="hover:text-gold-500"><FaLinkedinIn size={24} /></a>
              <a href="#" className="hover:text-gold-500"><FaInstagram size={24} /></a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-10 border-t border-gold-500 pt-4">
          <p>Copyright 2023 by <a href="#" className="text-gold-500 hover:underline">Seeker's Risk Analysis</a>. All rights reserved.</p>
        </div>

        {/* Scroll to Top Button */}
        <div className="fixed bottom-5 right-5">
          <button 
            className="bg-gold-500 hover:bg-gold-600 text-white w-12 h-12 rounded-full shadow-lg flex justify-center items-center transition-transform transform hover:scale-110"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <IoIosArrowUp size={28} />
          </button>
        </div>
      </footer>
    </>
  )
}

export default Footer;