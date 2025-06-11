import ClickSpark from "./components/clickSpark/ClickSpark";
import Navbar from "./components/navbar/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <ClickSpark
      sparkColor="#fff"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <section className="relative flex flex-col min-h-screen bg-background">
        <div className="w-full fixed z-50 top-0 md:top-0 bottom-0 md:bottom-auto">
          <Navbar />
        </div>
        <main className="flex-1 w-full">
          <Outlet />
        </main>
      </section>
    </ClickSpark>
  );
}

export default App;
