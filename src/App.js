import Header from "./sections/header";
import About from "./sections/about";
import Technologies from "./sections/technologies";
import Projects from "./sections/projects";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <About />
      <Technologies />
      <Projects />
    </Router>
  );
}

export default App;
