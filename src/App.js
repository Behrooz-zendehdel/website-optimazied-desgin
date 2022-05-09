import "./App.css";
import Intro from "./Components/Intro/Intro";
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Components/Servicess/Services";
import Card from "./Components/Card/Card";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Services />
      <Card />
    </div>
  );
}

export default App;
