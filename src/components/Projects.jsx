"use client";
import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ReactLenis } from "lenis/react";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const lenisRef = useRef();
  const containerRef = useRef(null);

  useEffect(() => {
    fetch("http://localhost:4000/projects")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching repositories:", error));
  }, []);

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf?.(time * 1000);
    }

    lenisRef.current?.lenis?.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  useGSAP(
    () => {
      if (projects.length === 0) return;

      const wrappers =
        containerRef.current.querySelectorAll(".project-wrapper");
      const sections =
        containerRef.current.querySelectorAll(".project-section");

      sections.forEach((section, index) => {
        const wrapper = wrappers[index];

        gsap.fromTo(
          section,
          {
            rotation: 25,
            transformOrigin: "bottom left",
          },
          {
            rotation: 0,
            ease: "none",
            scrollTrigger: {
              trigger: wrapper,
              start: "top bottom",
              end: "top top",
              scrub: true,
            },
          },
        );

        if (index === sections.length - 1) return;

        ScrollTrigger.create({
          trigger: wrapper,
          start: "top top",
          end: () => `+=${wrapper.offsetHeight}`,
          pin: true,
          pinSpacing: false,
        });
      });
    },
    { scope: containerRef, dependencies: [projects] },
  );

  if (projects.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <h2 className="text-2xl font-semibold text-gray-500 animate-pulse">
          Loading Projects...
        </h2>
      </div>
    );
  }

  return (
    <>
      <ReactLenis ref={lenisRef} root options={{ autoRaf: false }} />
      <div className="w-full" ref={containerRef}>
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              className="project-wrapper w-full min-h-screen relative flex"
              key={project._id || project.id}
            >
              <section className="project-section h-full w-full flex items-center justify-center p-8 md:p-5 lg:py-7 border-b border-gray-200 bg-white origin-bottom-left will-change-transform">
                <div className="max-w-7xl w-full">
                  {isEven ? (
                    // Layout 1: Images Left → Content Right
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                      {/* Left Side - Two Stacked Images */}
                      <div className="relative">
                        <div className="grid grid-cols-2 gap-4 items-end">
                          {/* Image 1 - Tall/Long */}
                          <div className="aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
                            <img
                              src={project.image}
                              alt={`${project.title} preview 1`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          {/* Image 2 - Rounded Square */}
                          <div className="aspect-square bg-gray-100 rounded-3xl overflow-hidden shadow-lg ">
                            <img
                              src={project.image}
                              alt={`${project.title} preview 2`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>

                        {/* View Live Button - Glassmorphism */}
                        <div className="mt-6">
                          <a
                            href={project.liveDemo}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-3 bg-white/30 backdrop-blur-md border border-white/40 rounded-full shadow-lg hover:bg-white/40 transition-all duration-300 hover:scale-105"
                          >
                            <span className="font-semibold text-gray-900">
                              View Live
                            </span>
                            <svg
                              className="w-5 h-5 text-gray-900"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>

                      {/* Right Side - Project Content */}
                      <div className="space-y-6">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 uppercase tracking-tight">
                          {project.title}
                        </h2>

                        <p className="text-lg text-gray-600 leading-relaxed">
                          {project.description}
                        </p>

                        {/* Project Details */}
                        <div className="space-y-3 pt-4">
                          <div className="flex items-center border-b border-gray-300 pb-3">
                            <span className="text-sm text-gray-500 w-32 font-medium">
                              Project name
                            </span>
                            <span className="text-sm text-gray-900 font-medium">
                              {project.title}
                            </span>
                          </div>
                          <div className="flex items-center border-b border-gray-300 pb-3">
                            <span className="text-sm text-gray-500 w-32 font-medium">
                              Client name
                            </span>
                            <span className="text-sm text-gray-900 font-medium">
                              Robert Giligan
                            </span>
                          </div>
                          <div className="flex items-center border-b border-gray-300 pb-3">
                            <span className="text-sm text-gray-500 w-32 font-medium">
                              Project Date
                            </span>
                            <span className="text-sm text-gray-900 font-medium">
                              DD-MM-YYYY
                            </span>
                          </div>
                        </div>

                        {/* Decorative Icon */}
                        <div className="pt-6">
                          <svg
                            className="w-20 h-12 text-gray-300"
                            viewBox="0 0 100 50"
                            fill="none"
                          >
                            <circle
                              cx="15"
                              cy="25"
                              r="8"
                              stroke="currentColor"
                              strokeWidth="2"
                            />
                            <circle
                              cx="35"
                              cy="25"
                              r="8"
                              stroke="currentColor"
                              strokeWidth="2"
                            />
                            <circle
                              cx="55"
                              cy="25"
                              r="8"
                              stroke="currentColor"
                              strokeWidth="2"
                            />
                            <circle
                              cx="75"
                              cy="25"
                              r="8"
                              stroke="currentColor"
                              strokeWidth="2"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Layout 2: Content Left → Images Right
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                      {/* Left Side - Project Content */}
                      <div className="space-y-6">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 uppercase tracking-tight">
                          {project.title}
                        </h2>

                        <p className="text-lg text-gray-600 leading-relaxed">
                          {project.description}
                        </p>

                        {/* Project Details */}
                        <div className="space-y-3 pt-4">
                          <div className="flex items-center border-b border-gray-300 pb-3">
                            <span className="text-sm text-gray-500 w-32 font-medium">
                              Project name
                            </span>
                            <span className="text-sm text-gray-900 font-medium">
                              {project.title}
                            </span>
                          </div>
                          <div className="flex items-center border-b border-gray-300 pb-3">
                            <span className="text-sm text-gray-500 w-32 font-medium">
                              Client name
                            </span>
                            <span className="text-sm text-gray-900 font-medium">
                              Robert Giligan
                            </span>
                          </div>
                          <div className="flex items-center border-b border-gray-300 pb-3">
                            <span className="text-sm text-gray-500 w-32 font-medium">
                              Project Date
                            </span>
                            <span className="text-sm text-gray-900 font-medium">
                              DD-MM-YYYY
                            </span>
                          </div>
                        </div>

                        {/* Decorative Icon */}
                        <div className="pt-6">
                          <svg
                            className="w-20 h-12 text-gray-300"
                            viewBox="0 0 100 50"
                            fill="none"
                          >
                            <circle
                              cx="15"
                              cy="25"
                              r="8"
                              stroke="currentColor"
                              strokeWidth="2"
                            />
                            <circle
                              cx="35"
                              cy="25"
                              r="8"
                              stroke="currentColor"
                              strokeWidth="2"
                            />
                            <circle
                              cx="55"
                              cy="25"
                              r="8"
                              stroke="currentColor"
                              strokeWidth="2"
                            />
                            <circle
                              cx="75"
                              cy="25"
                              r="8"
                              stroke="currentColor"
                              strokeWidth="2"
                            />
                          </svg>
                        </div>

                        {/* View Live Button - Glassmorphism */}
                        <div className="pt-4">
                          <a
                            href={project.liveDemo}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-3 bg-white/30 backdrop-blur-md border border-white/40 rounded-full shadow-lg hover:bg-white/40 transition-all duration-300 hover:scale-105"
                          >
                            <span className="font-semibold text-gray-900">
                              View Live
                            </span>
                            <svg
                              className="w-5 h-5 text-gray-900"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>

                      {/* Right Side - Two Stacked Images */}
                      <div className="grid grid-cols-2 gap-4">
                        {/* Image 1 - Tall/Long */}
                        <div className="aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
                          <img
                            src={project.image}
                            alt={`${project.title} preview 1`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {/* Image 2 - Rounded Square */}
                        <div className="aspect-square bg-gray-100 rounded-3xl overflow-hidden shadow-lg">
                          <img
                            src={project.image}
                            alt={`${project.title} preview 2`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </section>
            </div>
          );
        })}
      </div>
    </>
  );
}
