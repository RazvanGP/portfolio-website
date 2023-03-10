import { HashLink } from "react-router-hash-link";
import MobileNavigation from "../mobileNavigation/mobileNavigation";

const Navigation = () => {
  return (
    <nav className="flex justify-end">
      <div className="hidden md:flex gap-10">
        <HashLink to="#">Home</HashLink>
        <HashLink to="#aboutSection">About</HashLink>
        <HashLink to="#technologiesSection">Tools and Technologies</HashLink>
        <HashLink to="#projectsSection">My Projects</HashLink>
      </div>
      <div className="place-self-end">
        <MobileNavigation />
      </div>
    </nav>
  );
};

export default Navigation;
