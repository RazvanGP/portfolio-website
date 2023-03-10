import Header from "./sections/header";
import About from "./sections/about";
import Technologies from "./sections/technologies";
import Projects from "./sections/projects";
import { BrowserRouter as Router } from "react-router-dom";

import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Router>
        <Header />
        <About />
        <Technologies />
        <Projects />
      </Router>
    </div>
  );
}

export default App;
