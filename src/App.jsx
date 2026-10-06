import Navbar from "./compenonts/Navbar/Navbar";
import Hero from "./compenonts/Hero/Hero";
import About from "./compenonts/About/About";
import Team from "./compenonts/Team/Team";
import Contact from "./Contact/Contact";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Team />
        <Contact />
      </main>
    </>
  );
}

export default App;