// components/FeatureSection.jsx
import React from 'react';
import svgItems from '../data/svgItems';
import benefit from '../assets/benefit.svg';

const FeatureSection = () => (
  <div className="max-w-6xl mx-auto px-4 mb-10">
    <div className="flex flex-col items-center justify-center mb-8 text-center">
      <img src={benefit} alt="مزایا" className="w-16 h-16 mb-4" />
      <h1 className="text-3xl md:text-4xl font-bold">تجربه‌ای متفاوت از معاملات در تم ایکس</h1>
    </div>
    <section className="bg-gray-100 py-5" />
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {svgItems.map(({ image, title, subtitle }, idx) => (
        <div key={idx} className="bg-white p-4 rounded shadow flex flex-col items-center text-center">
          <img src={image} alt={title} className="w-16 h-16 mb-2" />
          <h4 className="font-semibold mb-1">{title}</h4>
          <p className="text-gray-600 text-sm">{subtitle}</p>
        </div>
      ))}
    </div>
    <section className="bg-gray-100 py-20" />
  </div>
);

export default FeatureSection;
