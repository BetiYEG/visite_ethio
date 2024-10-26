import React, { useState } from "react";

const SubscribeForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-purple-50 rounded-lg p-8 shadow-lg max-w-2xl w-full">
        <h2 className="text-center text-xl font-semibold text-gray-800 mb-4">
          Subscribe to get information, latest news and other interesting offers about visiting Ethiopia
        </h2>
        <form onSubmit={handleSubmit} className="flex">
          <input
            type="email"
            className="border rounded-l-lg p-2 flex-grow outline-none"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-orange-500 text-white rounded-r-lg px-4 py-2"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubscribeForm;
