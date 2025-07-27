// src/pages/Contact.jsx
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const subjects = [
  "پشتیبانی",
  "مشاوره فنی",
  "پیشنهادات",
  "سوالات عمومی",
  "دیگر موارد",
];

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    email: "",
    subject: subjects[0],
    message: "",
  });

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    setError(null);
    setSent(false);

    // TODO: replace the following placeholders with your EmailJS IDs
    const SERVICE_ID = "YOUR_SERVICE_ID";
    const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
    const USER_ID = "YOUR_PUBLIC_KEY";

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID)
      .then(() => {
        setSent(true);
        setFormData({
          from_name: "",
          email: "",
          subject: subjects[0],
          message: "",
        });
      })
      .catch(() => {
        setError("ارسال پیام با مشکل مواجه شد. لطفاً دوباره تلاش کنید.");
      })
      .finally(() => {
        setSending(false);
      });
  };

  return (
    <div className="relative min-h-screen font-vazirmatn text-gray-900" dir="rtl">
      {/* Background */}
      <svg
        className="absolute inset-0 -z-10 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <rect width="100" height="100" fill="#F3F4F6" />
      </svg>

      <div className="max-w-4xl mx-auto p-8 sm:p-12">
        <h1 className="text-4xl font-extrabold mb-8 border-b-4 border-indigo-600 pb-2 text-right">
          تماس با ما
        </h1>

        <form onSubmit={sendEmail} className="space-y-8 text-right">
          {/* Name */}
          <div className="relative">
            <input
              type="text"
              name="from_name"
              placeholder="نام شما"
              value={formData.from_name}
              onChange={handleChange}
              required
              className="w-full py-3 px-4 pr-12 rounded-md bg-transparent text-gray-900 placeholder-gray-400 focus:outline-none peer"
            />
            {/* SVG border overlay */}
            <svg
              className="absolute inset-0 pointer-events-none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1"
                y="1"
                width="calc(100% - 2)"
                height="calc(100% - 2)"
                rx="8"
                ry="8"
                stroke="#4f46e5"
                strokeWidth="2"
                className="peer-focus:stroke-indigo-600 transition-colors duration-300"
              />
            </svg>
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder="ایمیل شما"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full py-3 px-4 pr-12 rounded-md bg-transparent text-gray-900 placeholder-gray-400 focus:outline-none peer"
            />
            <svg
              className="absolute inset-0 pointer-events-none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1"
                y="1"
                width="calc(100% - 2)"
                height="calc(100% - 2)"
                rx="8"
                ry="8"
                stroke="#4f46e5"
                strokeWidth="20"
                className="peer-focus:stroke-indigo-600 transition-colors duration-300"
              />
            </svg>
          </div>

          {/* Subject Select */}
          <div className="relative">
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full py-3 px-4 pr-12 rounded-md bg-transparent text-gray-900 placeholder-gray-400 focus:outline-none appearance-none peer cursor-pointer"
              required
            >
              {subjects.map((subj) => (
                <option key={subj} value={subj}>
                  {subj}
                </option>
              ))}
            </select>
            <svg
              className="absolute inset-0 pointer-events-none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1"
                y="1"
                width="calc(100% - 2)"
                height="calc(100% - 2)"
                rx="8"
                ry="8"
                stroke="#4f46e5"
                strokeWidth="2"
                className="peer-focus:stroke-indigo-600 transition-colors duration-300"
              />
            </svg>

            {/* Dropdown arrow */}
            <svg
              className="absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 9l6 6 6-6"
                stroke="#4f46e5"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Message textarea */}
          <div className="relative">
            <textarea
              name="message"
              placeholder="متن پیام شما"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full py-3 px-4 pr-12 rounded-md resize-none bg-transparent text-gray-900 placeholder-gray-400 focus:outline-none peer"
            ></textarea>
            <svg
              className="absolute inset-0 pointer-events-none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1"
                y="1"
                width="calc(100% - 2)"
                height="calc(100% - 2)"
                rx="8"
                ry="8"
                stroke="#4f46e5"
                strokeWidth="2"
                className="peer-focus:stroke-indigo-600 transition-colors duration-300"
              />
            </svg>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={sending}
            className="relative inline-flex items-center justify-center px-8 py-3 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition"
          >
            <svg
              className="absolute inset-0 w-full h-full rounded-md"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="100%"
                height="100%"
                rx="8"
                ry="8"
                fill="url(#gradient)"
              />
              <defs>
                <linearGradient
                  id="gradient"
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#4f46e5" />
                  <stop offset="100%" stopColor="#6366f1" />
                </linearGradient>
              </defs>
            </svg>
            <span className="relative z-10">
              {sending ? "در حال ارسال..." : "ارسال پیام"}
            </span>
          </button>

          {/* Feedback messages */}
          {sent && (
            <p className="text-green-600 font-semibold text-center">
              پیام با موفقیت ارسال شد.
            </p>
          )}
          {error && (
            <p className="text-red-600 font-semibold text-center">{error}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
