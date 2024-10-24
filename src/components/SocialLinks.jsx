import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {BsFillPersonLinesFill} from "react-icons/bs";
import {HiOutlineMail} from "react-icons/hi";


const SocialLinks = () => {

    const links=[
        {
            id:1,
            child:(
                <>
                Linkedin<FaLinkedin  size={30}/>
                </>
            ),
            href:"http://linkedin.com/in/BasimRais",
            style:'rounded-tr-md'
        },
        {
            id:2,
            child:(
                <>
                Github<FaGithub  size={30}/>
                </>
            ),
            href:"https://github.com/Basim-Rais",
          
        },
        {
            id:3,
            child:(
                <>
                Mail<HiOutlineMail  size={30}/>
                </>
            ),
            href:"mailto:basimraees263@gmail.com",
            
        },
        {
            id:4,
            child:(
                <>
                Resume<BsFillPersonLinesFill size={30}/>
                </>
            ),
            href: "/Basim.Rais.pdf",
            style:'rounded-br-md',
            download:true,
            
        }
    ]
  return (

      <div className='hidden lg:flex  flex-col top-[35%] left-0 fixed'>
        <ul>

        {
            links.map(({id, href, child, style, download})=>(
                <li key={id} 
                className={`h-14 w-40 bg-gray-500 flex justify-between items-center px-4 ml-[-100px] hover:rounded-md hover:ml-[-18px] duration-300 ${style}`}>
                <a 
                href={href}
                className='flex items-center justify-between w-full text-white ml-3' 
                download={download}
                target='_blank'
                rel="noreferrer" 
                >
                {child}
                </a>
            </li>
            ))
        }
            
        </ul>
      </div>

  );
};

export default SocialLinks;
