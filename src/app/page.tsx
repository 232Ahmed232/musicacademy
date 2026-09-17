import HeroSection from "@/componenets/HeroSection";
import { main } from "motion/react-client";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/96 bg-grid-white/[0.02]">
       <HeroSection/>
    </main>
  );
}
