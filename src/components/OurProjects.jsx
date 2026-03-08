"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const OurProjects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A modern e-commerce solution built with Next.js and Stripe integration, featuring real-time inventory management and seamless checkout experience.",
    },
    {
      title: "SaaS Dashboard",
      description:
        "Comprehensive analytics dashboard for SaaS businesses with real-time data visualization, user management, and subscription handling.",
    },
    {
      title: "Corporate Website",
      description:
        "Professional corporate website with CMS integration, multi-language support, and optimized performance for global reach.",
    },
    {
      title: "Portfolio Website",
      description:
        "Creative portfolio showcase with smooth animations, project galleries, and contact integration for freelancers and agencies.",
    },
    {
      title: "Restaurant Booking System",
      description:
        "Online reservation platform with table management, menu display, and integrated payment processing for restaurants.",
    },
    {
      title: "Real Estate Platform",
      description:
        "Property listing website with advanced search filters, virtual tours, and agent management system for real estate businesses.",
    },
  ];

  const containerRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    // Connect Lenis with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };
  }, []);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".project-card");

      cards.forEach((card, index) => {
        if (index < cards.length - 1) {
          ScrollTrigger.create({
            trigger: card,
            start: "top top",
            pin: true,
            pinSpacing: false,
            pinType: "transform",
            endTrigger: cards[index + 1],
            end: "top top",
            markers: false,
            id: `project-pin-${index}`,
          });
        }
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} className="relative bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest text-accent/60 uppercase mb-4">
            Our Work
          </p>
          <h2 className="text-5xl lg:text-6xl font-bold leading-tight text-accent kiona">
            Featured Projects
          </h2>
          <p className="text-lg text-accent/70 mt-4 max-w-2xl mx-auto">
            Explore our portfolio of successful web development projects that
            showcase our expertise in building modern, high-performance
            websites.
          </p>
        </div>

        {/* Project Cards */}
        <div className="space-y-[100vh]">
          {projects.map((project, index) => (
            <div
              key={`project-${index}`}
              className="project-card h-screen flex items-center justify-center"
              style={{
                willChange: "transform",
                backfaceVisibility: "hidden",
                perspective: 1000,
              }}
            >
              <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Left Side - Image Placeholder */}
                  <div className="relative bg-gray-100 aspect-video lg:aspect-auto lg:min-h-[400px] flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <svg
                        className="w-16 h-16 mx-auto mb-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <p className="text-sm">Project Image</p>
                    </div>
                  </div>

                  {/* Right Side - Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <h3 className="text-3xl lg:text-4xl font-bold text-accent mb-4 kiona">
                      {project.title}
                    </h3>
                    <p className="text-accent/70 leading-relaxed mb-6">
                      {project.description}
                    </p>
                    <div>
                      <button className="group relative px-8 py-3 rounded-full border-2 border-secondary overflow-hidden transition-all duration-300 hover:scale-105 isolate">
                        <span className="absolute inset-0 bg-secondary -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
                        <span className="relative z-10 font-semibold text-secondary group-hover:text-primary transition-colors duration-500">
                          Live Demo →
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProjects;
