// components/ContactSection.jsx
import React from "react";
import happyImg from "../assets/happy.png";

const ContactSection = () => {
  return (
    <div className="bg-[#F3F4F6] py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image */}
        <div className="flex justify-center">
          <img
            src={happyImg}
            alt="چرا تم ایکس؟"
            className="w-full max-w-sm rounded-lg shadow-0"
          />
        </div>

        {/* Text and button */}
        <div className="text-right">
          <h2 className="text-3xl font-bold mb-4 text-indigo-800">چرا تم ایکس؟</h2>
          <p className="text-gray-700 mb-2 text-lg">با ما تماس بگیرید</p>
          <p className="text-gray-900 font-semibold text-xl mb-6">021-91016626</p>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded text-lg transition">
            اطلاعات بیشتر
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
