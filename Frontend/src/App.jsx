import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./Authentication/Signup";
import { Loader } from "lucide-react";
import Login from "./Authentication/Login";
import { useAuthStore } from "./contentStore/authStore.js";
import Home from "./Home/Home.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import MainPage from "./Home/MainPage.jsx";
import BludgerChain from "./Pages/BludgerChain.jsx";
import Reports from "./Pages/Reports.jsx";
import SeekerRisk from "./Pages/SeekerRisk.jsx";
import MarketMagic from "./Pages/MarketMagic.jsx";
import StockSpells from "./Pages/StockSpells.jsx";
import LandingPage from "./LandingPage/LandingPage.jsx";
import Result from "./Pages/Result.jsx";
import TradingStrategyResult from "./Pages/TradingStrategyResult.jsx"; // Newly added

function App() {
  const { user, isChekingAuth, authCheck } = useAuthStore();
  
  useEffect(() => {
    authCheck();
  }, [authCheck]);
  
  if (isChekingAuth) {
    return (
      <div className="h-screen">
        <div className="flex justify-center items-center bg-black h-full">
          <Loader className="animate-spin text-red-600 size-10" />
        </div>
      </div>
    );
  }
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/mainPage/" element={<MainPage />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="BludgerChain" element={<BludgerChain />} />
          <Route path="reports" element={<Reports />} />
          <Route path="MarketMagic" element={<MarketMagic />} />
        </Route>
        <Route path="/StockSpells" element={<StockSpells />} />
        <Route path="/BludgerChain" element={<BludgerChain />} />
        <Route path="/SeekerRisk" element={<SeekerRisk />} />
        <Route path="/Result" element={<Result />} />
        <Route path="/TradingStrategyResult" element={<TradingStrategyResult />} /> {/* Newly added */}
        <Route path="/signup" element={!user ? <Signup /> : <Navigate to={"/"} />} />
        <Route path="/signin" element={!user ? <Login /> : <Navigate to={"/"} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

