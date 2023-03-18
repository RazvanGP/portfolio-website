import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiJavascript, SiTailwindcss } from "react-icons/si";
import { FaNodeJs, FaReact, FaBootstrap, FaSass } from "react-icons/fa";

import "./technologies.css";

const Technologies = () => {
  return (
    <section
      className="relative font-bold font-primary h-screen bg-black bg-skills-background md:bg-[length:50%] bg-center bg-[length:100%] bg-no-repeat md:bg-right "
      id="technologiesSection"
    >
      <div
        id="pillsArea"
        className="absolute h-[50%] md:h-full w-full md:w-[50%] bottom-0 md:left-0 text-sm md:text-xl overflow-hidden"
      >
        <div
          data-id="1"
          className="pill bg-[#e34c26] text-colorWhite animate-spin"
        >
          <AiFillHtml5 className="inline mr-2" /> HTML
        </div>

        <div data-id="2" className="pill bg-[#264de4] text-colorWhite">
          <DiCss3 className="inline mr-2" />
          CSS
        </div>

        <div data-id="3" className="pill bg-[#f0db4f]">
          <SiJavascript className="inline mr-2" /> JavaScript
        </div>

        <div data-id="4" className="pill bg-[#61DBFB]">
          <FaReact className="inline mr-2" />
          ReactJS
        </div>

        <div data-id="5" className="pill bg-[#68a063]">
          <FaNodeJs className="inline mr-2" /> NodeJS
        </div>

        <div data-id="6" className="pill bg-[#F1502F]">
          <AiFillGithub className="inline mr-2" /> Git
        </div>

        <div data-id="7" className="pill bg-[#c69] text-colorWhite">
          <FaSass className="inline mr-2" /> SaSS
        </div>

        <div data-id="8" className="pill bg-[#080135] text-colorWhite">
          <FaBootstrap className="inline mr-2" />
          Bootstrap
        </div>

        <div data-id="9" className="pill bg-[#0284c7] text-colorWhite">
          <SiTailwindcss className="inline mr-2" />
          Tailwind
        </div>
      </div>
      <div>
        <h2 className="text-colorWhite absolute right-0 w-full md:w-[50%] mt-28 p-10 font-secondary text-lg">
          I have experience creating responsive and accessible websites using
          HTML5, CSS3, and JavaScript. I specialize in React framework and have
          built several projects using these technologies.
        </h2>
      </div>
    </section>
  );
};

export default Technologies;
