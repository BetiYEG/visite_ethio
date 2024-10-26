import React from "react";

const TopDestinations = () => {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-navy-900 mb-8">
        Top Destinations
      </h2>
      <div className="flex space-x-6">
        {["Simien Mountains", "Nile River", "Bale Mountain", "Harer wall"].map(
          (destination, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden flex-shrink-0"
              style={{ width: "300px" }}
            >
              <img
                src={download}
                alt={destination}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold mb-2">{destination}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-orange-400 font-bold">
                    ${(index + 1) * 2}k
                  </span>
                  <span className="text-sm text-gray-600">
                    {10 + index * 2} Days Trip
                  </span>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default TopDestinations;
