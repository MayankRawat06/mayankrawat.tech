import About from "./about";
import Projects from "./projects";
import Contact from "./contact";

export default function Home() {
  return (
    <main className="flex flex-col gap-16">
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
