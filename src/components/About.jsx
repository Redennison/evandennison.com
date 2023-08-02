import React from 'react'
import bikeImage from '../assets/bikeimage.JPG'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
                <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <img src={bikeImage} alt="" />
                </div>
                <div className="flex items-center">
                    <p>
I'm a software engineering student at the University of Waterloo, passionate about technology and programming. Alongside my studies, I enjoy working out, skiing, and spending time with friends. Balancing my academic pursuits with an active lifestyle and social connections fuels my personal growth and prepares me for a successful future in software engineering.</p>
                </div>
            </div> 
        </div>
    </div>
  )
}

export default About