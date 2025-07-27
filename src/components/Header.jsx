import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const menuItems = [
    { label: "صفحه اصلی", path: "/" },
    { label: "قوانین و مقررات", path: "/terms" },
    { label: "سوالات متداول", path: "/faq" },
    { label: "زمان تسویه حساب", path: "settlement" },
    { label: "سطوح کاربری", path: "accountLevels" },
    { label: "ارتباط با ما", path: "contact" },
    { label: "درباره ما", path: "/about" }
  ];

  return (
    <header className="fixed top-0 right-0 left-0 bg-white shadow-md z-50 px-6 py-4 flex justify-between items-center" dir="rtl">
      <nav className="flex flex-wrap gap-2 justify-end">
        {menuItems.map(({ label, path }) =>
          path === "#" ? (
            <button
              key={label}
              className="text-sm px-3 py-2 rounded-md font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition"
            >
              {label}
            </button>
          ) : (
            <Link
              key={label}
              to={path}
              className="text-sm px-3 py-2 rounded-md font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition"
            >
              {label}
            </Link>
          )
        )}
      </nav>
<button
  onClick={() => window.location.href = "https://app.temx.org"}
  className="bg-rose-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-rose-700 transition"
>
  ورود / ثبت‌نام
</button>

    </header>
  );
};

export default Header;
