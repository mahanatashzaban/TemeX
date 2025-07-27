import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const menuItems = [
    { label: "صفحه اصلی", path: "/" },
    { label: "قوانین و مقررات", path: "/terms" },
    { label: "سوالات متداول", path: "/faq" },
    { label: "زمان تسویه حساب", path: "/settlement" },
    { label: "سطوح کاربری", path: "/accountLevels" },
    { label: "ارتباط با ما", path: "/contact" },
    { label: "درباره ما", path: "/about" }
  ];

  return (
    <header className="fixed top-0 right-0 left-0 bg-white shadow-md z-50 px-6 py-4 flex justify-between items-center" dir="rtl">
      <nav className="flex flex-wrap gap-2 justify-end">
        {menuItems.map(({ label, path }) => (
          <Link
            key={label}
            to={path}
            className="text-sm px-3 py-2 rounded-md font-medium text-white bg-blue-600 hover:bg-blue-700 transition"
          >
            {label}
          </Link>
        ))}
      </nav>

      <div className="flex gap-3 items-center">
        {/* برو به معامله */}
        <button
          onClick={() => window.location.href = "https://app.temx.org"}
          className="bg-blue-500 text-white px-4 py-2 rounded-xl font-semibold hover:bg-blue-600 transition shadow-md"
        >
          برو به معامله
        </button>

        {/* ورود / ثبت‌نام */}
        <button
          onClick={() => window.location.href = "https://app.temx.org/signin"}
          className="bg-white text-blue-600 border border-blue-600 px-4 py-2 rounded-xl font-semibold hover:bg-blue-50 transition shadow-sm"
        >
          ورود / ثبت‌نام
        </button>
      </div>
    </header>
  );
};

export default Header;
