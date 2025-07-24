import { useState } from "react";
import { Link } from "react-router-dom";

const faqData = [
  {
    question: "What file formats do you accept for 3D printing?",
    answer: "We accept STL, OBJ, and 3MF files. If you have another format, please contact us for assistance."
  },
  {
    question: "How do I get a quote for my 3D print?",
    answer: "Simply upload your 3D model on our website and select your desired material and options. You'll receive an instant quote."
  },
  {
    question: "What materials are available?",
    answer: "We offer PLA, ABS, PETG, and TPU. Each material has unique properties suitable for different applications."
  },
  {
    question: "How long does it take to receive my prints?",
    answer: "Standard orders are delivered within 3-7 business days. Express delivery options are available for urgent projects."
  },
  {
    question: "Do you offer discounts for students or bulk orders?",
    answer: "Yes! Verified students get a 10% discount. Bulk orders and startups can contact us directly for special pricing."
  },
  {
    question: "Can I order just one part?",
    answer: "Absolutely. There is no minimum order requirement—you can order a single part or as many as you need."
  },
  {
    question: "Is my design and data safe?",
    answer: "Yes, your files and information are kept confidential and secure. We never share your designs without permission."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit/debit cards, UPI, and net banking. Flexible payment options are available for students and startups."
  },
  {
    question: "Can you help me choose the right material?",
    answer: "Of course! Contact our team and we'll help you select the best material for your project requirements."
  },
  {
    question: "Do you provide support for design or troubleshooting?",
    answer: "Yes, our experts can assist with design optimization and troubleshooting. Reach out for guidance at any stage."
  }
];

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = idx => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20 min-h-[400px] flex flex-col justify-center">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-700">Frequently Asked Questions</h2>
        <p className="text-gray-700 mb-8 text-lg">
          Here you'll find answers to the most common questions about our 3D printing services, pricing, materials, and process. If you can't find what you're looking for, feel free to <Link to="/contact-us" className="text-blue-600 font-semibold underline">contact us</Link> directly!
        </p>
        <div className="space-y-6 text-left">
          {faqData.map((faq, idx) => (
            <div
              key={idx}
              className={`transition-all duration-300 bg-white rounded-2xl shadow-lg border border-blue-100 ${
                openIndex === idx ? "p-6" : "p-4"
              }`}
            >
              <button
                className="w-full text-lg font-semibold text-blue-700 flex justify-between items-center focus:outline-none"
                onClick={() => toggle(idx)}
                aria-expanded={openIndex === idx}
                aria-controls={`faq-answer-${idx}`}
              >
                <span>{faq.question}</span>
                <span
                  className={`ml-2 text-blue-500 transition-transform duration-300 ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              <div
                id={`faq-answer-${idx}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === idx ? "max-h-40 mt-4 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="text-gray-700 text-base">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 bg-blue-100 rounded-xl p-6 shadow text-center">
          <h3 className="text-xl font-bold text-blue-800 mb-2">Still have questions?</h3>
          <p className="text-gray-700 mb-2">
            We're here to help! If your question isn't answered above, reach out to our team and we'll get back to you quickly.
          </p>
          <Link
            to="/contact-us"
            className="inline-block bg-blue-700 text-white font-bold px-6 py-2 rounded-full shadow hover:bg-blue-800 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Faq;