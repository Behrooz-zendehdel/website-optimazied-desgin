import "./App.css";
import Experience from "./Components/Experience/Experience";
import Intro from "./Components/Intro/Intro";
import Navbar from "./Components/Navbar/Navbar";
import Portfolio from "./Components/Portfolio/Portfolio";
import Services from "./Components/Servicess/Services";
import Testimonial from "./Components/Testimonial/Testimonial";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Portfolio />
      <Testimonial />
    </div>
  );
}

export default App;
