"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const HeroSection = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const cards = useRef([]);

  useEffect(() => {
    // SPLIT TEXT
    const split = new SplitText(titleRef.current, {
      type: "words,chars",
    });

    gsap.from(split.chars, {
      opacity: 0,
      y: 80,
      stagger: 0.03,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top 80%",
      },
    });

    // FLOATING CARDS
    cards.current.forEach((card, i) => {
      gsap.to(card, {
        y: -25,
        duration: 2 + i * 0.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    // MOUSE PARALLAX
    const moveCards = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;

      cards.current.forEach((card, i) => {
        gsap.to(card, {
          x: x * (i * 0.2),
          y: y * (i * 0.2),
          duration: 0.6,
        });
      });
    };

    window.addEventListener("mousemove", moveCards);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>

      {/* GRADIENT GLOW */}
      <div className="absolute w-[700px] h-[500px] bg-gradient-to-r from-mutated to-secondary blur-[150px] opacity-40"></div>

      {/* CONTENT */}

      <div className="relative text-center px-6 z-10">
        <h1
          ref={titleRef}
          className="text-7xl font-bold leading-tight max-w-4xl kiona"
        >
          BUILDORA <br />
          Crafting Modern <br />
          Web Experiences
        </h1>

        <p className="mt-6 max-w-xl mx-auto text-lg text-accent">
          We build fast, scalable and interactive websites for startups,
          agencies and digital brands.
        </p>

        {/* BUTTONS */}

        <div className="mt-10 flex justify-center gap-5">
          <button className="px-8 py-3 rounded-full bg-primary text-secondary transition-all duration-300 hover:scale-105 hover:shadow-xl">
            View Projects
          </button>

          <button className="px-8 py-3 rounded-full border border-primary transition-all duration-300 hover:bg-secondary hover:text-primary">
            Start Project →
          </button>
        </div>
      </div>

      {/* SCATTERED FLOATING CARDS */}

      <div
        ref={(el) => (cards.current[0] = el)}
        className="absolute top-[10%] left-[6%] bg-white shadow-xl rounded-xl px-4 py-3"
      >
        Next.js Development
      </div>

      <div
        ref={(el) => (cards.current[1] = el)}
        className="absolute top-[20%] right-[8%] bg-white shadow-xl rounded-xl px-4 py-3"
      >
        UI / UX Design
      </div>

      <div
        ref={(el) => (cards.current[2] = el)}
        className="absolute top-[60%] left-[10%] bg-black text-white rounded-full px-5 py-2"
      >
        MERN Stack
      </div>

      <div
        ref={(el) => (cards.current[3] = el)}
        className="absolute bottom-[20%] right-[10%] bg-secondary text-white rounded-full px-5 py-2"
      >
        Interactive Websites
      </div>

      <div
        ref={(el) => (cards.current[4] = el)}
        className="absolute top-[45%] left-[3%] bg-white shadow-xl rounded-xl px-4 py-3"
      >
        Performance Optimized
      </div>

      <div
        ref={(el) => (cards.current[5] = el)}
        className="absolute bottom-[35%] right-[3%] bg-white shadow-xl rounded-xl px-4 py-3"
      >
        SEO Friendly
      </div>
    </section>
  );
};

export default HeroSection;
