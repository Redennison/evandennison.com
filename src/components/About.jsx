import React, {useState} from 'react'
import bikeImage from '../assets/bikeimage.JPG'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdOutlineWavingHand } from "react-icons/md";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const fullText = 
`👋 I'm a software engineering student at the University of Waterloo, passionate about Artificial Intelligence, Machine Learning and Full Stack development. Alongside my studies, I enjoy working out, skiing, and spending time with friends.
  
🎉 Here are some of my achievements:

📈 2nd Place @ Milwaukee Bucks Business Analytics Hackathon - March 2024
🥇 Governer General's Academic Medal - June 2023
☁️ 6th Place @ Hack the Cloud 2.0 - July 2021
💻 Honourable Mention @ OHacksIO - Sept. 2021`
  return (
    <div name='about' className='w-full bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
            </div>
            <div className='max-w-[700px] w-full px-4 grid grid-cols-1 gap-8'>
                <div className='flex items-center justify-center text-4xl font-bold'>
                    <img src={bikeImage} alt="" className="max-w-[500px] w-full" />
                </div>
                <div>
                <div className="flex items-center text-lg">
                <p style={{ whiteSpace: 'pre-wrap' }}>{isExpanded ? (fullText) : (`${fullText.substring(0, 240)}...`)}</p>
                </div>
                <div className="flex justify-center">
                    <button onClick={() => setIsExpanded(!isExpanded)}>
                        <div className="pt-8 flex justify-center items-center font-bold">
                            <p className="pr-2">{isExpanded ? 'See Less' : 'See More'}</p>
                            {isExpanded ? <IoIosArrowUp /> : <IoIosArrowDown />}
                        </div>
                    </button>
                </div>
                </div>
            </div> 
        </div>
    </div>
  )
}

export default About