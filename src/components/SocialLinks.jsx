import React from 'react'
import {FaGithub,FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from "react-icons/hi"
import {BsBorder, BsFillPersonLinesFill} from 'react-icons/bs'


const SocialLinks = () => {

    const links=[
        {
            id:1,
            child:(
                <>
                LinkedIn <FaLinkedin size={30}/>
               </>
            ),
            href:'https://www.linkedin.com/in/pranay-jadhao-b322b7259/',
            style:'rounded-tr-md'
        },
        {
            id:2,
            child:(
                <>
                GitHub <FaGithub size={30}/>
               </>
            ),
            href:'https://github.com/PranayJadhao',

        },
        {
            id:3,
            child:(
                <>
                Gmail <HiOutlineMail size={30}/>
               </>
            ),
            href:'mailto:pranayjadhao95@gmail.com',
           
        },
        {
            id:4,
            child:(
                <>
                Resume <BsFillPersonLinesFill size={30}/>
               </>
            ),
           style:'roundded-br-md',
           href:'/Pranay_Jadhao_Resume',
           download:true,

           
        }
    ]

  return (
 
    <div >
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <button
            key={id}
          className={
            "justify-center items-center "
          }
          >
            <a
              href={href}
              className="flex justify-center items-center w-full text-white gap-3 pr-10 mb-5"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </button>
        ))}
      </ul>
    </div>
   
  )
}

export default SocialLinks;