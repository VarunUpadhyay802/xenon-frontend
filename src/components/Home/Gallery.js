import React from 'react';

const Gallery = () => {
    return (
        <>
            <hr className="my-8 border-gray-300" />
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex w-full mb-12 flex-wrap">
                        <h1 className="sm:text-3xl lg:text-4xl font-bold title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
                            Vacation Homes & Rentals
                        </h1>
                        <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-lg text-gray-700">
                            Explore a collection of serene vacation homes, cozy rentals, and beautiful landscapes. Perfect for your next getaway, each destination offers peace, relaxation, and breathtaking views. Discover your dream stay today!
                        </p>
                    </div>
                    <div className="flex flex-wrap md:-m-2 -m-1">
                        <div className="flex flex-wrap w-1/2">
                            <div className="md:p-2 p-1 w-1/2">
                                <img
                                    alt="gallery"
                                    className="w-full object-cover h-full object-center block rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300"
                                    src="img-3.jpg"
                                />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img
                                    alt="gallery"
                                    className="w-full object-cover h-full object-center block rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300"
                                    src="img-2.jpg"
                                />
                            </div>
                            <div className="md:p-2 p-1 w-full">
                                <img
                                    alt="gallery"
                                    className="w-full h-full object-cover object-center block rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300"
                                    src="img-4.jpeg"
                                />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/2">
                            <div className="md:p-2 p-1 w-full">
                                <img
                                    alt="gallery"
                                    className="w-full h-full object-cover object-center block rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300"
                                    src="img-5.jpeg"
                                />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img
                                    alt="gallery"
                                    className="w-full object-cover h-full object-center block rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300"
                                    src="img-2.jpg"
                                />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img
                                    alt="gallery"
                                    className="w-full object-cover h-full object-center block rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300"
                                    src="img-6.jpeg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Gallery;
