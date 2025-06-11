import ExploreZiit from "../exploreZiit/ExploreZiit";
import Hero from "../hero/Hero";
import Mentors from "../mentors/Mentors";
import Partners from "../partners/Partners";
import Pricing from "../pricing/Pricing";

function Home() {
  return (
    <main className="flex flex-col items-center justify-start w-full px-6 py-12 max-w-7xl mx-auto mt-11">
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
