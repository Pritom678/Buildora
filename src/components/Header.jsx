import React from "react";

const Header = () => {
  return (
    <header className="w-full flex flex-row items-center justify-between px-6 py-4 md:px-8 md:py-6 lg:px-16 lg:py-8">
      <div className="flex-1 min-w-0">
        {/* Logo or site name here */}
        <span className="font-bold text-xl md:text-2xl lg:text-3xl whitespace-nowrap">
          BUILDORA
        </span>
      </div>
      <nav className="flex-1 flex flex-row justify-end gap-6 min-w-0 md:gap-8 lg:gap-10">
        {/* Navigation links */}
        <a
          href="#about"
          className="text-base md:text-lg lg:text-xl hover:underline"
        >
          About
        </a>
        <a
          href="#services"
          className="text-base md:text-lg lg:text-xl hover:underline"
        >
          Services
        </a>
        <a
          href="#projects"
          className="text-base md:text-lg lg:text-xl hover:underline"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="text-base md:text-lg lg:text-xl hover:underline"
        >
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
