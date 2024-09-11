import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="relative bg-cover bg-center text-white py-24 px-6" style={{ backgroundImage: "url('/pexels-pixabay-346286.jpg')" }}>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-600 opacity-70"></div>
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-600">
          Find Your Perfect Getaway
        </h1>
        <p className="text-lg md:text-xl mb-10 max-w-lg mx-auto">
          Discover curated properties and exclusive deals tailored just for you. Book now and start your adventure!
        </p>
        <div className="flex justify-center">
          <Link to="/property" className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-3 px-6 rounded-lg shadow-lg hover:from-green-500 hover:to-blue-600 transition duration-300 ease-in-out transform hover:scale-105">
            Explore Properties
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
