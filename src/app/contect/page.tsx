import React from "react";

function Contect() {
  return (
    <div className="contect-container bg-gray-950 min-h-screen flex items-center justify-center p-6">
      <div className="contect-border bg-white shadow-lg rounded-lg max-w-2xl w-full p-8">
        <div className="contect-header text-center mb-6">
          <h2 className="contect-title text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <div className="contect-info space-y-4">
            <p className="text-gray-700">
              WhatsApp Number: <span className="contect-bold font-semibold">+923101026509</span>
            </p>
            <p className="text-gray-700">
              Email Address: <span className="contect-bold font-semibold">arinrimshakanwal@gmail.com</span>
            </p>
            <p className="text-gray-700">
              Address: <span className="contect-bold font-semibold">Karachi, Pakistan</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contect;
