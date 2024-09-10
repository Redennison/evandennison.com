import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { RiPagesLine } from "react-icons/ri";
import {Link} from 'react-scroll'
import {FaGithub, FaLinkedin } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Evan Dennison</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>Software Engineering student at UWaterloo.</h2>
            <div className="flex items-center py-4">
              <a className='text-gray-300 pr-4' target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/evan-dennison">
                <FaLinkedin size={50} />
              </a>
              <a className='text-gray-300 pr-4' target="_blank" rel="noreferrer" href="https://www.github.com/Redennison">
                  <FaGithub size={50} />
              </a>
              <a className='text-gray-300' target="_blank" rel="noreferrer" href="https://mail.google.com/mail/?view=cm&fs=1&to=evan@dennisons.ca">
                  <HiOutlineMail size={50} />
              </a>
            </div>
            <div className='flex align-items-center'>
              <Link className="pr-2" to="work" smooth={true} duration={500} offset={-80}>
                <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
                  View Projects 
                <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3'/>
                </span>
                </button>
              </Link>
              <a target="_blank" rel="noreferrer" className="mx-2 text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#8892b0] hover:border-[#8892b0]" href="https://drive.google.com/file/d/1yrHLBLAPEFCvuMgbqbrnLcMEJKi4P9rP/view?usp=sharing">
                Download CV 
                <span>
                  <RiPagesLine className='ml-3'/>
                </span>
              </a>
            </div>
        </div>
    </div>
  )
}

export default Home