"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";

const Header = () => {
  const navRef = useRef(null);

  useEffect(() => {
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
      delay: 0.4,
      ease: "power2.out",
    });
  }, []);

  return (
    <div
      ref={navRef}
      className="w-full flex items-center justify-between px-8 py-4 bg-white/70 backdrop-blur-md shadow-sm"
    >
      {/* Logo */}
      <div className="flex items-center gap-3">
        <Image
          src="https://res.cloudinary.com/dfwigpcer/image/upload/v1772730622/bUILDORA_lOGO_oFFICIAL_Png_deszsa.png"
          alt="Buildora Logo"
          width={120}
          height={120}
        />
        <span className="kiona text-xl font-semibold">Buildora</span>
      </div>

      {/* Center Menu */}
      <div className="hidden lg:flex bg-white shadow-md rounded-full px-6 py-6 gap-6 ">
        <Link href="/" className="nav-item text-sm font-medium hover:text-primary">
          Home
        </Link>

        <Link href="/individuals" className="nav-item text-sm font-medium hover:text-primary">
          For individuals +
        </Link>

        <Link href="/clinicians" className="nav-item text-sm font-medium hover:text-primary">
          For clinicians +
        </Link>
      </div>

      {/* CTA Button */}
      <div>
      <div className="navbar-end"> <a className="kiona btn rounded-full p-6 hover:bg-secondary hover:text-primary transition-all duration-700 hover:scale-102">Button</a> </div>
      </div>
    </div>
  );
};

export default Header;