import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="h-screen md:flex">
            <div className="relative md:flex w-1/2 bg-gradient-to-tr from-blue-300 to-blue-600 justify-around items-center hidden">
                <div>
                    <h1 className="text-white font-bold text-4xl">About Us</h1>
                    <p className="text-white mt-1">Explore top vacation rentals and personalized stays.</p>
                    <button className="bg-white text-blue-700 mt-4 py-2 px-6 rounded-lg font-bold">
                        Learn More
                    </button>
                </div>
            </div>
            <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h1 className="text-gray-800 font-bold text-2xl mb-4">Welcome to Our Rentals</h1>
                    <p className="text-sm text-gray-600 mb-6">
                        Your perfect vacation home awaits. We offer a wide range of rentals tailored to your preferences, from budget-friendly stays to luxury escapes.
                    </p>
                    <p className="text-sm text-gray-600 mb-6">
                        Discover amazing properties and enjoy a seamless booking experience with us.
                    </p>
                    <span className="text-sm">Have questions? <Link to="/contact" className="text-blue-500 hover:underline">Contact Us</Link></span>
                </div>
            </div>
        </div>
    );
};

export default About;
