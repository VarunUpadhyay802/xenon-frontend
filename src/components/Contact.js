import React from 'react';

const Contact = () => {
  return (
    <div>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-8 mx-auto">
          <div className="flex flex-col text-center w-full mb-4">
            <h1 className="sm:text-6xl text-4xl font-bold title-font mb-4">Get In Touch</h1>
            <p className="text-lg leading-relaxed">We would love to hear from you. Contact us for more details or to book a consultation.</p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                  <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-green-500 focus:bg-transparent focus:border-green-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                  <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-green-500 focus:bg-transparent focus:border-green-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                  <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-green-500 focus:bg-transparent focus:border-green-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="w-full bg-green-600 text-white py-2 px-8 focus:outline-none rounded text-lg">Submit</button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-96 mt-10">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.5399921677327!2d76.19998407473712!3d31.462040554078882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b4c03c23d8cf7%3A0x7d79b5feff5eb5d3!2sIndian%20Institute%20of%20Information%20Technology%20Una%20(IIIT%20Una)!5e0!3m2!1sen!2sin!4v1694432278071!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            title="IIIT Una Map"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
