// components/TelegramBotSection.jsx
import React from "react";

const TelegramBotSection = () => {
  return (
    <section className="w-full py-16 bg-[#F3F4F6]">
      <div className="container mx-auto px-0 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Image */}
        <div className="flex flex-row items-start gap-10 w-full md:w-1/2">
          <img
            src="/images/telegram-bot.svg"
            alt="Telegram Bot"
            className="w-[300px] h-auto rounded-xl shadow-0 ml-[-40px]"
          />
        </div>

        {/* Right Text and Button */}
        <div className="w-full md:w-1/2 text-right">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            مزایای استفاده از ربات تلگرامی تم ایکس
          </h2>
          <ul className="text-gray-600 space-y-3 text-lg leading-loose">
            <li>درگاه بانکی ایمن</li>
            <li>ارائه ۲۴ ساعته خدمات</li>
            <li>خرید و فروش اتوماتیک ارزهای دیجیتال</li>
            <li>سریعترین سرعت تبدیل، کاملا اتوماتیک</li>
            <li>تبدیل پرفکت مانی به ارزهای دیجیتال و بالعکس</li>
            <li>اتصال مستقیم به حساب کاربری شما در تم ایکس</li>
          </ul>
          <div className="mt-8">
            <a
              href="https://t.me/your_bot_link"
              className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all"
            >
              لینک عضویت ربات تلگرام تم ایکس
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TelegramBotSection;
