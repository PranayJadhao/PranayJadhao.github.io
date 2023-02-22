import React from 'react'
import html from "../assects/html.png"
import css from "../assects/css.png"
import javascript from "../assects/javascript.png"
import reactImage from "../assects/react.png"
import github from "../assects/github.png"
import tailwind from "../assects/tailwind.png"
import redux from "../assects/redux.png"
import chakra from "../assects/chakra.jpg"



const Skills = () => {

    const skillsArray=[
    
        {
            id:1,
            src:html,
            title:"HTML",
            style:'shadow-black'
        },
        {
            id:2,
            src:css,
            title:"CSS",
            style:'shadow-black'
        },
        {
            id:3,
            src:javascript,
            title:"JavaScript",
            style:'shadow-black'
        },
        {
            id:4,
            src:reactImage,
            title:"React",
            style:'shadow-black'
        },
        {
            id:5,
            src:tailwind,
            title:"Tailwind",
            style:'shadow-black'
        },
        {
            id:6,
            src:github,
            title:"GitHub",
            style:'shadow-black'
        },
        {
            id:7,
            src:redux,
            title:"Redux",
            style:'shadow-black'
        },
     
        {
            id:8,
            src:chakra,
            title:"Chakra UI",
            style:'shadow-black'
        },
        {
            id:9,
            src:"https://w7.pngwing.com/pngs/512/824/png-transparent-visual-studio-code-hd-logo-thumbnail.png",
            title:"VS Code",
            style:'shadow-black'
        }
    ]



  return (
    <div name='skills' className='bg-zinc-500 md:h-screen '>

        <div  className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
           
            <div className='mt-20' >
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 text-white'>
                   Skills 
                </p>
                <p className='py-6  text-white'>These are the skills I have</p>
            </div>

            <div  className='w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

                {
                    skillsArray.map(({id,src,title,style})=>(
                        <div key={id} className={`shadow-md hover:scale-105  duration-500 py-2 rounded-lg ${style} bg-zinc-600`}>
                    <img src={src} className='w-20 mx-auto '/>
                    <p className='mt-4'>{title}</p>
                </div>
                    ))
                }



               
            </div>
        </div>
    
    </div>
  )
}

export default Skills