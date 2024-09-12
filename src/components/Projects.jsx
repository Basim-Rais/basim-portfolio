import React from 'react'
import amazonClone from "../assets/Projects/amazonClone.png";
import eCommerce from "../assets/Projects/eCommerce.png"
import musicWebsite from "../assets/Projects/musicWebsite.png"
import tictactoeGame from "../assets/Projects/tictactoeGame.png"
import universitywebsite from "../assets/Projects/universitywebsite.png"

const Projects = () => {

  const myProjects = [
    {
      id: 1,
      src: amazonClone,
      name:"Amazon Clone",
      demo:"https://amazon-clone-by-basim.netlify.app/",
      code:"https://github.com/Basim-Rais/Amazon-Clone"
    },
    {
      id: 2,
      src: eCommerce,
      name:"E-Commerce Website",
      demo:"https://e-commerce-website-by-basim.netlify.app/",
      code:"https://github.com/Basim-Rais/E-Commerce-Website"
    },
    {
      id: 3,
      src: musicWebsite,
      name:"Music Website",
      demo:"https://music-website-by-b.netlify.app/",
      code:"https://github.com/Basim-Rais/Music-Website"
    },
    {
      id: 4,
      src: tictactoeGame,
      name:"Tic Tac Toe Game",
      demo:"https://tic-tac-toe-web-b.netlify.app/",
      code:"https://github.com/Basim-Rais/Tic-Tac-Toe-Game"
    },
    {
      id: 5,
      src: universitywebsite,
      name:"University Website",
      demo:"https://university-website-by-basim.netlify.app/",
      code:"https://github.com/Basim-Rais/University-Website"
      
    }
  ]


  return (
    <div name='Projects' className='bg-gradient-to-b from-black to-gray-800 text-white w-full md:h-full'>

      <div className='max-w-screen-lg w-full h-full  flex flex-col justify-center p-4 mx-auto '>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
          <p className='py-6'>Check out some of my work right here</p>
        </div>


        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

          {
            myProjects.map(({ id, src, name,demo, code }) => (
              <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img className='rounded-md hover:scale-105 duration-300' src={src} alt="" />
                <div className='flex justify-center items-center flex-col'>
                <div className='pt-5'>
                  <p className='text-xl font-semibold'>{name}</p>
                </div>
                  <div className='flex flex-row'>
                  <button className='w-full py-3 m-4 px-6 duration-200 hover:scale-105' onClick={()=> window.open(demo, "_blank")}>Demo</button>
                  <button className='w-full py-3 m-4 px-6 duration-200 hover:scale-105' onClick={()=> window.open(code, "_blank")} >Code</button>
                  </div>
                </div>
              </div>
            ))
          }



        </div>


      </div>

    </div>
  )
}

export default Projects;
