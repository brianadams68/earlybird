import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Earlybird</div>
        <div>
          <Link to="/" className="text-white px-3">Home</Link>
          <Link to="/products" className="text-white px-3">Products</Link>
          <Link to="/about" className="text-white px-3">About</Link>
          <Link to="/contact" className="text-white px-3">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
