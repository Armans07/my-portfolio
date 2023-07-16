import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Marquee from 'react-fast-marquee';
import html from '../../../../public/html.png'
import css from '../../../../public/css.png'
import bootstrap from '../../../../public/bootstrap.png'
import tailwind from '../../../../public/tailwind.png'
import javaScript from '../../../../public/javascript.png'
import nodeJS from '../../../../public/nodeJS.png'
import mongoDB from '../../../../public/mongoDB.png'

const Skills = () => {
    return (
        <div className=''>
            <Fade>
                <h2 className='text-center text-3xl mb-2 mt-5 font-extrabold text-slate-600 '>My <span className='text-sky-500'>skills</span></h2>
                <hr className='w-48 border-2 mx-auto rounded-lg bg-slate-500' />
            </Fade>
            <div>
                <Marquee>
                    <div className='flex gap-20 align-middle justify-center mt-5'>
                        <div>
                            <img className='' src={html} alt="" />
                            <h2 className='text-center'>html</h2>
                        </div>
                        <div>
                            <img src={css} alt="" />
                            <h2 className='text-center'>css</h2>
                        </div>
                        <div className=''>
                            <img src={bootstrap} alt="" />
                            <h2>bootstrap</h2>
                        </div>
                        <div>
                            <img src={tailwind} alt="" />
                            <h2>tailwind</h2>
                        </div>
                        <div>
                            <img src={javaScript} alt="" />
                            <h2>javaScript</h2>
                        </div>
                        <div>
                            <img src={nodeJS} alt="" />
                            <h2>nodeJS</h2>
                        </div>
                        <div>
                            <img src={mongoDB} alt="" />
                            <h2>mongoDB</h2>
                        </div>
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default Skills;