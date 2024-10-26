import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import img from "../../public/assets/Play_Store.png";

const Footer = () => {
  return (
    <footer className="bg-white py-8 mt-20">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center lg:text-left">
        {/* Section 1: Title and Description */}
        <div className="col-span-1">
          <h2 className="text-2xl font-bold text-gray-800">Visit Ethiopia</h2>
          <p className="mt-2 text-sm text-gray-600">
            Book your trip in minutes, get full control for much longer.
          </p>
        </div>

        {/* Section 2: Destinations */}
        <div className="col-span-1">
          <h3 className="font-semibold text-lg text-gray-900">Destinations</h3>
          <ul className="mt-2 text-sm text-blue-600 space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Addis Ababa and surroundings
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                The North Historic and Simien Mountains
              </a>
            </li>
          </ul>
        </div>

        {/* Section 3: Visa, Flight, Destination */}
        <div className="col-span-1">
          <ul className="space-y-2 text-sm text-gray-700">
            <li>
              <a href="#" className="hover:underline">
                Get your visa
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Book your flight
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Choose destination
              </a>
            </li>
          </ul>
        </div>

        {/* Section 4: Social Media and App Links */}
        <div className="col-span-1">
          <h3 className="text-lg font-semibold">Discover our app</h3>
          <div className="flex justify-center lg:justify-start space-x-4 mt-2">
            <a href="#" className="block">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2880px-Google_Play_Store_badge_EN.svg.png"
                alt="Google Play"
                className="h-8"
              />
            </a>
            <a href="#" className="block">
              <img
                src={img}
                alt="Apple Store"
                className="h-8"
              />
            </a>
          </div>

          <div className="flex justify-center lg:justify-start space-x-4 mt-4">
            {/* Facebook Icon */}
            <a
              href="#"
              className="bg-white text-blue-500 p-2 rounded-full shadow-md hover:bg-gray-100"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            {/* Twitter Icon */}
            <a
              href="#"
              className="bg-white text-blue-400 p-2 rounded-full shadow-md hover:bg-gray-100"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-sm text-gray-500">
        All rights reserved @visitethiopia.com
      </div>
    </footer>
  );
};

export default Footer;
