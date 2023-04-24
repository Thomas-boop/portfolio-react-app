import React from 'react'

import HTML from '../assets/html.png'
import JavaScript from '../assets/JavaScript.png'
import Css from '../assets/Css.png'
import Java from '../assets/Java.png'
import development from '../assets/development.png'
import  react from '../assets/react.png'
import firebase from '../assets/firebase.png'
import git from '../assets/git.png'



const Skills = () => {
  return (
    <div name = 'skills' className='w-full h-screen bg-[#0a192f]  text-gray-300 '>
        {/*  Container */}
        <div className='max-w-[1000px] mx-auto p-4  flex flex-col justify justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300 '>Skills</p>
                <p className='py-4'>// These are some of the techologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto'  src={HTML} alt="Html logo" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto'  src={Css} alt="CSS logo" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto'  src={JavaScript} alt="JavaScript logo" />
                    <p className='my-4'>JAVASCRIPT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto'  src={Java} alt="Java logo" />
                    <p className='my-4'>Java</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto'  src={development} alt="Flutter logo" />
                    <p className='my-4'>Flutter</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto'  src={react} alt="React logo" />
                    <p className='my-4'>REACT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto'  src={firebase} alt="Firebase logo" />
                    <p className='my-4'>FIREBASE</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto'  src={git} alt="GIT logo" />
                    <p className='my-4'>GIT</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills