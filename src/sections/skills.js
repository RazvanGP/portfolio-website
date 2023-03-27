import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiJavascript, SiTailwindcss } from "react-icons/si";
import { BiGitBranch } from "react-icons/bi";
import { FaNodeJs, FaReact, FaBootstrap, FaSass } from "react-icons/fa";

import "./skills.css";

const Skills = () => {
  return (
    <section
      className="font-bold font-primary h-screen flex flex-col-reverse md:flex-row justify-between items-center md:items-start bg-black overflow-hidden"
      id="skillsSection"
    >
      <ul
        id="pillsArea"
        className="px-5 py-10 h-[50%] md:h-full w-full md:w-[50%] text-sm md:text-md grid items-center justify-items-center grid-cols-3 grid-flow-dense "
      >
        <li className="pill html-pill">
          <AiFillHtml5 /> HTML
        </li>

        <li className="pill css-pill">
          <DiCss3 /> CSS
        </li>

        <li className="pill js-pill">
          <SiJavascript /> JavaScript
        </li>

        <li className="pill react-pill">
          <FaReact /> React JS
        </li>

        <li className="pill node-pill">
          <FaNodeJs /> Node JS
        </li>

        <li className="pill git-pill">
          <BiGitBranch /> Git
        </li>

        <li className="pill sass-pill">
          <FaSass /> SaSS
        </li>

        <li className="pill bootstrap-pill">
          <FaBootstrap /> Bootstrap
        </li>

        <li className="pill tailwind-pill">
          <SiTailwindcss /> Tailwind
        </li>
      </ul>

      <div className="text-colorWhite w-full md:w-[50%] h-[50%] md:h-full p-16 font-secondary text-lg flex flex-col justify-center items-center">
        <h2 className="text-center">
          I have experience creating responsive and accessible websites using
          HTML5, CSS3, and JavaScript. I specialize in React framework and have
          built several projects using these technologies.
        </h2>
        <img
          src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="background"
        />
      </div>
    </section>
  );
};

export default Skills;
