import profilePhoto from "../assets/images/profile-photo.png";

const About = () => {
  return (
    <section className="flex justify-between items-center pt-20">
      <img
        src={profilePhoto}
        alt="profile photo"
        className="hue-rotate-180 object-scale-down h-screen"
      ></img>
      <svg viewBox="10 20 50 100" className="absolute bottom-0 z-[-1]">
        <path
          fill="#FF0066"
          d="M44.3,-61.1C55.6,-52.8,61.6,-37.4,66.8,-21.6C72.1,-5.9,76.5,10.2,74.2,26.3C72,42.4,63.1,58.4,49.6,66.3C36.1,74.1,18,73.7,3.9,68.3C-10.3,62.9,-20.5,52.6,-28.4,43C-36.3,33.3,-41.8,24.4,-38.1,16.8C-34.4,9.3,-21.4,3.3,-20.6,-9.1C-19.9,-21.4,-31.3,-40.1,-29.9,-51.6C-28.5,-63.1,-14.2,-67.3,1.1,-68.9C16.5,-70.5,33.1,-69.4,44.3,-61.1Z"
          transform="translate(50 100)"
        />
      </svg>
      <h2
        className="font-[900] font-primary text-4xl absolute right-20 top-60"
        id="aboutSection"
      >
        Hi, I am Razvan,
        <br />
        Frontend Developer
      </h2>
    </section>
  );
};

export default About;
