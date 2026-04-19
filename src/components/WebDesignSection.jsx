import React from 'react';

const WebDesignSection = () => {
  return (
    <div className="bg-gradient-to-b from-[#f3f4f6] to-[#e5e7eb] py-16 px-4 lg:px-16 flex flex-col lg:flex-row items-center justify-between">
      <div className="text-center lg:text-left lg:max-w-lg">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-indigo-600 mb-4">
          Professional <br /> Web Design <br /> Services
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Shine online with Superside’s web design services. Plug into a team
          of world-class web designers and elevate your website with designs
          that blend aesthetics and functionality, leading to the conversions
          you crave.
        </p>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-md transition">
          Book a demo
        </button>
      </div>
      <div className="mt-8 lg:mt-0 flex justify-center lg:justify-end">
        <div className="relative w-96 h-72 bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="path-to-your-image" // Replace with your own image path
            alt="Web Design Example"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default WebDesignSection;
