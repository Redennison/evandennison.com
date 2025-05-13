import React, {useState} from 'react'
import bikeImage from '../assets/bikeimage.JPG'

const About = () => {
  const fullText = 
`Software engineering student at the University of Waterloo. Passionate about Backend Engineering and applied AI/ML.`
  return (
    <div name='about' className='w-full bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
            </div>
            <div className='max-w-[800px] w-full px-4 grid grid-cols-1 gap-8'>
                <div className='flex items-center justify-center text-4xl font-bold'>
                    <img src={bikeImage} alt="" className="max-w-[500px] w-full" />
                </div>
                <div>
                    <div className="flex items-center text-lg">
                        <p style={{ whiteSpace: 'pre-wrap' }}>{fullText}</p>
                    </div>
                </div>
            </div> 
        </div>
    </div>
  )
}

export default About