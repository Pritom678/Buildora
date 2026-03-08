"use client";
import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import HeroSection from "@/components/HeroSection";
import OurClients from "@/components/OurClients";
import OurProjects from "@/components/OurProjects";
import OurServices from "@/components/OurServices";

export default function Home() {
  return (
    <>
      <div className="min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <HeroSection />
        <AboutUs />
        <OurServices />
        <OurProjects />
        <FAQ />
        <ContactUs />
      </div>
    </>
  );
}
