import React from 'react'
import LifeSaver from '../assets/lifesaver.jpeg'
import NodeMessage from '../assets/nodemessage.jpeg'
import TutorCentre from '../assets/tutorcentre.jpeg'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
                <p className='py-6'>Check out some of my recent projects.</p>
            </div>

            {/* Container */}
            <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-4'>

                {/* Grid Item */}
                <div style={{backgroundImage: `url(${LifeSaver})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='pb-2 text-2xl font-bold text-white tracking-wider flex justify-center'>
                            Life Saver
                        </span>
                        <span className='mx-4 text-2sm font-bold text-white tracking-wider flex justify-center'>
                        Life Saver allows quick access to treatments for a variety of injuries & diagnoses. Provides users with treatments based on inputted injuries. <br></br>Technologies: JavaScript
                        </span>
                        <div className='pt-2 text-center'>
                            <a target="_blank" rel="noreferrer" href="https://life-saver.herokuapp.com/">
                                <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://github.com/Redennison/Life-Saver">
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
                            Node Message
                        </span>
                        <span className='mx-4 text-2sm font-bold text-white tracking-wider flex justify-center'>
                        This application allows users to create, delete, edit, and send text messages to lists of people at one time. The app also has registration and sign in to save data to each user.<br></br>Technologies: Node.js, MongoDB, Twilio
                        </span>
                        <div className='pt-2 text-center'>
                            <a target="_blank" rel="noreferrer" href="https://multi-sms-application.herokuapp.com/register">
                                <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://github.com/Redennison/SMS-Application">
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
                        <span className='mx-4 text-2sm font-bold text-white tracking-wider flex justify-center'>
                        Tutor Center is an app which allows users to register, login, and filter tutors based on the grade and subject they teach. It also allows users to become a listed tutor on the website, as well as write reviews on tutors.<br></br>Technologies: Flask/Python, MongoDB
                        </span>
                        <div className='pt-2 text-center'>
                            <a target="_blank" rel="noreferrer" href="https://tutor-center.herokuapp.com/register">
                                <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
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