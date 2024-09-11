import React, { useEffect, useState } from "react";
import Footer from "./Home/Footer";

const PropertyListing = () => {
  const [properties, setProperties] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProperties, setFilteredProperties] = useState([]);

  useEffect(() => {
    // Simulate fetching data from backend API
    fetch("https://xenon-backend-ehaj.onrender.com/api/properties")
      .then((response) => response.json())
      .then((data) => {
        setProperties(data);
        setFilteredProperties(data);
      })
      .catch((error) => console.error("Error fetching properties:", error));
  }, []);

  useEffect(() => {
    // Filter properties based on search query
    const results = properties.filter(property =>
      property.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProperties(results);
  }, [searchQuery, properties]);

  return (
    <>
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-4">Property Listings</h1>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {filteredProperties.map((property) => (
          <div
            key={property.id}
            className="border rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-blue-50"
          >
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold">{property.title}</h2>
                <span className="text-sm text-green-500 bg-gray-100 rounded-md px-2 py-1">
                  {property.status}
                </span>
              </div>
              <p className="text-gray-500 text-sm">{property.description}</p>
              <div className="mt-3">
                <p className="text-lg font-bold">${property.price}</p>
                <p className="text-xs text-gray-400">
                  {property.location} | {property.listed_time}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
     
    </div>
     <Footer/>
     </>
  );
};

export default PropertyListing;
