import React from 'react';
import HomePage from './components/home/home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Map from './pages/Map';
import RewardsPage from './pages/RewardsPage';

function App () {
  return (
    <Router>
          <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/map" element={<Map />} />
          <Route path="/reward" element={<RewardsPage />} />
          
        </Routes>
        <Footer/>
    </Router>
  );
};

export default App;
