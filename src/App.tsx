import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './Components/Navbar';
import Profile from './Components/Profile';
import Settings from './Components/Settings';
import MaleProducts from './Components/MaleProducts';
import FemaleProducts from './Components/FemaleProducts';
import SalesProducts from './Components/SalesProducts';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/maleProducts" element={<MaleProducts />} />
        <Route path="/femaleProducts" element={<FemaleProducts />} />
        <Route path="/salesProducts" element={<SalesProducts />} />
      </Routes>
    </Router>
  );
};

export default App;
