import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="h-screen md:flex">
            <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-300 to-green-600 justify-around items-center hidden">
                <div>
                    <h1 className="text-white font-bold text-4xl font-sans">About Us</h1>
                    <p className="text-white mt-1">Discover more about our mission and values.</p>
                    <button className="block w-28 bg-white text-green-700 mt-4 py-2 rounded-2xl font-bold mb-2">
                        Learn More
                    </button>
                </div>
                <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
            </div>
            <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h1 className="text-gray-800 font-bold text-2xl mb-4">Welcome to Our Company</h1>
                    <p className="text-sm text-gray-600 mb-6">
                        We are committed to providing exceptional service and innovative solutions to help you achieve your goals. Our team of experts is dedicated to making a positive impact and ensuring your success.
                    </p>
                    <p className="text-sm text-gray-600 mb-6">
                        Founded with the vision of creating a better experience for our clients, we have consistently delivered on our promise to be reliable, trustworthy, and customer-focused.
                    </p>
                    <p className="text-sm text-gray-600 mb-6">
                        Our values guide us in everything we do:
                    </p>
                    <ul className="list-disc pl-5 mb-6">
                        <li className="text-sm text-gray-600">Integrity: We do what is right, even when it's difficult.</li>
                        <li className="text-sm text-gray-600">Innovation: We constantly seek new and better ways to meet our clients' needs.</li>
                        <li className="text-sm text-gray-600">Excellence: We strive for the highest standards in all our work.</li>
                    </ul>
                    <span className="text-sm">Want to know more? <Link to="/contact" className="text-blue-500 hover:underline">Contact Us</Link></span>
                </div>
            </div>
        </div>
    );
};

export default About;
