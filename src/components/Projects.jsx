"use client";
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const [projects, setProjects] = React.useState([]);
  const projectRefs = useRef([]);
  const containerRef = useRef(null);
  
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://localhost:4000/projects');
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    if (projects.length === 0) return;

    // Clear previous ScrollTriggers
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    projectRefs.current.forEach((card, index) => {
      if (!card) return;

      gsap.fromTo(
        card,
        {
          rotation: 30,
          opacity: 0.5,
        },
        {
          rotation: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: card,
            start: 'top center',
            end: 'center center',
            scrub: 1,
            pin: true,
            pinSpacing: true,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [projects]);

  return (
    <div ref={containerRef} className="mx-auto px-4 py-12">
      <div className="space-y-[100vh]">
        {projects.map((project, index) => (
          <div 
            key={project._id} 
            ref={(el) => (projectRefs.current[index] = el)}
            className="flex flex-col md:flex-row gap-6 bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-border"
            style={{ transformOrigin: 'center center' }}
          >
            {/* Image Section - Left Side */}
            <div className="md:w-1/2 relative h-64 md:h-auto">
              <Image 
                src={project.image} 
                alt={project.title} 
                fill
                className="object-cover"
              />
            </div>

            {/* Content Section - Right Side */}
            <div className="md:w-1/2 p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold text-secondary mb-3">
                  {project.title}
                </h2>
                <p className="text-secondary mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-secondary mb-2">Technologies:</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies?.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-muted text-accent text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                {project.features && (
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-secondary mb-2">Features:</h3>
                    <ul className="list-disc list-inside text-secondary text-sm space-y-1">
                      {project.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Links */}
              <div className="flex gap-4 mt-4">
                {project.github && (
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-accent text-primary rounded-md hover:opacity-90 transition-opacity"
                  >
                    GitHub
                  </a>
                )}
                {project.liveDemo && (
                  <a 
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-secondary text-primary rounded-md hover:opacity-90 transition-opacity"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
