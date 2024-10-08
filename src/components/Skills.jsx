import React from 'react'

import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import Node from '../assets/node.png'
import Mongo from '../assets/mongo.png'
import Python from '../assets/python.png'
import CPlusPlus from '../assets/c++.png'
import Sql from '../assets/sql.png'
import Graphql from '../assets/graphql.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full bg-[#0a192f] text-gray-300'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                <p className='py-4'>These are the technologies I've worked with.</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='pt-4 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="JS icon" />
                    <p className='my-4'>JAVASCRIPT</p>
                </div>   
                <div className='pt-4 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Node} alt="Node.js icon" />
                    <p className='my-4'>NODE JS</p>
                </div>
                <div className='pt-4 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Sql} alt="SQL icon" />
                    <p className='my-4'>SQL</p>
                </div>
                <div className='pt-4 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Graphql} alt="GraphQL icon" />
                    <p className='my-4'>GRAPHQL</p>
                </div>
                <div className='pt-4 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactImg} alt="React.js icon" />
                    <p className='my-4'>REACT JS</p>
                </div>
                <div className='pt-4 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Python} alt="Python icon" />
                    <p className='my-4'>PYTHON</p>
                </div>
                <div className='pt-4 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Mongo} alt="MongoDB icon" />
                    <p className='my-4'>MONGO DB</p>
                </div>
                <div className='pt-4 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CPlusPlus} alt="C++ icon" />
                    <p className='my-4'>C++</p>
                </div>
            </div>
        </div>
    </div>
  )
}
// DO 6 SKILLSSSSS

export default Skills