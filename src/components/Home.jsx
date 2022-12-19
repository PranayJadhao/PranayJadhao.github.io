import React from 'react'
import HeroImage from "../assects/heroImage.jpg";
import {BsFillPersonLinesFill} from 'react-icons/bs'
const Home = () => {
  return (
    <div  name='home' className=' h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 px-20'>

        <div  className='max-w-scrren-lg max-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl  font-bold text-white'>I'm a Full Stack Web Developer</h2>
                <p className='text-gray-500 py-4 max-w-md '>
               I am dedicated and detail-oriented Full Stack Web Developer, skilled in MERN stack. Seeking opportunity to gain relevant experience.
                </p>

                <div>
               <div className='flex gap-5'>
               <button  className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-rfrom bg-cyan-500 to-blue-500'>
                  <a href='https://drive.google.com/file/d/1YM226Fgqz5KorDpLFbBG7X5HXJuaMRne/view?usp=sharing' 
                  //  download={true}
                        target="_blank"
                        rel="noreferrer">
                        
                 View Resume
                        <span className='justify-center'>
                        <BsFillPersonLinesFill size={25} className='ml-1'/>
                        </span>
                  </a>
                   
                </button>

                <button  className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-rfrom bg-cyan-500 to-blue-500'>
                  <a href='/Pranay_Jadhao_Resume.pdf' 
                   download={true}
                        target="_blank"
                        rel="noreferrer">
                        
                 Download Resume
                        <span className='justify-center'>
                        <BsFillPersonLinesFill size={25} className='ml-1'/>
                        </span>
                  </a>
                   
                </button>
               </div>
               
            </div>
            </div>
            
            
            <div>
               <img src={HeroImage}/>
              
            </div>
           
        </div>

       

    </div>

  )
}

export default Home