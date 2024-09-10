import React from 'react'
import LifeSaver from '../assets/lifesaver.jpeg'
import NodeMessage from '../assets/nodemessage.jpeg'
import TutorCentre from '../assets/tutorcentre.jpeg'
import ChemCam from '../assets/chemcam.png'
import DeriveFX from '../assets/derivefx.png'
import BasketBuddy from '../assets/basket-buddy-image.png'

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
                        This project is a basketball shot tracking system using a Raspberry Pi and sensors, paired with a mobile app. It provides instant shot statistics and progress tracking in a user-friendly format.
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
                        A Node.js and MongoDB-based application designed to facilitate bulk text message transmission using Twilio.
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
                        A Flask-based website that employs advanced algorithms to retrieve chemical formulas based on user-inputted formula names, which can be provided either through textual input or uploaded as images.
                        </span>
                        <div className='pt-2 text-center'>
                            <a target="_blank" rel="noreferrer" href="https://youtu.be/LJfloeurg60">
                                <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://github.com/Redennison/ChemCam">
                                <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${DeriveFX})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='pb-2 text-2xl font-bold text-white tracking-wider flex justify-center'>
                            DeriveFX
                        </span>
                        <span className='mx-4 text-sm font-bold text-white tracking-wider flex justify-center'>
                        A JavaFX application that offers a comprehensive graphical and algebraic representation of function derivatives based on user-provided input.
                        </span>
                        <div className='pt-2 text-center'>
                            <a target="_blank" rel="noreferrer" href="https://youtu.be/i_vfXLsiKcQ">
                                <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://github.com/Redennison/DeriveFX">
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