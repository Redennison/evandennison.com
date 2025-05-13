import React from 'react'
import NodeMessage from '../assets/node-ify.png'
import ChemCam from '../assets/chemcam.png'
import BasketBuddy from '../assets/basket-buddy-image.png'
import TutorCentre from '../assets/tutorcentre.jpeg'

const Work = () => {
  return (
    <div name='work' className='w-full text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[800px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Projects</p>
                <p className='py-6'>Check out some of my recent projects.</p>
            </div>

            {/* Container */}
            <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-4'>

                {/* Grid Item */}
                <div style={{backgroundImage: `url(${BasketBuddy})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='pb-2 text-2xl font-bold text-white tracking-wider flex justify-center'>
                            Basket Buddy
                        </span>
                        <span className='mx-4 text-sm font-bold text-white tracking-wider flex justify-center'>
                        Real-time basketball shot-tracking app built with React Native, Python, and Raspberry Pi. It processes sensor data in real-time via a Flask and MongoDB backend, providing shooting stats and progress tracking with an interactive calendar.
                        </span>
                        <div className='pt-2 text-center'>
                            <a target="_blank" rel="noreferrer" href="https://github.com/Redennison/Basket-Buddy">
                                <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${NodeMessage})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='pb-2 text-2xl font-bold text-white tracking-wider flex justify-center'>
                            Node-ify
                        </span>
                        <span className='mx-4 text-sm font-bold text-white tracking-wider flex justify-center'>
                        Full-stack emergency messaging platform built with Node.js, MongoDB, and Twilio. Includes secure JWT authentication, user management, and the ability to send targeted SMS alerts to custom contact groups.
                        </span>
                        <div className='pt-2 text-center'>
                            <a target="_blank" rel="noreferrer" href="https://github.com/Redennison/SMS-Application">
                                <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${ChemCam})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='pb-2 text-2xl font-bold text-white tracking-wider flex justify-center'>
                            ChemCam
                        </span>
                        <span className='mx-4 text-sm font-bold text-white tracking-wider flex justify-center'>
                        Flask web app that converts chemical names to formulas using both text and image input, featuring OCR with Tesseract, a clean UI, and built-in help and history tools.
                        </span>
                        <div className='pt-2 text-center'>
                            <a target="_blank" rel="noreferrer" href="https://github.com/Redennison/ChemCam">
                                <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${TutorCentre})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='pb-2 text-2xl font-bold text-white tracking-wider flex justify-center'>
                            Tutor Centre
                        </span>
                        <span className='mx-4 text-sm font-bold text-white tracking-wider flex justify-center'>
                        Flask and MongoDB-based platform designed to connect students with tutors. Features filtering options, tutor self-listing, and a simple interface for discovery and outreach.
                        </span>
                        <div className='pt-2 text-center'>
                            <a target="_blank" rel="noreferrer" href="https://github.com/Redennison/Tutor-Centre">
                                <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work