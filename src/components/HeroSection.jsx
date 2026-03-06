"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { FlipWord } from "./animations/FlipWord";


gsap.registerPlugin(ScrollTrigger, SplitText);

const HeroSection = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const cards = useRef([]);

  useGSAP(
    () => {
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
          rotation: "+=8",
          duration: 2 + i * 0.4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      // ROTATING BOX 1
      gsap.to(cards.current[0], {
        rotation: "+=180",
        borderRadius: "50%",
        scale: 1.1,
        duration: 5,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
      });

      // ROTATING BOX 2 (starts 3s later)
      gsap.to(cards.current[3], {
        rotation: "+=180",
        borderRadius: "50%",
        scale: 1.1,
        duration: 5,
        delay: 3,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
      });

      // HOVER FLIP
      cards.current.forEach((card) => {
        card.addEventListener("mouseenter", () => {
          gsap.fromTo(
            card,
            { rotateY: 0 },
            {
              rotateY: 360,
              duration: 0.8,
              ease: "power2.inOut",
            },
          );
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

      return () => {
        window.removeEventListener("mousemove", moveCards);
      };
    },
    { scope: heroRef },
  );

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
          BUILD
          <FlipWord
            front="O"
            image="https://res.cloudinary.com/dfwigpcer/image/upload/v1772730622/bUILDORA_lOGO_oFFICIAL_Png_deszsa.png"
          />
          RA <br />
          Crafting M
          <FlipWord
            front="O"
            image="https://res.cloudinary.com/dfwigpcer/image/upload/v1772730622/bUILDORA_lOGO_oFFICIAL_Png_deszsa.png"
          />
          dern <br />
          Web Experiences
        </h1>

        <p className="mt-6 max-w-xl mx-auto text-lg text-accent">
          We build fast, scalable and interactive websites for startups,
          agencies and digital brands.
        </p>

        <div className="mt-10 flex justify-center gap-5">
          <button className="px-8 py-3 rounded-full bg-primary text-secondary transition-all duration-300 hover:scale-105 hover:shadow-xl">
            View Projects
          </button>

          <button className="px-8 py-3 rounded-full border border-primary transition-all duration-300 hover:bg-secondary hover:text-primary">
            Start Project →
          </button>
        </div>
      </div>

      {/* FLOATING BOXES */}

      <div
        ref={(el) => (cards.current[0] = el)}
        className="absolute top-[8%] left-[11%] w-[120px] h-[120px] rounded-xl shadow-xl bg-white"
      ></div>

      <div
        ref={(el) => (cards.current[1] = el)}
        className="absolute top-[18%] right-[6%] w-[160px] h-[160px] rounded-xl shadow-xl bg-white"
      ></div>

      <div
        ref={(el) => (cards.current[2] = el)}
        className="absolute top-[65%] left-[8%] w-[100px] h-[100px] rounded-xl shadow-xl bg-white"
      ></div>

      <div
        ref={(el) => (cards.current[3] = el)}
        className="absolute bottom-[15%] right-[12%] w-[180px] h-[180px] rounded-xl shadow-xl bg-white"
      ></div>

      <div
        ref={(el) => (cards.current[4] = el)}
        className="absolute top-[45%] left-[2%] w-[140px] h-[140px] rounded-xl shadow-xl bg-white"
      ></div>

      <div
        ref={(el) => (cards.current[5] = el)}
        className="absolute bottom-[30%] right-[3%] w-[110px] h-[110px] rounded-xl shadow-xl bg-white"
      ></div>
    </section>
  );
};

export default HeroSection;
