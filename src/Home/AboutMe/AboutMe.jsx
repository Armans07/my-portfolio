import React from "react";
import { Bounce, Fade, Flip, JackInTheBox, Roll, Slide, Zoom } from "react-awesome-reveal";
import aboutImage from "../../../src/assets/about (2).png";

const AboutMe = () => {
  return (
    <div className="container mx-auto flex flex-col items-center mb-5 ">
     <div className="pb-2 mb-5">
     <Fade>
        <h2 className="text-center text-3xl mb-2 mt-5 font-extrabold text-slate-600">
          About <span className="text-sky-500">Me</span>
        </h2>
        <hr className="w-48 border-2 mx-auto rounded-lg bg-slate-500" />
      </Fade>
     </div>
      <JackInTheBox><img src={aboutImage} alt="Web Developer" className="w-54 h-48 mb-4" /></JackInTheBox>
     <Slide> <h1 className="text-2xl font-extrabold text-sky-500 mb-2">Muhammad Arman Sikder</h1></Slide>
      <Zoom>
      <p className="text-slate-600 font-bold text-lg mb-4">MERN Stack Web Developer</p>
      </Zoom>
     <Bounce>
     <p className="text-slate-600 text-center md:text-left font-bold">
        Hello, I'm a<span className="text-sky-500"> MERN stack web developer</span>. With a strong foundation in MongoDB, Express.js, React.js, and Node.js, I have honed my skills to create dynamic and responsive web applications. I enjoy working on both the frontend and backend, designing robust APIs, implementing efficient database structures, and crafting engaging user interfaces. With a keen eye for detail and a focus on delivering high-quality code, I strive to develop scalable and user-friendly web solutions. I am always eager to learn and stay updated with the latest web technologies to enhance my development capabilities. Through my expertise in the MERN stack, I aim to create impactful digital experiences that meet the unique needs of clients and users. Let's build something great together!
      </p>
     </Bounce>
      <div className="mt-4">
        <a
          href="https://github.com/Armans07"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-500 hover:text-indigo-700 transition-colors duration-300"
        >
          GitHub
        </a>
        <span className="mx-2">•</span>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-500 hover:text-indigo-700 transition-colors duration-300"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
