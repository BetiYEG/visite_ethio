import { BiPlayCircle } from "react-icons/bi";
import { useState } from "react";
import BestService from "./BestService";
import { FiArrowLeftCircle } from "react-icons/fi";
import { FiArrowRightCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import BookTrip from "./BookTrip";
import  LogoCarousel from "./LogoCarousel";


// import Navbar from "../Componet/Navbar";
export default function Home() {
  const navigate = useNavigate();

  const handleReadMoreClick = () => {
    navigate("/about"); // Forwarding to the About page
  };
  const testimonials = [
    {
      name: "Mike Taylor",
      location: "Lahore, Pakistan",
      text: "Visiting Ethiopia was an unforgettable experience. The landscapes and culture were truly awe-inspiring, leaving me with memories I'll cherish forever.",
    },
    {
      name: "Chris Thomas",
      location: "CEO of Red Button",
      text: "Ethiopia's rich history and vibrant culture left me in awe. The hospitality of the people and the stunning landscapes made for an incredible journey.",
    },
    {
      name: "Sarah Johnson",
      location: "New York, USA",
      text: "From the ancient rock-hewn churches to the bustling markets of Addis Ababa, Ethiopia offered a diverse and captivating travel experience.",
    },
    {
      name: "Ahmed Hassan",
      location: "Cairo, Egypt",
      text: "The Ethiopian coffee ceremony was a highlight of my trip. The warmth and tradition behind it truly exemplify the country's welcoming spirit.",
    },
    {
      name: "Emma Wilson",
      location: "London, UK",
      text: "Trekking in the Simien Mountains was breathtaking. The wildlife and landscapes are unlike anything I've ever seen before.",
    },
  ];
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <main>
        <section className="flex flex-col lg:flex-row items-center justify-between py-12">
          <div className="max-w-xl w-full px-4 lg:px-0">
            <h1 className="text-2xl lg:text-5xl font-bold text-navy-900 leading-tight mb-4">
              Travel, experience, and live in Ethiopia visit us today!
            </h1>
            <p className="text-gray-600 mb-6">
              Ethiopia invites you to discover why it is the origin of so much!
              As you explore Ethiopia, you will be put in touch with your own
              origins...for this is a Land of Origins
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                className="bg-orange-400 text-white px-6 py-3 rounded-full font-semibold"
                onClick={handleReadMoreClick}
              >
                Read More
              </button>
              <button className="flex items-center">
                <BiPlayCircle className="mr-2 h-12 w-12 text-orange-500" /> Play
                Demo
              </button>
            </div>
          </div>
          <div className="relative w-full max-w-md mx-auto mt-6 lg:mt-0 lg:max-w-none">
            <img
              // src="/assets/banner.png"
              src="/assets/Image.png"
              alt="Traveler"
              className="w-full h-auto object-cover"
            />
          </div>
        </section>
        {/* Top Destinations */}
        <BestService />

        {/* Book Your Next Trip In 3 Easy Steps */}
        <BookTrip />

        {/* testimonials */}
        <section className="py-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-sm text-black font-semibold mb-2">
                TESTIMONIALS
              </h2>
              <h3 className="text-6xl font-bold text-navy-900 mb-8">
                What People Say About Us.
              </h3>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-start mb-4">
                <img
                  src="/assets/download.jpeg"
                  alt={testimonials[currentTestimonial].name}
                  width={48}
                  height={48}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="text-gray-700 mb-2 leading-relaxed">
                    {testimonials[currentTestimonial].text}
                  </p>
                  <h4 className="font-semibold text-navy-900">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {testimonials[currentTestimonial].location}
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center mt-4">
                <FiArrowLeftCircle
                  className="text-orange-500 cursor-pointer text-3xl"
                  onClick={prevTestimonial}
                />
                <FiArrowRightCircle
                  className="text-orange-500 cursor-pointer text-3xl"
                  onClick={nextTestimonial}
                />
              </div>
            </div>
          </div>
        </section>
        < LogoCarousel/>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         

{/* subscribe section */}
  <section className="py-16 bg-purple-50 rounded-lg relative mt-20">
    <div className="max-w-3xl mx-auto text-center px-4">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
        Subscribe to get information, latest news and other interesting offers about visiting Ethiopia
      </h2>
      <form className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <div className="relative w-full max-w-xs">
          <input
            type="email"
            placeholder="Your email"
            className="pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.5 4.16666H2.5C2.04166 4.16666 1.66666 4.54166 1.66666 5V15C1.66666 15.4583 2.04166 15.8333 2.5 15.8333H17.5C17.9583 15.8333 18.3333 15.4583 18.3333 15V5C18.3333 4.54166 17.9583 4.16666 17.5 4.16666ZM16.6667 6.25L10.4167 10.0833C10.1667 10.25 9.83332 10.25 9.58332 10.0833L3.33332 6.25C3.25832 6.20833 3.20832 6.125 3.20832 6.04166C3.20832 5.83333 3.44166 5.70833 3.62499 5.83333L10 9.72916L16.375 5.83333C16.5583 5.70833 16.7917 5.83333 16.7917 6.04166C16.7917 6.125 16.7417 6.20833 16.6667 6.25Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <button
          type="submit"
          className="bg-orange-400 text-white px-6 py-3 rounded-lg font-semibold"
        >
          Subscribe
        </button>
      </form>
    </div>
  </section>
</div>

       
      </main>
    </div>
  );
}
