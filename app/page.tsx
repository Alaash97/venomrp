import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Connect from "@/components/Connect";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen text-white selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      <Features />
      <Connect />
      <Footer />
    </main>
  );
}
