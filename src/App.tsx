import ClickSpark from "./components/clickSpark/ClickSpark";
import Mentors from "./components/mentors/Mentors";
import OurOfferings from "./components/exploreZiit/ExploreZiit";
import Partners from "./components/partners/Partners";
import Pricing from "./components/pricing/Pricing";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";

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
        <div className="fixed top-0 left-0 w-full h-fit z-50">
          <Navbar />
        </div>
        <Home />
      </ClickSpark>
    </section>
  );
}

export default App;
