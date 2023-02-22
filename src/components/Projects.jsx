import React from 'react'
import modensenseProject from "../assects/Projects/modensenseProject.png"
import myntraProject from "../assects/Projects/myntraProject.png"
import unsplashProject from "../assects/Projects/unsplashProject.png"
import tripasvisorProject from "../assects/Projects/tripadvisorProject.png"
import html  from "../assects/html.png"
import {FaReact} from "react-icons/fa"
import {SiChakraui} from "react-icons/si"
import {AiFillHtml5} from "react-icons/ai"
import {DiCss3} from "react-icons/di"
import {IoLogoJavascript} from "react-icons/io"


const Projects = () => {

    const projectsArray=[
        {
            id:1,
            src:modensenseProject,
            demo:'https://drive.google.com/file/d/1c4KmAwfK2ZSuC5LCCrAKIf2zhJO9zwra/view?usp=sharing',
            site:'https://agile-wheel-3721-l8yj.vercel.app/',
            code:'https://github.com/PranayJadhao/agile-wheel-3721',
            description: "It is an e-commerse website which sales fashion product online.",
            tech:[<AiFillHtml5 size={25}/>,<DiCss3 size={25}/>,<IoLogoJavascript size={25}/>,<FaReact size={25}/>,<SiChakraui size={25}/>],
            type:'It is a solo project.'
        },
        {
            id:2,
            src:myntraProject,
            demo:'https://drive.google.com/file/d/14G6cM2X9IpuGlqlAMx3aFR15KZT-Nfp6/view',
            code:"https://github.com/PranayJadhao/sensitive-government-8954",
            description: "It is an e-commerse website which sales product online.",
            tech:[<AiFillHtml5 size={25}/>,<DiCss3 size={25}/>,<IoLogoJavascript size={25}/>],
            site:'https://lovely-nasturtium-f92967.netlify.app/',
            type:'It is a solo project.'
        },
        {
            id:3,
            src:unsplashProject,
            demo:"https://drive.google.com/file/d/1R191DWOgMGLTq7Gx0J7kwqUf301w_8Ju/view?usp=sharing",
            code:"https://github.com/PranayJadhao/exclusive-oatmeal-9601",
           description:'From this website you can download images of your choice.',
            tech:[<AiFillHtml5 size={25}/>,<DiCss3 size={25}/>,<IoLogoJavascript size={25}/>,<FaReact size={25}/>,<SiChakraui size={25}/>],
            site:'https://exclusive-oatmeal-9601-my-project-rct-101-hxvtpj.vercel.app/',
            type:'It is a solo project.'

        },
        {
            id:4,
            src:tripasvisorProject,
            demo:"https://drive.google.com/file/d/13Xd4dayrCQHfhMJc44u7oCRchVK3pD58/view?usp=sharing",
            code:"https://github.com/yogeshkumawat007/truculent-trains-1017",
            description:"This website help you to book hotels online.",
            tech:[<AiFillHtml5 size={25}/>,<DiCss3 size={25}/>,<IoLogoJavascript size={25}/>],
            site:'https://splendorous-hotteok-40a851.netlify.app/',
            type:'It is a group project done with 4 members.'
        },
       
    ]

  return (
    <div name='projects' className='bg-zinc-500 w-full text-white  '>
     <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
            <p className='py-6'>Check out some of my projects here</p>
        </div>

        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-12 sm:px-0'>
            {
                projectsArray.map(({id,src,demo,code,description,tech,type,site})=>(
                    <div key={id} className='shadow-md shadow-zinc-600 rounded-lg  bg-zinc-600'>
                    <a href={site} target="_blank">
                    <img className='rounded-md duration-200 hover:scale-105'
                     src={src}/>
                    </a>
                    <div className='justify-centre  items-center p-3 '>
                        {description} 
                    </div>
                    <div className='justify-centre  items-center p-3 '>
                        {type} 
                    </div>

                    <div className='justify-centre  items-center p-3 flex gap-2 '>
                       <span className='font-bold '> Tech-Stack Used -</span>
                      <span className='w-100 flex gap-2 h-100 ' > {tech}</span>
                       </div> 
                    
                    <div className='flex items-center justify-center'>
                 
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-orange-500 rounded-md'>
                        <a href={demo} target="_blank">
                            Demo
                        </a>
                        </button>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105  bg-orange-500 rounded-md'>
                        <a href={code} target="_blank">
                            Code
                        </a>
                        </button>
                    </div>
                </div>
                ))
            }
          </div>



     </div>
    </div>
  )
}

export default Projects