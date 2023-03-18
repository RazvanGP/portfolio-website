import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import MobileNavigation from "../mobileNavigation/mobileNavigation";

const Navigation = () => {
  return (
    <nav className="flex justify-end">
      <div className="hidden md:flex gap-10 ">
        <Link to="/" className="font-secondary ">
          Home
        </Link>
        <HashLink to="#" className="font-secondary">
          About
        </HashLink>
        <HashLink to="#technologiesSection" className="font-secondary">
          Tools and Technologies
        </HashLink>
        <HashLink to="#projectsSection" className="font-secondary">
          My Projects
        </HashLink>
      </div>
      <div className="place-self-end">
        <MobileNavigation />
      </div>
    </nav>
  );
};

export default Navigation;
