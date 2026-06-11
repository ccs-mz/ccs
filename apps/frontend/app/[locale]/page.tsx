
import HeroPage from "@/components/layout/home/heropage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "CCS builds AI systems, blockchain solutions, automation tools and custom software for modern businesses.",
};

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-96px)] md:min-h-[calc(100vh-112px)]">

      <div className="w-screen overflow-x-hidden">



        <section className="md:max-w-3xl relative  lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto flex items-center border-x border-gray-500 flex-col">
          <HeroPage/>
        </section>

      </div>



    </main>
    
  );
}
