"use client";

import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What services does Buildora offer?",
      answer:
        "We specialize in modern website development, including custom websites, e-commerce platforms, UI/UX design, and performance optimization.",
    },
    {
      question: "How long does it take to build a website?",
      answer:
        "Project timelines depend on complexity, but most websites are completed within 2–6 weeks.",
    },
    {
      question: "Do you build websites using modern technologies?",
      answer:
        "Yes, we use modern stacks such as Next.js, Node.js, and scalable backend solutions to ensure performance and flexibility.",
    },
    {
      question: "Can you redesign an existing website?",
      answer:
        "Yes, we can redesign and optimize existing websites to improve performance, design, and user experience.",
    },
    {
      question: "What is your pricing structure?",
      answer:
        "Our pricing varies based on project scope and requirements. We offer flexible packages tailored to your business needs and budget.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-16 py-20 bg-white">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* LEFT SIDE - Content */}
        <div className="space-y-6 lg:sticky lg:top-32">
          {/* Label */}
          <p className="text-sm font-semibold tracking-widest text-accent/60 uppercase">
            FAQ
          </p>

          {/* Heading */}
          <h2 className="text-5xl lg:text-6xl font-bold leading-tight text-accent kiona">
            Frequently Asked Questions
          </h2>

          {/* Description */}
          <p className="text-lg text-accent/70 leading-relaxed max-w-xl">
            Find answers to common questions about Buildora's website
            development process, services, and how we can help bring your
            digital vision to life.
          </p>

          {/* Support Card */}
          <div className="mt-8 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold text-accent mb-2">
              Still have questions?
            </h3>
            <p className="text-sm text-accent/70 mb-4">
              Can't find the answer you're looking for? Our team is here to
              help.
            </p>
            <button className="group relative px-6 py-3 rounded-full border-2 border-secondary overflow-hidden transition-all duration-300 hover:scale-105">
              <span className="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
              <span className="relative z-10 font-semibold text-secondary group-hover:text-white transition-colors duration-500">
                Contact Us →
              </span>
            </button>
          </div>
        </div>

        {/* RIGHT SIDE - FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left transition-colors duration-200"
              >
                <h3 className="text-lg font-bold text-accent pr-4">
                  {faq.question}
                </h3>

                {/* Arrow Icon */}
                <svg
                  className={`w-6 h-6 text-secondary flex-shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <div className="px-6 pb-6 text-accent/70 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
