import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-secondary text-primary p-10 kiona">
  <aside className="text-center mx-auto">
    <Image
      src="https://res.cloudinary.com/dfwigpcer/image/upload/v1772730622/bUILDORA_lOGO_oFFICIAL_Png_deszsa.png"
      alt="ACME Industries Ltd. Logo"
      width={150}
      height={150}
      className="mx-auto"
    />
    <p className="mt-[-1.5rem]">
      <span className="text-lg font-semibold">BUILDORA</span>
      <br />
      Providing reliable tech since 1992
    </p>
  </aside>
  <nav className="mx-auto">
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav className="mx-auto">
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav className="mx-auto">
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
  );
};

export default Footer;
