import Navigation from "../components/navigation/navigation";
import { HashLink } from "react-router-hash-link";
import DarkModeToggleBtn from "../components/darkModeToggleBtn/darkModeToggleBtn";

const Header = () => {
  return (
    <header className="flex justify-between p-4 sticky top-0 w-full z-20 bg-white dark:bg-slate-500">
      <HashLink to="#" className="logo font-logo text-3xl">
        Razvan Plîngu
      </HashLink>
      <div className="flex items-center gap-5">
        <DarkModeToggleBtn />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
