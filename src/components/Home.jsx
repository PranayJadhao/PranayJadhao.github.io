import React from 'react'
import HeroImage from "../assects/heroImage.jpg";
import {BsFillPersonLinesFill} from 'react-icons/bs'
const Home = () => {
  return (
    <div  name='home' className=' h-screen w-full bg-zinc-500  px-20 pt-10 '>

        <div  className='max-w-scrren-lg max-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-4xl md:text-7xl  font-bold text-white pt-20'>I'm a Full Stack Web Developer</h2>
                <p className='text-black py-4 max-w-md '>
               I am dedicated and detail-oriented Full Stack Web Developer, skilled in MERN stack. Seeking opportunity to gain relevant experience.
                </p>

                <div>
               <div className='flex gap-5' onClick={()=>window.open("https://drive.google.com/file/d/1YM226Fgqz5KorDpLFbBG7X5HXJuaMRne/view?usp=sharing")}>
               <button  className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-rfrom bg-orange-500 to-orange-300'>
                  <a href='fw20_0823-Pranay_Jadhao_Resume.pdf' 
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
            </div>
            
            
            <div className='w-32 xsm:w-56 sm:w-96 md:w-96' >
               <img src={HeroImage} />
              
            </div>
           
        </div>

       

    </div>

  )
}

export default Home