import About from "@/component/About";
import Contact from "@/component/Contact";
import Education from "@/component/Education";
import Experience from "@/component/Experience";
import Hero from "@/component/Hero";
import Navbar from "@/component/Navbar";
import Projects from "@/component/Projects";
import Skills from "@/component/Skills";


export default function Home() {
  return (

    <main className="relative min-h-screen w-full flex flex-col items-center">
      

      <Navbar />

   
      <div className="w-full max-w-7xl px-4 md:px-8 flex flex-col gap-32">
        
        <Hero />
        <About />
        <Skills/>
        <Experience/>
        <Education/>
        <Projects/>
        <Contact/>
      
      </div>

      {/* 3. Subtle Nebula Glows (Optional, for that Screenshot look) */}
      <div className="fixed top-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-purple-600/10 blur-[120px] pointer-events-none z-0" />
      <div className="fixed bottom-0 right-[-5%] w-[300px] h-[300px] rounded-full bg-blue-600/10 blur-[100px] pointer-events-none z-0" />
      
    </main>
  );
}