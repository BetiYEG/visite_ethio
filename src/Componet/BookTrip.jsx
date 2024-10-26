import React, { useState } from 'react';

const BookTrip = () => {
  // State to track if the heart icon is clicked
  const [isLiked, setIsLiked] = useState(false);

  // Function to handle click
  const handleIconClick = () => {
    setIsLiked(!isLiked); // Toggle the like status
  };

  return (
    <section className="py-12 flex flex-col md:flex-row items-center justify-between px-4">
      <div className="max-w-xl w-full md:w-auto">
        <span className="text-white font-semibold">Easy and Fast</span>
        <h2 className="text-2xl md:text-4xl font-bold text-navy-900 mt-2 mb-6">
          Book Your Next Trip In 3 Easy Steps
        </h2>
        <ul className="space-y-4 md:space-y-6">
          {[
            {
              title: "Choose Destination",
              description:
                "Discover vibrant cultures and breathtaking landscapes as you choose your next adventure.",
              icon: "/assets/choose_destination.png",
            },
            {
              title: "Make Payment",
              description:
                "Select your package, choose payment, and confirm. Fast and secure.",
              icon: "/assets/make_payment.png",
            },
            {
              title: "Reach Airport on Selected Date",
              description:
                "Arrive at the airport on your selected date and get ready to embark on your journey.",
              icon: "/assets/reach_airport.png",
            },
          ].map((step, index) => (
            <li key={index} className="flex">
              <div className="bg-orange-200 rounded-full w-16 h-16 flex items-center justify-center mr-4 flex-shrink-0">
                <img
                  src={step.icon}
                  alt={`Step ${index + 1}`}
                  className="w-8 h-8"
                  style={{ filter: 'brightness(1) invert(1)' }} // Optional filter for contrast
                />
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-gray-800">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden mt-6 md:mt-0 md:w-96">
        <img
          src="/assets/about.jpg"
          alt="Trip to Ethiopia"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="font-semibold mb-2">Trip To Ethiopia</h3>
          <p className="text-sm text-gray-600 mb-4">
            14-29 Oct | by Abenezer Kifle
          </p>
          <div className="flex space-x-2 mb-4">
            <span className="bg-gray-200 rounded-full px-2 py-1 text-xs">
              24 people going
            </span>
          </div>
          <div className="flex justify-between items-center">
            <button onClick={handleIconClick} className={`text-${isLiked ? 'red' : 'gray'}-400`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill={isLiked ? 'red' : 'none'}
                viewBox="0 0 24 24"
                stroke={isLiked ? 'red' : 'currentColor'}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookTrip;
