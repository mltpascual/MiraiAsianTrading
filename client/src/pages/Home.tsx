import Navbar from "@/components/Navbar";
import GoldTicker from "@/components/GoldTicker";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";
import ServicesSection from "@/components/ServicesSection";
import GoldCalculator from "@/components/GoldCalculator";
import CertificationsSection from "@/components/CertificationsSection";
import GallerySection from "@/components/GallerySection";
import WhyUsSection from "@/components/WhyUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import FaqSection from "@/components/FaqSection";
import NewsletterSection from "@/components/NewsletterSection";
import CtaBanner from "@/components/CtaBanner";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingChatButton from "@/components/FloatingChatButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />
      <GoldTicker />
      <HeroSection />
      <AboutSection />
      <ProcessSection />
      <ServicesSection />
      <GoldCalculator />
      <CertificationsSection />
      <GallerySection />
      <WhyUsSection />
      <TestimonialsSection />
      <BlogSection />
      <FaqSection />
      <NewsletterSection />
      <CtaBanner />
      <ContactSection />
      <Footer />
      <FloatingChatButton />
    </div>
  );
}
