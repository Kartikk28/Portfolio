import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

import Info from "./components/Info";
import Footer from "./components/Footer";
import Journey from './components/Journey';



function App() {
  return (
    <div className="glass-container">

      <Navbar />
      <Hero />
      <Journey />
      <Projects />
      <Info /> 
    <Footer />
        </div>
    
  );
}

export default App;
