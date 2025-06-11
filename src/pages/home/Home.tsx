import ExploreZiit from "../../components/exploreZiit/ExploreZiit";
import Hero from "../../components/hero/Hero";
import Mentors from "../../components/mentors/Mentors";
import Partners from "../../components/partners/Partners";
import Pricing from "../../components/pricing/Pricing";

function Home() {
  return (
    <main className="flex flex-col items-center justify-start w-full px-6 py-12 max-w-7xl mx-auto md:mt-11">
      <Hero />
      {/* Our offerings */}
      <ExploreZiit />

      {/* Pricing */}
      <Pricing />

      {/* Mentors Section */}
      <Mentors />

      {/* Partners */}
      <Partners />
    </main>
  );
}

export default Home;
