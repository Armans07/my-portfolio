/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
import React, { useRef } from "react";
import { Slide, Zoom } from "react-awesome-reveal";
import { BsTelegram } from "react-icons/bs";

const ContactMe = () => {


  return (
    <section id="contact" className=" mx-auto md:px-6 p-2">
        <div className="flex flex-col lg:flex-row">
          <div
            className="w-[480px] flex-1 justify-start items-center"
          >
            < Slide>
              <h4 className="text-slate-600 text-2xl uppercase font-semibold mb-2 tracking-wide">
                Get In Touch
              </h4></Slide>
            <Zoom>
            <h2 className="text-[40px] lg:text-[80px] leading-none mb-12 font-medium text-sky-500">
              Let's Work <br />
              <span className="text-slate-600">Together!</span>
            </h2>
            </Zoom>
          </div>
          <form

            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
          >
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              className="bg-transparent border-b py-3 outline-none w-full focus:border-cyan-500 transition duration-200"
            />
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              className="bg-transparent border-b py-3 outline-none w-full focus:border-cyan-500 transition-all"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="bg-transparent border-b py-3 outline-none w-full focus:border-cyan-500 transition-all resize-none mb-12"
            ></textarea>
            <button type="submit" className="btn-main flex items-center gap-2">
              <BsTelegram className="hover:animate-bounce" />
              Send Message
            </button>
          </form>
        </div>
      
    </section>
  );
};

export default ContactMe;