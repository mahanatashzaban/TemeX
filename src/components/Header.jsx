import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const menuItems = [
    { label: "صفحه اصلی", path: "/" },
    { label: "قوانین و مقررات", path: "/terms" },
    { label: "سوالات متداول", path: "/faq" },
    { label: "زمان تسویه حساب", path: "/settlement" },
    { label: "سطوح کاربری", path: "/accountLevels" },
    { label: "ارتباط با ما", path: "/contact" },
    { label: "درباره ما", path: "/about" }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 right-0 left-0 bg-white shadow-md z-50 px-6 py-4 flex justify-between items-center" dir="rtl">
      
      {/* دکمه همبرگری برای موبایل */}
      <div className="lg:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {/* آیکون SVG سفید */}
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* منوی موبایل */}
      {isMenuOpen && (
        <div ref={menuRef} className="absolute top-16 right-6 bg-white border rounded-xl shadow-md p-4 w-52 text-right z-50">
          {menuItems.map(({ label, path }) => (
            <Link
              key={label}
              to={path}
              onClick={() => setIsMenuOpen(false)}
              className="block text-sm py-2 text-gray-800 hover:text-blue-600"
            >
              {label}
            </Link>
          ))}
        </div>
      )}

      {/* منوی دسکتاپ */}
      <nav className="hidden lg:flex flex-wrap gap-2 justify-end">
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
        <button
          onClick={() => window.location.href = "https://app.temx.org"}
          className="bg-blue-500 text-white px-4 py-2 rounded-xl font-semibold hover:bg-blue-600 transition shadow-md"
        >
          برو به معامله
        </button>

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
