"use client";

import HeroMobile from "@/components/HeroMobile";
import HeroDesktop from "@/components/HeroDesktop";
import ScrollIndicator from "@/components/ScrollIndicator";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import DarkModeToggle from "@/components/DarkModeToggle";

const PortfolioPage = () => (
  <div className="min-h-screen relative overflow-x-hidden transition-colors duration-500 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-black">
    <DarkModeToggle />

    <section className="relative h-[100dvh]">
      <div className="lg:grid lg:grid-cols-12 lg:items-center lg:gap-8 lg:max-w-7xl lg:mx-auto">
        <HeroMobile />
        <HeroDesktop />
      </div>
      <ScrollIndicator />
    </section>

    <ProjectsSection />
    <ContactSection />
    <Footer />
  </div>
);

export default PortfolioPage;
