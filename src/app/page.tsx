import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Process from "@/components/home/Process";
import Stats from "@/components/home/Stats";
import Compare from "@/components/home/Compare";
import Savings from "@/components/home/Savings";
import Solutions from "@/components/home/Solutions";
import CTA from "@/components/home/CTA";
import FAQ from "@/components/home/FAQ";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <Stats />
        <Compare />
        <Savings />
        <Solutions />
        <CTA />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
