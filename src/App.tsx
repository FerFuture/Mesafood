import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";
import { Benefits } from "./components/sections/Benefits";
import { Features } from "./components/sections/Features";
import { FinalCTA } from "./components/sections/FinalCTA";
import { Hero } from "./components/sections/Hero";
import { HowItWorks } from "./components/sections/HowItWorks";
import { Pricing } from "./components/sections/Pricing";
import { Showcase } from "./components/sections/Showcase";
import { Testimonials } from "./components/sections/Testimonials";
import { Trust } from "./components/sections/Trust";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-bg-primary text-text-primary antialiased">
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <Features />
        <Showcase />
        <Benefits />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
