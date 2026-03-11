"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Header = () => {
  const navRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(navRef.current, {
        y: -80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".nav-item", {
        y: -20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        delay: 0.3,
        ease: "power2.out",
      });
    },
    { scope: navRef },
  );

  return (
    <header
      ref={navRef}
      className="absolute top-0 left-0 w-full flex items-center justify-between px-8 py-4 z-50"
    >
      {/* Logo */}
      <div className="flex items-center nav-item">
        <Image
          src="https://res.cloudinary.com/dfwigpcer/image/upload/v1772730622/bUILDORA_lOGO_oFFICIAL_Png_deszsa.png"
          alt="Buildora Logo"
          width={110}
          height={110}
        />
        <span className="kiona text-xl font-semibold text-black">Tekprova</span>
      </div>

      {/* Floating Glass Center Menu */}
      <div
        className="hidden lg:flex items-center gap-6 px-6 py-3 rounded-full
        bg-white/30 backdrop-blur-md border border-white/40
        shadow-lg sticky  left-1/2 -translate-x-1/2"
      >
        <Link
          href="/"
          className="nav-item text-sm font-medium text-accent hover:text-secondary transition-colors duration-300"
        >
          Home
        </Link>

        <Link
          href="/individuals"
          className="nav-item text-sm font-medium text-accent hover:text-secondary transition-colors duration-300"
        >
          For individuals +
        </Link>

        <Link
          href="/clinicians"
          className="nav-item text-sm font-medium text-accent hover:text-secondary transition-colors duration-300"
        >
          For clinicians +
        </Link>
      </div>

      {/* CTA Button */}
      <div className="nav-item">
        <button
          className="kiona rounded-full px-8 py-3
            bg-primary/15 backdrop-blur-xl
            border border-muted/40 font-medium text-black
            hover:bg-secondary/50 hover:text-primary
            transition-all duration-500 hover:scale-105 shadow-md"
          onClick={() => {
            const section = document.getElementById("contactUs");
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Contact Us
        </button>
      </div>
    </header>
  );
};

export default Header;
