

import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import ProblemSolved from "./Components/ProblemSolved";
import Metrics from "./Components/Metrics";
import Brands from "./Components/Brands";
import Reviews from "./Components/Reviews";
import CouldDo from "./Components/CouldDo";
import CTASection from "./Components/CTASection";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProblemSolved />
      <Metrics />
      <Brands />
      <Reviews />
      <CouldDo />
      <CTASection />
      <Footer />
    </>
  );
}

export default App;
