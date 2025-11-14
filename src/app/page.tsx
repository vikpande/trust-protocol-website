"use client";

import React from "react";
import Header from "@/components/Header";
import BlogHero from "@/components/BlogHero";
import ServiceSection from "@/components/ServiceSection";
import Footer from "@/components/Footer";
import WhoWeAre from "@/components/WhoWeAre";
import ProtectionCTA from "@/components/ProtectionCTA";
import FAQSection from "@/components/FAQSection";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col w-full">
        <BlogHero />
        <WhoWeAre />
        <ServiceSection />
        <WhyChooseUs />
        <FAQSection />
        <ProtectionCTA />
      </main>
      <Footer />
    </>
  );
}
