import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Proof from "@/components/Proof";
import Advantage from "@/components/Advantage";
import Solutions from "@/components/Solutions";
import Process from "@/components/Process";
import ClientImpact from "@/components/ClientImpact";
import WhyAFA from "@/components/WhyAFA";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Proof />
        <Advantage />
        <Solutions />
        <Process />
        <ClientImpact />
        <WhyAFA />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
