
import React from 'react';
import bannerImg from '../../../public/banner (2).png'
import { TypeAnimation } from 'react-type-animation';
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { BiDownArrow } from 'react-icons/bi';

const Banner = () => {
    return (
       
        <div className="flex flex-col md:flex-row justify-center md:gap-20 items-center">
        <div className="md:order-2">
          <img src={bannerImg} alt="" className="h-96 mt-20" />
        </div>
        <div className="md:order-1 text-center md:text-left mt-5">
          <p className="text-slate-600">Hey Assalamu Alaikum I'm</p>
          <h2 className="text-4xl font-extrabold text-sky-500 my-2">
            Muhammad Arman Sikder
          </h2>
  
          <div className="text-slate-600 text-xl my-2 font-semibold">
            <span>I'm A </span>
            <TypeAnimation
              sequence={[
                'Mern stack developer',
                1000,
                'Font End Developer',
                1000,
                'React JS Developer',
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '1em', display: 'inline-block' }}
              repeat={Infinity}
            />
          </div>
          <div className="flex flex-wrap justify-center md:justify-start gap-5 my-2">
            <a
              className="hover:scale-150 "
              href="https://github.com/Armans07"
            >
              <BsGithub></BsGithub>{' '}
            </a>
            <a
              className="hover:scale-150"
              href="https://www.facebook.com/sikder89098/"
            >
              <BsFacebook></BsFacebook>
            </a>
            <a
              className="hover:scale-150 "
              href="https://www.instagram.com/mr.angry1416/"
            >
              <BsInstagram></BsInstagram>
            </a>
            <a
              className="hover:scale-150 "
              href="https://www.linkedin.com/in/arman-sikder-71a736184/"
            >
              <BsLinkedin></BsLinkedin>
            </a>
          </div>
          <a href="https://drive.google.com/drive/u/0/search?q=resume">
            <button className="btn border-4 rounded-3xl border-sky-500 text-slate-600 mt-1">
              Resume <BiDownArrow></BiDownArrow>
            </button>
          </a>
        </div>
      </div>
    );
};

export default Banner;
