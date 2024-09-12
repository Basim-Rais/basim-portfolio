import React from 'react'
import html from "../assets/html.png"
import css from "../assets/css.png"
import javascript from "../assets/javascript.png"
import react from "../assets/react.png"
import tailwind from "../assets/tailwind.png"
import Bootstrap from "../assets/Bootstrap.png"
import github from "../assets/github.png"


const Skills = () => {


    const mySkils =[
        {
            id:1,
            src: html,
            title :"HTML",
            style :"shadow-orange-500"
        },
        {
            id:2,
            src: css,
            title :"CSS",
            style :"shadow-blue-500"
        },
        {
            id:3,
            src: javascript,
            title :"JavaScript",
            style :"shadow-yellow-500"
        },
        {
            id:4,
            src: react,
            title :"React JS",
            style :"shadow-sky-500"
        },
        {
            id:5,
            src: github,
            title :"Github",
            style :"shadow-gray-500"
        },
        {
            id:6,
            src: tailwind,
            title :"Tailwind",
            style :"shadow-purple-500"
        },
        {
            id:7,
            src: Bootstrap,
            title :"BootStrap",
            style :"shadow-white"
        },


    ]
  return (
    <div name='Skills' className='bg-gradient-to-b from-gray-800 to-black w-full h-full'>

    <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Skills</p>
            <p className='py-6'>These are Technologies I've work with</p>
        </div>
    

    <div className=' w-ful grid sm:grid-cols-3 grid-cols-2 gap-8 text-center py-8 px-12 sm:px-0'>

    {
        mySkils.map(({id, src, title, style  })=>(
            
        <div key={id} className={`shadow-md hover:scale-105 duration-500 rounded-lg py-2 ${style}`} >
            <img src={src} alt="" className='w-20 mx-auto' />
            <p className='mt-4'>{title}</p>
        </div> 
        ))
    }
    </div>
      
    </div>

    </div>
  )
}

export default Skills;
