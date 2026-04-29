import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FloatingCTA from "@/components/FloatingCTA";
import SupportSection from "@/components/SupportSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FloatingCTA />
        <SupportSection />
      </main>
      <Footer />
    </>
  );
}
