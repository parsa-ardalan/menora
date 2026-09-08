import Demo from "@/components/home/Projects";
import Hero from "@/components/home/Hero";
import Image from "next/image";
import Projects from "@/components/home/Projects";
import Benefits from "@/components/home/Benefits";
import Comments from "@/components/home/Comments";
import CTA from "@/components/common/CTA";

export default function Home() {

  return (
    <main className="w-screen h-fit py-20 animate-fade-up-delay-1">

      {/* header of the page */}
      <Hero />

      {/* demo menu */}
      <Projects />

       {/* why menora */}
       <Benefits />

       {/* comments */}
       <Comments />

       {/* CTA */}
       <CTA />

    </main>
  );
}