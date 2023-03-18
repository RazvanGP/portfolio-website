import Header from "./sections/header";
import Home from "./pages/home";
import Resume from "./pages/resume";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
