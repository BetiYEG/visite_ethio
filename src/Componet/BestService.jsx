import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BestService = () => {
  const [selectedService, setSelectedService] = useState(null); // For click popup

  // Define animation variants
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  // Close the popup when clicking outside
  const closePopup = () => {
    setSelectedService(null);
  };

  return (
    <section className="py-12">
      <h2 className="text-center text-3xl font-bold text-navy-900 mb-8">
        We Offer Best Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { name: "Calculated Weather", icon: "/assets/Group1.png" },
          { name: "Best Flights", icon: "/assets/Group2.png" },
          { name: "Local Events", icon: "/assets/Group3.png" },
          { name: "Customization", icon: "/assets/Group4.png" },
        ].map((service, index) => (
          <motion.div
            key={index}
            className={`text-center rounded-lg p-4 relative cursor-pointer ${index === 1 ? "shadow-lg" : ""}`}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.1 }} // Add scale effect on hover
            onClick={() => setSelectedService(service)} // Open the popup when clicked
          >
            <div className="bg-gray-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <img
                src={service.icon}
                alt={service.name}
                width={32}
                height={32}
              />
            </div>
            <h3 className="font-semibold mb-2">{service.name}</h3>
            <p className="text-sm text-gray-600">
              Built Wicked longer admire do barton vanity itself do in it.
            </p>
          </motion.div>
        ))}
      </div>

      {/* Popup Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={closePopup}
        >
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg w-80"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <h2 className="text-xl font-bold mb-4">{selectedService.name}</h2>
            <p className="text-sm text-gray-600">
              Here you can add more details about the service: {selectedService.name}.
            </p>
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
              onClick={closePopup}
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default BestService;
