import React from 'react'
import Basim from "../assets/Basim.png"
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-scroll";


const Home = () => {
   const  Resume =[
    {
        id:1,
        href :"Basim_Resume.pdf",
        download:true,
        
    }
   ]
    return (
        <>
            <div name="Home" className='w-full h-screen bg-gradient-to-b from-black via-black to-gray-800'>
                <div className=' max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row pt-16 md:pt-24'>
                    <div className='mt-4 flex flex-col justify-center   h-full' >
                        <h2 className='text-4xl sm:text-7xl font-bold text-white bold'>I'm a Frontend Developer</h2>
                        <p className='py-4 max-w-md text-gray-500 '>I love to work on web application using technologies like React, Tailwind, HTML, CSS and Javascript</p>

                        <div >

                            <Link to="Projects" smooth duration={300} className='group py-3 px-6 w-fit text-white items-center bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md flex i cursor-pointer' >
                                Projects
                                <span className='ml-2 group-hover:rotate-90 transition'><FaArrowRight size={15} /></span>
                            </Link>
                            {
                                Resume.map(({id, href, download})=>(
                                    <a 
                                    href={href}
                                     key={id} 
                                     target="_blank"
                                     download={download}
                                      className='group py-3 px-6 w-fit text-white items-center bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md flex i cursor-pointer'>Resume
                                        <span className='ml-2 group-hover:rotate-90 transition'><BsFillPersonLinesFill size={15} /></span>
                                      </a>
                                ))
                            }
                        </div>

                    </div>

                    <div  className='pt-12 md:pt-0'>
                        <img src={Basim} alt="my profile" className='rounded-2xl w-2/3 sm:w-2/3 md:w-2/3 mx-auto' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
