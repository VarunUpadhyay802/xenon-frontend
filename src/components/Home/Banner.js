import React from 'react';

const Banner = () => {
  return (
    <div className="relative bg-cover bg-center text-white py-24 px-6" style={{backgroundImage: "url('/pexels-pixabay-346286.jpg')" 
}}>
      <div className="absolute inset-0 bg-blue-900 opacity-50"></div>
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Perfect Getaway</h1>
        <p className="text-lg md:text-xl mb-8">Explore personalized recommendations for your next vacation.</p>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-600">
            Cheap Rentals
          </button>
          <button className="bg-white text-blue-500 py-2 px-4 rounded-lg border border-blue-500 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-600">
            Luxurious Hotels
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
