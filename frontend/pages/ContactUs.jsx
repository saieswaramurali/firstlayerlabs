import React, { useState } from "react";

function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // You can add your submit logic here
    alert("Thank you for contacting us!");
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <section className="bg-gray-50 py-20 min-h-[600px] flex flex-col justify-center">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-700 mb-8">
          Have a question or want to start your 3D printing project? Fill out the form below and our team will get back to you soon.
        </p>
        <form
          className="bg-white rounded-xl shadow p-8 flex flex-col gap-6"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={5}
            required
            className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
        <div className="mt-10 text-gray-600">
          <div className="mb-2">
            <span className="font-semibold text-gray-900">Email:</span> hello@firstlayerlabs.com
          </div>
          <div>
            <span className="font-semibold text-gray-900">Phone:</span> +91 98765 43210
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;