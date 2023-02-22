import React, { useState } from 'react'
import {FaBars,FaTimes} from "react-icons/fa"
import styled from  "styled-components"
import {Link} from "react-scroll"


const Navbar = () => {

  const [nav,setNav]=useState(false);

  const links=[
    {
      id:1,
      link:"home"
    },
    {
      id:2,
      link:'about'
    },
    {
      id:3,
      link:"projects"
    },
    {
      id:4,
      link:'skills'
    },
    {
      id:5,
      link:'Github Calender'
    },
    {
      id:6,
      link:'Github Stats'
    },
    {
      id:7,
      link:'contact'
    },

  ]


  return (
    <div >
        <div className='flex justify-between
             items-center 
             w-full h-20 px-4
              text-black
             bg-orange-600 fixed z-50'>
                 
                  <div>
                      <h1 className='text-5xl font-signature ml-2' >
                                PJ
                                  </h1>
                  </div>

                  <ul  className='hidden md:flex justify-center align-middle items-center'>

                    {
                      links.map(({link,id})=>(
                        <li key={id} className='px-4 cursor-pointer capitalize font-medium text-black-500 hover:scale-105 duration-200'>
                        <Link to={link} smooth duration={500}>{link}</Link>
                        </li>
                      ))
                    }
                    <div className='flex gap-5' onClick={()=>window.open("https://drive.google.com/file/d/1YM226Fgqz5KorDpLFbBG7X5HXJuaMRne/view?usp=sharing")}>
               <button  className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-rfrom bg-orange-500 to-orange-300'>
                  <a href='Pranay_Jadhao_Resume.pdf' 
                   download={true}
                        target="_blank"
                        rel="noreferrer">
                        
                 Resume
                        <span className='justify-center'>
                       
                        </span>
                  </a>
                   
                </button>

              

               
               </div>
                  </ul>

                  <div onClick={()=>setNav(!nav)} className='cursor-pointer pr-4 z-10 text-black md:hidden'>
                   { nav ? <FaTimes size={30}/> :  <FaBars size={30}/>}
                  </div>

                  {
                    nav && (
                      <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-orange-200 to-orange-400 '>
                      {
                      links.map(({link,id})=>(
                        <li key={id} className='px-4 cursor-pointer capitalize font-medium text-black-500 hover:scale-105 duration-200'>
                        <Link onClick={()=>setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
                        </li>
                      ))
                    }
                  </ul>
                

                    )
                  }

                 
           
        </div>
    </div>
  )
}

export default Navbar;




