import Companies from "./components/Companies";
import FAQs from "./components/FAQs";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Intro1 from "./components/Intro1";
import Intro2 from "./components/Intro2";
import Operations from "./components/Operations";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Intro1 />
        <Companies />
        <Operations />
        <Intro2 />
        <Features />
        <FAQs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
