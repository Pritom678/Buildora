"use client";
import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import CTA from "@/components/CTA";
import HeroSection from "@/components/HeroSection";
import OurClients from "@/components/OurClients";
import OurServices from "@/components/OurServices";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useEffect, useRef } from "react";
// import { ReactLenis } from "lenis/react";
// import { useGSAP } from "@gsap/react";
// import { Scroll } from "lucide-react";

// gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  // const lenisRef = useRef();
  // const containerRef = useRef(null);

  // useEffect(() => {
  //   function update(time) {
  //     lenisRef.current?.lenis?.raf(time * 1000);
  //   }

  //   lenisRef.current?.lenis?.on("scroll", ScrollTrigger.update);

  //   gsap.ticker.add(update);
  //   gsap.ticker.lagSmoothing(0); // do not smooth scrolling, do not skip frames

  //   return () => {
  //     gsap.ticker.remove(update);
  //   };
  // }, []);

  // useGSAP(
  //   () => {
  //     const sections = document.querySelectorAll("section");

  //     sections.forEach((section, index) => {
  //       const container = section.querySelector(".container");

  //       gsap.to(container, {
  //         rotation: 0,
  //         ease: "none",
  //         scrollTrigger: {
  //           trigger: section,
  //           start: "top bottom",
  //           end: "top 20%",
  //           scrub: true,
  //         },
  //       });

  //       if (index === sections.length - 1) return;

  //       ScrollTrigger.create({
  //         trigger: section,
  //         start: "bottom bottom",
  //         end: "bottom top",
  //         pin: true,
  //         pinSpacing: false,
  //       });
  //     });
  //   },
  //   { scope: containerRef },
  // );

  return (
    <>
      {/* <ReactLenis root options={{ autoRef: false }} ref={lenisRef} /> */}
      <div
        // ref={containerRef}
        className="min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black"
      >
        <HeroSection />
      </div>
    </>
  );
}
