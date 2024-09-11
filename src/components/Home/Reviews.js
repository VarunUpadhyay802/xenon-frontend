import React from 'react';

const reviewsData = [
  {
    imgSrc: "man.png",
    review: "Our stay at the Cozy Mountain Cabin was unforgettable! The breathtaking views, warm fireplace, and serene surroundings made it the perfect retreat. Can't wait to visit again!",
    name: "Sophia Martinez",
    occupation: "Freelance Photographer"
  },
  {
    imgSrc: "/man.png",
    review: "The beach house rental exceeded all of our expectations! We enjoyed daily beach walks, and the sunset views were simply amazing. The house was clean, spacious, and well-equipped.",
    name: "James Patterson",
    occupation: "Travel Blogger"
  },
  {
    imgSrc: "man.png",
    review: "Our family had the best vacation ever at the Lakefront Cottage. The kids loved the outdoor activities, and we enjoyed the peaceful surroundings. Highly recommend for a relaxing family getaway!",
    name: "Emily Johnson",
    occupation: "Teacher"
  },
  {
    imgSrc: "man.png",
    review: "We stayed at the Modern City Apartment for a week and loved every minute of it. The location was perfect for exploring the city, and the apartment had everything we needed for a comfortable stay.",
    name: "Michael Green",
    occupation: "Tech Consultant"
  },
  {
    imgSrc: "man.png",
    review: "Our weekend at the Charming Country Cottage was exactly what we needed. The rustic charm, quiet countryside, and cozy interiors made for a perfect retreat. We felt completely refreshed after our stay.",
    name: "Sarah Williams",
    occupation: "Designer"
  },
  {
    imgSrc: "man.png",
    review: "We had an amazing stay at the Secluded Forest Lodge. It was the perfect getaway from the city, surrounded by nature. The lodge was well-maintained and provided the peace and quiet we were looking for.",
    name: "Daniel Brown",
    occupation: "Entrepreneur"
  }
];

const Reviews = () => {
  return (
    <>
      <h1 className="text-center pb-6 font-bold text-black text-2xl md:text-3xl lg:text-3xl">Guest Reviews</h1>
      <hr className="mb-6" />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap -m-4">
            {reviewsData.map((review, index) => (
              <div key={index} className="lg:w-1/3 lg:mb-0 mb-6 p-4 rounded-3xl shadow-lg hover:bg-blue-50">
                <div className="h-full text-center">
                  <img alt="testimonial" className="w-16 h-16 mb-6 object-cover object-center rounded-xl inline-block border-2 border-gray-200 bg-gray-100" src={review.imgSrc} />
                  <p className="leading-relaxed text-sm md:text-base">{review.review}</p>
                  <span className="inline-block h-1 w-8 rounded bg-blue-500 mt-4 mb-3"></span>
                  <h2 className="text-gray-900 font-medium title-font tracking-wider text-xs md:text-sm">{review.name}</h2>
                  <p className="text-gray-500 text-xs md:text-sm">{review.occupation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Reviews;
