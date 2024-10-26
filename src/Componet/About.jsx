import {
  FaFaceGrinHearts,
  FaHandsHolding,
  FaLandmark,
  FaPalette,
} from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
export default function LandingPage() {
  const navigate = useNavigate();

  const handleReadMoreClick = () => {
    navigate("/"); // Forwarding to the About page
  };
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <main>
        <section className="flex flex-col lg:flex-row items-center justify-between py-12">
          <div className="max-w-xl w-full px-4 lg:px-0">
            <h1 className="text-2xl lg:text-5xl font-bold text-navy-900 leading-tight mb-4">
              Welcome to Ethiopia, Land of Origins
            </h1>
            <p className="text-gray-600 mb-6">
              Ethiopia is an ancient country whose unique cultural heritage,
              rich history, and remarkable biodiversity are reflected in a tally
              of nine UNESCO World Heritage Sites – more than any other country
              in Africa. Within its borders, you’ll find the world’s
              fourth-holiest Islamic city, along with the oldest continuously
              occupied town south of the Sahara.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleReadMoreClick}
                className="bg-orange-400 text-white px-6 py-3 rounded-full font-semibold"
              >
                Back to Home
              </button>
            </div>
          </div>
          <div className="relative w-full max-w-md mx-auto mt-6 lg:mt-0 lg:max-w-none">
            <img
              src="/assets/About.png"
              alt="Traveler"
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

        <section className="py-12">
          <h2 className="text-3xl font-bold mb-8 text-center">
            What Makes Us Different From The Others
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FaFaceGrinHearts,
                title: "Reliable and Efficient",
                description:
                  "Built-in travel longer service we deliver efficient and timely travel service",
              },
              {
                icon: FaHandsHolding,
                title: "Built on Expertise",
                description:
                  "Engineered touring that goes well may have been for the best",
              },
              {
                icon: FaLandmark,
                title: "Engaged and Dedicated",
                description:
                  "Broken surely that as with a was as engaged traveling",
              },
              {
                icon: FaPalette,
                title: "Attention to Detail",
                description:
                  "We deliver customized solution services for industry customers",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <feature.icon className="h-12 w-12 text-orange-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="/assets/tour.jpeg"
              alt="Travel stamp"
              width={500}
              height={500}
              className="rounded-full"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Our Popular Tour Plans</h2>
            <p className="text-gray-600 mb-8">
              Explore our handpicked tours where every detail is crafted for
              your enjoyment and comfort. From hidden gems to celebrated
              attractions, our tours promise unforgettable experiences and
              premium service. Choose from a variety of options designed to meet
              your highest expectations, each offering unique adventures and
              seamless travel arrangements.
            </p>
            <div className="flex space-x-8">
              {[
                { label: "Vacations", percentage: 78 },
                { label: "Honeymoon", percentage: 55 },
                { label: "Musical Events", percentage: 30 },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="relative inline-flex items-center justify-center">
                    <svg className="w-20 h-20">
                      <circle
                        className="text-gray-200"
                        strokeWidth="5"
                        stroke="currentColor"
                        fill="transparent"
                        r="30"
                        cx="40"
                        cy="40"
                      />
                      <circle
                        className="text-orange-500"
                        strokeWidth="5"
                        strokeDasharray={30 * 2 * Math.PI}
                        strokeDashoffset={
                          30 * 2 * Math.PI * (1 - stat.percentage / 100)
                        }
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="transparent"
                        r="30"
                        cx="40"
                        cy="40"
                      />
                    </svg>
                    <span className="absolute text-xl font-bold">
                      {stat.percentage}%
                    </span>
                  </div>
                  <p className="mt-2 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-100 rounded-lg">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 px-8">
              <span className="text-orange-500 font-semibold">PROMOTION</span>
              <h2 className="text-3xl font-bold mt-2 mb-4">
                We Provide You Best Ethiopian Sightseeing Tours
              </h2>
              <p className="text-gray-600 mb-6">
                We offer exceptional sightseeing tours across Ethiopia,
                carefully designed to showcase the very best of the region. From
                stunning landscapes to rich cultural sites, our tours ensure a
                comprehensive exploration of Ethiopia's unique attractions.
                Enjoy a seamless journey filled with breathtaking experiences
                and top-notch service, tailored to create lasting memories. Join
                us to discover the beauty and heritage of Ethiopia through our
                meticulously planned itineraries.
              </p>
              <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold">
                View Packages
              </button>
            </div>
            <div className="md:w-1/2">
              <img
                src="/assets/4kilo.jpg"
                alt="Europe sightseeing"
                width={500}
                height={500}
              className="rounded-full"
              />
            </div>
          </div>
        </section>

        <section className="py-12">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Explore Ethiopia with Our Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Addis Ababa",
                price: "$650",
                image: "/assets/Addis_Ababa.jpeg",
              },
              {
                name: "Lalibela",
                price: "$720",
                image: "/assets/lalibela.jpeg",
              },
              {
                name: "Gondar",
                price: "$680",
                image: "/assets/gonder.jpeg",
              },
              {
                name: "Simien Mountains",
                price: "$820",
                image: "/assets/simien_mountain.jpeg",
              },
              { name: "Axum", price: "$750", image: "/assets/axum.jpeg" },
              { name: "Harar", price: "$690", image: "/assets/harar.jpeg" },
              {
                name: "Lake Tana",
                price: "$770",
                image: "/assets/lake_tana.jpeg",
              },
              {
                name: "Bale Mountains",
                price: "$850",
                image: "/assets/bale_mountain.jpeg",
              },
              {
                name: "Omo Valley",
                price: "$900",
                image: "/assets/omo_vally.jpeg",
              },
            ].map((destination, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg"
              >
                <img
                  src={destination.image}
                  alt={destination.name}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 opacity-0 group-hover:opacity-100 flex items-end p-4">
                  <div>
                    <h3 className="text-white text-xl font-semibold">
                      {destination.name}
                    </h3>
                    <p className="text-orange-500 font-bold">
                      {destination.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
