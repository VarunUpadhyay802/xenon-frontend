import React from 'react';
import CountUp from 'react-countup';
import ten from '../../assets/ten.png';
import happy from '../../assets/happy.png';
import accuracy from '../../assets/accuracy.png';
import success from '../../assets/success.png';

function Count() {
    return (
        <div>
            <section className="body-font bg-gray-100 py-10">
                <div className="container px-5 mb-8 mx-auto">
                    <div className="flex flex-col text-center w-full mb-8">
                        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Our Achievements</h1>
                        <p className="text-lg text-gray-600">Delivering the best vacation experiences with top-tier homes</p>
                    </div>
                    <div className="flex flex-wrap -m-4 text-center">
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="bg-white shadow-lg rounded-lg px-4 py-6 flex flex-col items-center">
                                <img src={happy} alt="Happy Guests" className="w-24 h-24 md:w-32 md:h-32 mx-5"/>
                                <h2 className="title-font font-bold text-3xl text-gray-800">
                                    <CountUp end={400} duration={3} />+
                                </h2>
                                <p className="leading-relaxed text-gray-600">Happy Guests</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="bg-white shadow-lg rounded-lg px-4 py-6 flex flex-col items-center">
                                <img src={accuracy} alt="Home Listings" className="w-24 h-24 md:w-32 md:h-32 mx-5"/>
                                <h2 className="title-font font-bold text-3xl text-gray-800">
                                    <CountUp end={98} duration={3} />%
                                </h2>
                                <p className="leading-relaxed text-gray-600">Listing Accuracy</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="bg-white shadow-lg rounded-lg px-4 py-6 flex flex-col items-center">
                                <img src={success} alt="Bookings" className="w-24 h-24 md:w-32 md:h-32 mx-5"/>
                                <h2 className="title-font font-bold text-3xl text-gray-800">
                                    <CountUp end={100} duration={3} />+
                                </h2>
                                <p className="leading-relaxed text-gray-600">Successful Bookings</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="bg-white shadow-lg rounded-lg px-4 py-6 flex flex-col items-center">
                                <img src={ten} alt="Vacation Destinations" className="w-24 h-24 md:w-32 md:h-32 mx-5"/>
                                <h2 className="title-font font-bold text-3xl text-gray-800">
                                    <CountUp end={10} duration={3} />+
                                </h2>
                                <p className="leading-relaxed text-gray-600">Top Destinations</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Count;
