"use client"

import About from "@/components/main/About";
import Contact from "@/components/main/Contact";
import Home from "@/components/main/Home";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";



export default function Root() {



  return (
    <main>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
