import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setnav] = useState(false);

  const links = [
    {
      id: 1,
      link: "Home"
    },

    {
      id: 2,
      link: "About"
    },

    {
      id: 3,
      link: "Projects"
    },

    {
      id: 4,
      link: "Skills"
    },

    {
      id: 5,
      link: "Contact"
    }
  ]
  return (
    <>
      <nav className='bg-black text-white w-full flex justify-between items-center h-20' >
        <div>
          <h1 className='text-5xl font-signature px-4 ml-2'>Basim</h1>
        </div>

        <ul className='hidden md:flex'>
          {
            links.map(({id, link }) => (
              <li key={id} className='font-medium px-4 cursor-pointer capitalize text-gray-400 hover:scale-105 duration-200 '>
              <Link to={link} smooth duration={500}>{link}</Link>
              </li>
            ))
          }
        </ul>

        <div onClick={() => { setnav(!nav) }} className='pr-4 cursor-pointer text-gray-500 z-10 md:hidden'>
          {
            nav ? <FaTimes size={30} /> : <FaBars size={30} />
          }
        </div>

        {
          nav && (
            <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 '>
             
            {
            links.map(({ id, link }) => (
              <li key={id} className='px-4 py-6 cursor-pointer capatilize text-4xl'>
                <Link onClick={()=> setnav(!nav) } to={link} smooth duration={500}>{link}</Link>
              </li>
            ))
          }
          </ul>
          )
        }


      </nav>
    </>
  );
}
export default Navbar;
