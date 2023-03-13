import { HashLink } from "react-router-hash-link";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const MobileNavigation = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      {/*hamburger icon*/}
      <button
        className="md:hidden"
        onClick={() => {
          setOpenMenu(true);
        }}
      >
        <AiOutlineMenu />
      </button>

      {openMenu && (
        <aside className="bg-colorBlue text-colorWhite shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20">
          {/*close icon*/}
          <button className="text-4xl p-2 absolute">
            <AiOutlineClose
              onClick={() => {
                setOpenMenu(false);
              }}
            />
          </button>
          {/*menu list*/}
          <div className="h-full flex flex-col justify-center items-center gap-y-8 font-secondary font-bold text-3xl text-center">
            <HashLink to="#">Home</HashLink>
            <HashLink to="#aboutSection">About</HashLink>
            <HashLink to="#technologiesSection">
              Tools and Technologies
            </HashLink>
            <HashLink to="#projectsSection">My Projects</HashLink>
          </div>
        </aside>
      )}
    </>
  );
};

export default MobileNavigation;
