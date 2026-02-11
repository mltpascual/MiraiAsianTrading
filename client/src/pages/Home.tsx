/*
 * DESIGN: Noir Opulence — Dark Luxury Editorial
 * Full landing page for Mirai Asian Trading
 * Sections: Hero, About, Process, Services, Why Us, Testimonials, CTA, Contact, Footer
 * Dark theme with gold accents, cinematic imagery, editorial typography
 */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";
import ServicesSection from "@/components/ServicesSection";
import WhyUsSection from "@/components/WhyUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaBanner from "@/components/CtaBanner";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProcessSection />
        <ServicesSection />
        <WhyUsSection />
        <TestimonialsSection />
        <CtaBanner />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
