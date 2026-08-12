import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Essaouira from './pages/Essaouira';
import Tinghir from './pages/Tinghir';
import './App.css';

// Wrapper to handle framer-motion exit animations based on routes
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/essaouira" element={<Essaouira />} />
        <Route path="/tinghir" element={<Tinghir />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <div className="app-container">
      <HashRouter>
        <AnimatedRoutes />
      </HashRouter>
    </div>
  );
}

export default App;
