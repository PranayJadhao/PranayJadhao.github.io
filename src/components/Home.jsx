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
               
                <button  className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-rfrom bg-cyan-500 to-blue-500'>
                  <a href='/Pranay_Jadhao_Resume.pdf' 
                   download={true}
                        target="_blank"
                        rel="noreferrer">
                  Resume
                        <span className='justify-center'>
                        <BsFillPersonLinesFill size={25} className='ml-1'/>
                        </span>
                  </a>
                   
                </button>
            </div>
            </div>
            
            
            <div>
               <img src={HeroImage}/>
                {/* <img src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='my pic' className='rounded-2xl mx-auto w-2/3 md:w-full'/> */}
            </div>
           
        </div>

       

    </div>

  )
}

export default Home