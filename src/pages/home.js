import About from "../sections/about";
import Skills from "../sections/skills";
import Projects from "../sections/projects";
import MouseFollower from "../components/mouseFollower/mouseFollower";

const Home = () => {
  return (
    <>
      <About />
      <Skills />
      <Projects />
      <MouseFollower />
    </>
  );
};

export default Home;
