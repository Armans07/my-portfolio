

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeChange from '../DarkLightMood/ThemeChange';
import logo from '../../public/logo.png'
import './Navbar.css'
import { BsBriefcase, BsChatSquareText, BsClipboardData } from "react-icons/bs";
import { BiHomeAlt, BiUser} from "react-icons/bi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className=" fixed w-full max-w-screen-xl  bg-opacity-30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex space-x-4">
              <div className='flex'>
                <Link
                  to="/"
                  className="flex items-center py-4 px-2 text-gray-100 hover:text-white"
                >
                  <img className="h-8 w-6 mr-2" src={logo} alt="" />
                  <span className='text-sky-500 uppercase font-semibold'>rman</span>
                </Link>
              </div>
              <div className="hidden md:flex items-center space-x-1">
                <Link
                  to="/skills"
                  className="py-4 px-2 text-gray-100 hover:text-white"
                >
                  <span className='text-sky-500 font-semibold'>Skills</span>
                </Link>
                <Link
                  to="/projects"
                  className="py-4 px-2 text-gray-100 hover:text-white"
                >
                 <span className='text-sky-500 font-semibold'>Projects</span>
                </Link>
                <Link
                  to="/projects"
                  className="py-4 px-2 text-gray-100 hover:text-white"
                >
                  <span className='text-sky-500 font-semibold'>Resume</span>
                </Link>
                <Link
                  to="/contact"
                  className="py-4 px-2 text-gray-100 hover:text-white"
                >
                 <span className='text-sky-500 font-semibold'>Contact</span>
                </Link>
              </div>
            </div>
            
            <span className='text-sky-500'><ThemeChange /></span>
            {/* <button
              className="md:hidden"
              onClick={toggleNavbar} 
              aria-label="Toggle mobile menu"
            >
              <svg
                className="h-6 w-6 fill-current text-sky-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button> */}
          </div>
          {/* {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  to="/skills"
                  className="block py-2 px-4 text-sky-500"
                >
                  Skills
                </Link>
                <Link
                  to="/projects"
                  className="block py-2 px-4 text-sky-500 "
                >
                  Projects
                </Link>
                <Link
                  to="/projects"
                  className="block py-2 px-4 text-sky-500 "
                >
                  Resume
                </Link>
                <Link
                  to="/contact"
                  className="block py-2 px-4 text-sky-500 "
                >
                  Contact
                </Link>
              </div>
            </div>
          )} */}
        </div>
      </nav>
      {/* <nav className="fixed bottom-4 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="w-full bg-sky-600 h-[70px] backdrop-blur-1xl rounded-full max-w-[460px] mx-auto flex justify-between items-center text-2xl text-slate-600 font-extrabold">
        <Link
          to="/"
          activeClass="active"
          smooth={true}
          spy={true}
          offset={-200}
          className="hover:scale-125 cursor-pointer w-[60px] h-[60px] flex items-center justify-center nav-hover"
        >
          <BiHomeAlt />
        </Link>
        <Link
          to="services"
          activeClass="active"
          smooth={true}
          spy={true}
          className="hover:scale-125 cursor-pointer w-[60px] h-[60px] flex items-center justify-center nav-hover"
        >
          <BsBriefcase />
        </Link>
        <Link
          to="projects"
          activeClass="active"
          smooth={true}
          spy={true}
          className="hover:scale-125 cursor-pointer w-[60px] h-[60px] flex items-center justify-center nav-hover"
        >
          <BsClipboardData />
        </Link>
        <Link
          to="about"
          activeClass="active"
          smooth={true}
          spy={true}
          className="hover:scale-125 cursor-pointer w-[60px] h-[60px] flex items-center justify-center nav-hover"
        >
          <BiUser />
        </Link>
        <Link
          to="contact"
          activeClass="active"
          smooth={true}
          spy={true}
          className="hover:scale-125 cursor-pointer w-[60px] h-[60px] flex items-center justify-center nav-hover"
        >
          <BsChatSquareText />
        </Link>
      </div>
    </nav> */}
    <nav className="fixed bottom-4 lg:bottom-8 w-full overflow-hidden z-50 sm:hidden">
  <div className="w-72 h-[70px] backdrop-blur-sm rounded-full max-w-[460px] mx-auto flex justify-between items-center text-2xl text-slate-600 font-extrabold">
    <Link
      to="/"
      activeClass="active"
      smooth={true}
      spy={true}
      offset={-200}
      className="hover:scale-125 cursor-pointer w-[60px] h-[60px] flex items-center justify-center nav-hover"
    >
      <BiHomeAlt />
    </Link>
    <Link
      to="services"
      activeClass="active"
      smooth={true}
      spy={true}
      className="hover:scale-125 cursor-pointer w-[60px] h-[60px] flex items-center justify-center nav-hover"
    >
      <BsBriefcase />
    </Link>
    <Link
      to="projects"
      activeClass="active"
      smooth={true}
      spy={true}
      className="hover:scale-125 cursor-pointer w-[60px] h-[60px] flex items-center justify-center nav-hover"
    >
      <BsClipboardData />
    </Link>
    <Link
      to="about"
      activeClass="active"
      smooth={true}
      spy={true}
      className="hover:scale-125 cursor-pointer w-[60px] h-[60px] flex items-center justify-center nav-hover"
    >
      <BiUser />
    </Link>
    <Link
      to="contact"
      activeClass="active"
      smooth={true}
      spy={true}
      className="hover:scale-125 cursor-pointer w-[60px] h-[60px] flex items-center justify-center nav-hover"
    >
      <BsChatSquareText />
    </Link>
  </div>
</nav>

    </div>
  );
};

export default Navbar;
