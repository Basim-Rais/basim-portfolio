import React from 'react'

const About = () => {
  return (
    <div name='About' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 flex flex-col mx-auto justify-center w-full h-full'>
      <div className='pb-8'>
        <p className='border-b-4 inline text-4xl font-bold border-gray-500'>About</p>
      </div>
      
      <p className='text-xl mt-20'>
        CS student with a passion for development and design. i enjoy merging both discipline to craft impactful digital experiences
      </p>
      <br />

      <p className='text-xl'>
      My skills include attention to detail, creativity, and problem-solving, helping me build responsive and engaging user experiences.
      </p>
      </div>
    </div>
  )
}

export default About;
