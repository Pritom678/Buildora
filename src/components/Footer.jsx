import React from "react";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center justify-center px-4 py-6 md:px-8 md:py-8 lg:px-16 lg:py-10">
      <div className="w-full text-center">
        {/* Footer content here */}
        <span className="text-sm md:text-base lg:text-lg">
          &copy; {new Date().getFullYear()} BUILDORA. All rights reserved.
        </span>
      </div>
      <nav className="mt-4 flex flex-row flex-wrap gap-6 justify-center md:gap-8 lg:gap-10">
        {/* Footer navigation links */}
        <a
          href="#privacy"
          className="text-sm md:text-base lg:text-lg hover:underline"
        >
          Privacy Policy
        </a>
        <a
          href="#terms"
          className="text-sm md:text-base lg:text-lg hover:underline"
        >
          Terms of Service
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
