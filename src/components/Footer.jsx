import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-blue-600 text-white py-6 mt-auto relative">
    <div className="text-center">2025@ کلیه حقوق برای تم ایکس محفوظ است</div>
    <div className="w-full px-4 py-6 bg-blue-600 text-white text-sm">
      <div className="max-w-screen-md mx-auto grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-3 text-right">
        <Link to="/settlement" className="hover:underline">زمان تسویه حساب</Link>
        <Link to="/faq" className="hover:underline">سوالات متدوال</Link>
        <Link to="/terms" className="hover:underline">قوانین و مقررات</Link>
        <Link to="/" className="hover:underline">صفحه اصلی</Link>
        <Link to="/about" className="hover:underline">درباره ما</Link>
        <Link to="/contact" className="hover:underline">ارتباط با ما</Link>
        <a href="https://blog.temx.org/" target="_blank" rel="noopener noreferrer" className="hover:underline">وبلاگ</a>
        <Link to="/accountLevels" className="hover:underline">سطوح کاربری</Link>
      </div>
    </div>
  </footer>
);

export default Footer;
