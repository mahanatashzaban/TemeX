// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Terms from "./components/Terms";  // <--- add this import
import AboutUs from './pages/AboutUs';
import Faq from "./pages/Faq";
import Settlement from './pages/Settlement';
import AccountLevels from './pages/AccountLevels';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="font-vazirmatn bg-gray-100 min-h-screen flex flex-col text-gray-800">
        <Header />
        <div className="h-20" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/settlement" element={<Settlement />} />
          <Route path="/accountLevels" element={<AccountLevels />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
