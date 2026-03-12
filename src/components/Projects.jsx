"use client"
import React, { useEffect, useState, useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';  
import { ReactLenis } from "lenis/react";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const lenisRef = useRef();
  const containerRef = useRef(null);

  useEffect(() => {
    fetch('http://localhost:4000/projects')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error fetching repositories:', error));
  }, []);

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf?.(time * 1000);
    }

    lenisRef.current?.lenis?.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  useGSAP(() => {
    if (projects.length === 0) return;

    const wrappers = containerRef.current.querySelectorAll('.project-wrapper');
    const sections = containerRef.current.querySelectorAll('.project-section');

    sections.forEach((section, index) => {
      const wrapper = wrappers[index];

      gsap.fromTo(section,
        {
          rotation: 25,
          transformOrigin: 'bottom left',
        },
        {
          rotation: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: wrapper,       
            start: 'top bottom',    
            end: 'top top',        
            scrub: true,
          }
        }
      );

      if (index === sections.length - 1) return;

      ScrollTrigger.create({
        trigger: wrapper,           
        start: 'top top',
        end: () => `+=${wrapper.offsetHeight}`,
        pin: true,
        pinSpacing: false,         
      });
    });

  }, { scope: containerRef, dependencies: [projects] });

  if (projects.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <h2 className="text-2xl font-semibold text-gray-500 animate-pulse">Loading Projects...</h2>
      </div>
    );
  }

  return (
    <>
      <ReactLenis ref={lenisRef} root options={{ autoRaf: false }} />
      <div className="w-full" ref={containerRef}>
        {projects.map((project) => (
          <div
            className="project-wrapper w-full min-h-screen relative flex"
            key={project._id || project.id}
          >
            <section className="project-section h-full w-full flex flex-col lg:flex-row items-center justify-center gap-12 p-8 md:p-16 lg:py-24 border-b border-gray-200 bg-white origin-bottom-left will-change-transform">

              <div className="flex-1 w-full space-y-8">
                <div>
                  <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-gray-900 tracking-tight mb-4">
                    {project.title}
                  </h2>
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <h3 className="text-sm uppercase tracking-wider font-bold text-gray-400">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-lg text-sm font-medium border border-indigo-100 shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <h3 className="text-sm uppercase tracking-wider font-bold text-gray-400">Key Features</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-4 pt-6">
                  <a href={project.liveDemo} target="_blank" rel="noreferrer" className="px-8 py-4 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition shadow-lg hover:shadow-xl flex items-center gap-2" >
                    View Live Demo
                  </a>
                  <a href={project.github} target="_blank" rel="noreferrer" className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-full border-2 border-gray-200 hover:border-gray-900 transition flex items-center gap-2" >
                    Source Code
                  </a>
                </div>
              </div>

              {/* Right Column: Image */}
              <div className="flex-1 w-full lg:h-[70vh] h-[40vh] min-h-[350px] relative">
                <div className="absolute inset-0 bg-gray-100 rounded-3xl shadow-2xl overflow-hidden border border-gray-200 transform transition duration-500 hover:scale-[1.02]">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

            </section>
          </div>
        ))}
      </div>
    </>
  );
}