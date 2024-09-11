import React from 'react'

const Gallery = () => {
    return (
        <>
            <h1 class="text-center mb-9 font-bold text-black text-3xl md:text-4xl lg:text-6xl">GALLERY</h1>
            <hr>
            </hr>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto flex flex-wrap">
                    <div class="flex w-full mb-20 flex-wrap">
                        <h1 class="sm:text-3xl lg:text-4xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
                            Vacation Homes & Rentals </h1>
                        <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
                            Explore a collection of serene vacation homes, cozy rentals, and beautiful landscapes. Perfect for your next getaway, each destination offers peace, relaxation, and breathtaking views. Discover your dream stay today!
                        </p>
                    </div>
                    <div class="flex flex-wrap md:-m-2 -m-1">
                        <div class="flex flex-wrap w-1/2">
                            <div class="md:p-2 p-1 w-1/2">
                                <img alt="gallery" class="w-full object-cover h-full object-center block"
                                    src="https://www.luxuryretreats.com/photos/7d354495-d6e7-48c3-b84a-5d1f0c847ab0.jpg" />
                            </div>
                            <div class="md:p-2 p-1 w-1/2">
                                <img alt="gallery" class="w-full object-cover h-full object-center block"
                                    src="https://www.vacationrentals.com/rental/12345/hero-800x400.jpg" />
                            </div>
                            <div class="md:p-2 p-1 w-full">
                                <img alt="gallery" class="w-full h-full object-cover object-center block"
                                    src="https://www.beachvacationhomes.com/wp-content/uploads/2021/03/BeachHouse-Exterior.jpg" />
                            </div>
                        </div>
                        <div class="flex flex-wrap w-1/2">
                            <div class="md:p-2 p-1 w-full">
                                <img alt="gallery" class="w-full h-full object-cover object-center block"
                                    src="https://www.cabinhomes.com/wp-content/uploads/2018/09/cabinretreat.jpg" />
                            </div>
                            <div class="md:p-2 p-1 w-1/2">
                                <img alt="gallery" class="w-full object-cover h-full object-center block"
                                    src="https://www.itrip.net/photos/rental-beach-house-pool-800x400.jpg" />
                            </div>
                            <div class="md:p-2 p-1 w-1/2">
                                <img alt="gallery" class="w-full object-cover h-full object-center block"
                                    src="https://cdn.travelpulse.com/images/99999999-9999-9999-9999-999999999999/e8a7ba27-86e3-dc32-139b-3084f09d080f/630x355.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Gallery
