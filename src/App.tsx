import { motion } from "framer-motion";
import TiltedCard from "./components/tiltedCard/TiltedCard";
import ClickSpark from "./components/clickSpark/ClickSpark";
import Hero from "./components/hero/Hero";
import Mentors from "./components/mentors/Mentors";
import OurOfferings from "./components/ourOfferings/OurOfferings";
import Partners from "./components/partners/Partners";

function App() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-background">
      <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        {/* Hero Section */}
        <Hero />

        {/* Mentors Section */}
        <Mentors />

        {/* Our offerings */}

        <OurOfferings />

        {/* Partners */}
        <Partners />
      </ClickSpark>
    </section>
  );
}

export default App;
