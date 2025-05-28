"use client";

import React, { useState } from "react";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send message");

      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      // ✅ Show simple browser popup
      alert("✅ Your message has been sent to the admin.");
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    }
  };

  return (
    <section className="text-black body-font" id="Contact-us">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-5xl text-2xl font-medium title-font mb-4 text-white">
            Contact Us
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base underline">
            feel free to Contact
          </p>
        </div>
        <form className="lg:w-1/2 md:w-2/3 mx-auto" onSubmit={handleSubmit}>
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <label htmlFor="name" className="leading-7 text-lg text-black">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your Full Name"
                required
                className="w-full bg-gray-100 bg-opacity-70 rounded border border-gray-300 focus:bg-white focus:ring-2 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="p-2 w-1/2">
              <label htmlFor="email" className="leading-7 text-lg text-black">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="abc123@gmail.com"
                required
                className="w-full bg-gray-100 bg-opacity-70 rounded border border-gray-300 focus:bg-white focus:ring-2 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="p-2 w-full">
              <label htmlFor="subject" className="leading-7 text-lg text-black">
                Subject:
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter Your Subject Topic"
                required
                className="w-full bg-gray-100 bg-opacity-70 rounded border border-gray-300 focus:bg-white focus:ring-2 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="p-2 w-full">
              <label htmlFor="message" className="leading-7 text-lg text-black">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Please Enter Your Message"
                required
                className="w-full bg-gray-100 bg-opacity-70 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              />
            </div>
          <div className="p-2 w-full">
  <button
    type="submit"
    className="flex items-center justify-center mx-auto backdrop-blur-md bg-white/10 border border-white/20 text-white font-semibold text-lg px-8 py-3 rounded-xl shadow-lg hover:bg-white/20 transition-all duration-300 hover:scale-105"
  >
    ✉️ Send Message
  </button>
</div>

            {submitted && (
              <p className="text-green-600 text-center w-full mt-4">
                ✅ Your message has been sent to the admin.
              </p>
            )}
            {error && (
              <p className="text-red-600 text-center w-full mt-4">{error}</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactUs;
