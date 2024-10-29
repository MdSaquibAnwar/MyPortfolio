import React from 'react'
import Aboutimage from '../assets/About-me.jpeg'

const About = () => {
  return (
    <div className='bg-black text-white py-20 ' id='AboutMe'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>About Me </h2>
        <div className='flex flex-col md:flex-row items-center md space-x-12'>
            <img src={Aboutimage} alt="" className='w-80 h-100 rounded object-cover mb-8 mb:mb-0' />
            <div className='flex-1'>
                <p className='text-lg mb-8'>
                    I am a passionate full-stack devloper witg a focus on building modern and responsive
                    web appliction .with a strong foundation  in both frontend and back end technologoes, 
                    I strive to create seamless and effcient user experince
                </p>
                <div className='space-y-4'>
                   <div className='flex items-center'>
                       <label htmlFor='htmlandcss' className='w-2/12'>
                        HTML & CSS
                       </label>
                       <div className='grow bg-gray-800 rounded-full h-2.5'>
                          <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                          transform transition-transform duration-300 hover:scale-105 w-10/12'>

                          </div>
                       </div>

                   </div>
                   <div className='flex items-center'>
                       <label htmlFor='htmlandcss' className='w-2/12'>
                        React js
                       </label>
                       <div className='grow bg-gray-800 rounded-full h-2.5'>
                          <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                          transform transition-transform duration-300 hover:scale-105 w-11/12'>

                          </div>
                       </div>

                   </div>
                   <div className='flex items-center'>
                       <label htmlFor='htmlandcss' className='w-2/12'>
                        node js
                       </label>
                       <div className='grow bg-gray-800 rounded-full h-2.5'>
                          <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                          transform transition-transform duration-300 hover:scale-105 w-9/12'>

                          </div>
                       </div>

                   </div>

                </div>
                <div className='mt-12 flex justify-between text-center'>
                     <div>
                        <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                           1
                        </h3>
                        <p>Month of Experince </p>
                     </div>
                     <div>
                        <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                           10+
                        </h3>
                        <p>Projects Completed </p>
                     </div>
                     <div>
                        <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                           5+
                        </h3>
                        <p>Happy clients </p>
                     </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
