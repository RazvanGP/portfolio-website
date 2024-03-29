import Navigation from "../components/navigation/navigation";
import { Link } from "react-router-dom";
import DarkModeToggleBtn from "../components/darkModeToggleBtn/darkModeToggleBtn";

const Header = () => {
  return (
    <header className="text-colorDarkBlue font-[600] flex justify-between p-4 w-full fixed top-0 bg-transparent z-10 px-10">
      <Link to="/" className="logo font-logo text-3xl text-colorDarkBlue">
        Razvan Plîngu
      </Link>
      <div className="flex items-center gap-5 ">
        <DarkModeToggleBtn />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
