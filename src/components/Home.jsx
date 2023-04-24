import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600'>Hi,my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Thomas Thabethe</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Full Stack Developer.</h2>

            <p className='text-[#8892b0] py-4 max-w-[700px]'>
                I'm a full-stack Developer specializing in building (and occassionally
                designing)   excepetional digital experiences. Currently, I'm focused on
                building responsive full-stack web applications.
            </p>

            <p className='text-[#ccd6f6] py-4 max-w-[700px] leading-relaxed'>
              I want to be a software developer At SovTech because I would have the opportunity
              to work on different projects, learn new skills, and contribute to the development of innovative solutions.
              I would be part of a team that values creativity, collaboration, and continuous improvement, 
              and I would have access to various training programs and resources to enhance my skills.
              Moreover, SovTech values a culture of diversity, equity, and inclusion, creating an environment 
              where all team members can thrive and grow professionally.
            </p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                <Link  to="work" smooth={true}  duration={500}>
          View Work
        </Link>
                <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3 ' />
                </span>
          </button>
            </div>

        </div>

    </div>
  )
}

export default Home