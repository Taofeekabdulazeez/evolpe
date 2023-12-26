import { useState } from "react";
import Companies from "./components/Companies";
import FAQs from "./components/FAQs";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Intro1 from "./components/Intro1";
import Intro2 from "./components/Intro2";
import Operations from "./components/Operations";
import Overlay from "./components/Overlay";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Header isOpen={isOpen} onClick={() => setIsOpen((open) => !open)} />
      <main className="max-w-[120rem] w-[100%] mx-auto px-2">
        <Intro1 />
        <Companies />
        <Operations />
        <Intro2 />
        <Features />
        <FAQs />
      </main>
      <Footer />
      <Overlay isOpen={isOpen} />
    </div>
  );
}

export default App;
