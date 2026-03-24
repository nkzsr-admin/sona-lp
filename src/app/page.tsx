import CustomCursor from "@/components/CustomCursor";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MarqueeBanner from "@/components/MarqueeBanner";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Pricing from "@/components/Pricing";
import HowItWorks from "@/components/HowItWorks";
import Comparison from "@/components/Comparison";
import UseCases from "@/components/UseCases";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <div className="relative z-10">
          <MarqueeBanner />
          <Problem />
          <Solution />
          <Pricing />
          <HowItWorks />
          <Comparison />
          <UseCases />
          <CTA />
        </div>
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </>
  );
}
