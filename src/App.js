import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import './index.css';

function App() {

  return (
    <div>
      <Navbar />
      <Home />
        <div className="py-16 bg-[#0a192f]" />
      <About />
        <div className="py-16 bg-[#0a192f]" />
      <Skills />
        <div className="py-16 bg-[#0a192f]" />
      <Work />
        <div className="py-16 bg-[#0a192f]" />
    </div>
  );
}

export default App;
