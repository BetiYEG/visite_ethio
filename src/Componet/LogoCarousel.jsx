import React from 'react';
import { motion } from 'framer-motion';
import img1 from "../../public/assets/image 27.png";
import img2 from "../../public/assets/image 28.png";
import img3 from "../../public/assets/image 29.png";
import img4 from "../../public/assets/image 30.png";
import img5 from "../../public/assets/image 31.png";

const logos = [
  { name: 'Image 27', src: img1 },
  { name: 'Image 28', src: img2 },
  { name: 'Image 29', src: img3 },
  { name: 'Image 30', src: img4 },
  { name: 'Image 31', src: img5 },
];

const LogoCarousel = () => {
  return (
    <div className="flex justify-center items-center py-8">
      <div className="flex justify-between items-center space-x-8">
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.2 }} // Scaling effect on hover
            whileTap={{ scale: 0.9 }}   // Slight shrink effect on tap
            className="p-4"
          >
            <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-2 w-40"> {/* Adjusted card styles */}
              <img
                src={logo.src}
                alt={logo.name}
                className="h-16 w-16 object-contain" // Set equal width and height
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;
