// components/IntroVideoSection.jsx
import React from "react";

const IntroVideoSection = () => {
  return (
    <div className="bg-gray-100 py-12 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-indigo-800 mb-8">
          ویدیو معرفی تم ایکس
        </h2>

        <div className="relative w-full aspect-w-16 aspect-h-9">
          <video
            controls
            className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
          >
            <source src="/videos/intro.mp4" type="video/mp4" />
            مرورگر شما از پخش ویدیو پشتیبانی نمی‌کند.
          </video>
        </div>
      </div>
    </div>
  );
};

export default IntroVideoSection;
