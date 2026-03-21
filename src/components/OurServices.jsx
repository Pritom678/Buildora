import React from "react";

const OurServices = () => {
  const services = [
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      ),
      title: "Custom Website Development",
      description:
        "Building modern, scalable websites tailored to your business needs with cutting-edge technologies.",
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "E-commerce Development",
      description:
        "Creating high-performance online stores with seamless user experience and secure payment integration.",
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      ),
      title: "UI/UX Design",
      description:
        "Designing intuitive and visually engaging interfaces that enhance user satisfaction and engagement.",
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Web Performance & Optimization",
      description:
        "Improving speed, SEO, and overall site performance to deliver exceptional user experiences.",
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-16 py-20 bg-white">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE - Content */}
        <div className="space-y-6">
          {/* Label */}
          <p className="text-sm font-semibold tracking-widest text-accent/60 uppercase">
            Services
          </p>

          {/* Heading */}
          <h2 className="text-5xl lg:text-6xl font-bold leading-tight text-accent kiona">
            Explore Our Development Services
          </h2>

          {/* Description */}
          <p className="text-lg text-accent/70 leading-relaxed max-w-xl">
            At Tekprova, we help businesses build modern, scalable, and
            high-performance websites that drive growth and deliver exceptional
            user experiences. Our expert team combines technical excellence with
            creative innovation.
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <button className="group relative px-8 py-4 rounded-full border-2 border-secondary overflow-hidden transition-all duration-300 hover:scale-105">
              <span className="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
              <span className="relative z-10 font-semibold text-secondary group-hover:text-white transition-colors duration-500">
                Start Your Project →
              </span>
            </button>
          </div>
        </div>

        {/* RIGHT SIDE - Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              {/* Icon */}
              <div className="text-secondary mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-accent mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-accent/70 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
