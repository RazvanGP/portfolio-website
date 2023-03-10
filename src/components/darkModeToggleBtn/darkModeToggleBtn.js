import { BsMoonStars, BsSun } from "react-icons/bs";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const DarkModeToggleBtn = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button className="darkModeToggleBtn" onClick={toggleDarkMode}>
      {darkMode ? <BsMoonStars /> : <BsSun />}
    </button>
  );
};

export default DarkModeToggleBtn;
