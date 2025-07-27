import React from 'react';
import appleImg from "../assets/apple.svg";
import googlePlayImg from "../assets/googlePlay.svg";

const AppDescriptionSection = () => (
  <div className="max-w-6xl mx-auto px-4 mb-10">
    <section className="bg-gray-100 py-20" />
    <h2 className="text-2xl font-bold text-center mb-4">اپلیکیشن موبایل تم ایکس</h2>
    <p className="text-center mb-6 text-gray-700">
      ارزهای دیجیتال را بدون واسطه خرید و فروش کنید<br />
      در عرض کمتر از یک دقیقه در اپلیکیشن ما معامله کنید و از جدیدترین اخبار کریپتو مطلع باشید
    </p>
    <div className="grid grid-cols-3 gap-4">
      {[appleImg, "/bazar.svg", googlePlayImg].map((img, i) => (
        <img key={i} src={img} alt={`store-${i}`} className="w-full h-auto rounded shadow-md object-cover" />
      ))}
    </div>
    <section className="bg-gray-100 py-20" />
  </div>
);

export default AppDescriptionSection;
