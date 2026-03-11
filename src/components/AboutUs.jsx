import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-16 py-20 bg-white">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE - Image Cards & Stats */}
        <div className="relative h-[600px] w-full">
          {/* Main Image Card 1 */}
          <div className="absolute top-0 left-0 w-[280px] h-[320px] rounded-2xl shadow-xl overflow-hidden z-10">
            <video
              src="https://res.cloudinary.com/do3iu9q7d/video/upload/v1773245193/13522186-uhd_3840_2160_25fps_rkdfjp.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="object-cover w-full h-full"
            />
          </div>

          {/* Main Image Card 2 - Overlapping */}
          <div className="absolute top-[140px] left-[200px] w-[300px] h-[340px] rounded-2xl shadow-xl overflow-hidden z-20">
            <video
              src="https://res.cloudinary.com/do3iu9q7d/video/upload/v1773244769/5474267-uhd_2160_4096_25fps_b36qi6.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="object-cover w-full h-full"
            />
          </div>

          {/* Floating Stat Card 1 - Clients */}
          <div className="absolute top-[60px] right-[20px] bg-white rounded-xl shadow-lg p-5 z-30 w-[140px]">
            <p className="text-3xl font-bold text-secondary">150+</p>
            <p className="text-sm text-accent/70 mt-1">Happy Clients</p>
          </div>

          {/* Floating Stat Card 2 - Projects */}
          <div className="absolute bottom-[120px] left-[40px] bg-white rounded-xl shadow-lg p-5 z-30 w-[150px]">
            <p className="text-3xl font-bold text-secondary">200+</p>
            <p className="text-sm text-accent/70 mt-1">Projects Done</p>
          </div>

          {/* Floating Stat Card 3 - Rating */}
          <div className="absolute bottom-[40px] right-[60px] bg-white rounded-xl shadow-lg p-5 z-30 w-[140px]">
            <p className="text-3xl font-bold text-secondary">4.9★</p>
            <p className="text-sm text-accent/70 mt-1">Client Rating</p>
          </div>

          {/* Small Accent Card */}
          <div className="absolute top-[380px] left-[120px] w-[100px] h-[100px] bg-secondary/10 rounded-xl shadow-md z-5"></div>
        </div>

        {/* RIGHT SIDE - Content */}
        <div className="space-y-6">
          {/* Label */}
          <p className="text-sm font-semibold tracking-widest text-accent/60 uppercase">
            About Tekprova
          </p>

          {/* Heading */}
          <h2 className="text-5xl lg:text-6xl font-bold leading-tight text-accent kiona">
            Crafting Digital Experiences That Matter
          </h2>

          {/* Description */}
          <p className="text-lg text-accent/70 leading-relaxed max-w-xl">
            Tekprova is a modern web development agency specializing in building
            high-performance, scalable websites for startups, agencies, and
            digital brands. We combine cutting-edge technology with creative
            design to deliver exceptional digital experiences.
          </p>

          <p className="text-lg text-accent/70 leading-relaxed max-w-xl">
            Our team of expert developers and designers work collaboratively to
            transform your vision into reality, ensuring every project exceeds
            expectations.
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <button className="group relative px-8 py-4 rounded-full border-2 border-secondary overflow-hidden transition-all duration-300 hover:scale-105">
              <span className="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
              <span className="relative z-10 font-semibold text-secondary group-hover:text-white transition-colors duration-500">
                Learn More →
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
