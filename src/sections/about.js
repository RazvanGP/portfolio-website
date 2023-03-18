import profilePhoto from "../assets/images/profile-photo.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section
      className="h-screen bg-colorWhite dark:bg-colorDarkBlue overflow-clip"
      id="aboutSection"
    >
      <div className="h-full flex flex-col md:flex-row justify-between md:justify-around items-center md:items-start md:pt-40">
        {/* CTA Section */}
        <div className="pt-40 font-[900] font-primary lg:text-3xl text-2xl z-[2] flex flex-col px-10 ">
          <div className="pb-10">
            <h2> Hi,</h2>
            <h2> I am Razvan,</h2>
            <h2 className="text-colorLightBlue"> Frontend Developer</h2>
          </div>

          <Link
            to="/resume"
            className="bg-colorAccentBlue p-2 rounded-xl drop-shadow-2xl text-center"
          >
            View Resume
          </Link>
        </div>

        {/* Profile photo */}
        <img
          src={profilePhoto}
          alt="profile"
          className="grayscale z-[2] lg:max-w-lg max-w-sm self-end"
        ></img>
      </div>

      {/* Blob animated background */}
      <svg viewBox="-300 -70 400 400" className="absolute top-0 z-[1]">
        <path
          className="animate-blob fill-colorAccentBlue dark:fill-colorLightBlue blur-xs"
          d="M56.5,-67.6C72.2,-54.3,83,-35.4,83.1,-17.3C83.2,0.9,72.5,18.3,60.6,31.4C48.8,44.5,35.7,53.4,20.2,61.8C4.6,70.3,-13.4,78.4,-31,76C-48.6,73.6,-65.7,60.7,-72,44.3C-78.2,27.8,-73.6,7.8,-70.5,-12.9C-67.4,-33.6,-65.7,-55,-54.2,-69C-42.7,-83.1,-21.4,-89.8,-0.5,-89.2C20.5,-88.7,40.9,-80.9,56.5,-67.6Z"
        />
      </svg>
    </section>
  );
};

export default About;
