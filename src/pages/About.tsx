import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-white text-black min-h-screen">
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-black mb-4">About Us</h1>
        <div className="text-black">
          <h2 className="text-xl font-bold mb-2">Brand Story:</h2>
          <p className="font-bold">"Earlybird" is inspired by the energy and productivity of starting the day with a powerful workout. The brand is built for those who believe that waking up early and training before the day starts can transform their lives.</p>
        </div>
        <div className="text-black mt-4">
          <h2 className="text-xl font-bold mb-2">Vision:</h2>
          <p className="font-bold">To inspire and empower individuals to embrace the early hours, maximize their potential, and achieve their fitness goals with high-performance, gym clothing.</p>
        </div>
      </div>
    </div>
  );
};

export default About;




