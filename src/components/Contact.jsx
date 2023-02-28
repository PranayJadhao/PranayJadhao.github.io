import React from 'react'
import SocialLink from "./SocialLinks"
import {FaGithub,FaLinkedin} from 'react-icons/fa'

const Contact = () => {
  return (
    <div name='contact' className=' h-screen w-full bg-zinc-500 p-4 text-white'>
    
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
       
           <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                <p className='py-6'>Submit the form below to get in touch</p>
            </div>
            {/* <div>
                <SocialLink/>
            </div> */}
            <div className='flex gap-8 justify-center items-center pb-5'>
                <p>Mobile No.: 7020798429</p>
                <a target={'_blank'} href='mailto:pranayjadhao95@gmail.com'>   <p>Email: pranayjadhao95@gmail.com</p></a>
             

            </div>
            <div className='flex gap-10 justify-center items-center pb-5'>
             <a target={'_blank'} href='https://www.linkedin.com/in/pranay-jadhao-b322b7259/'> <button className='flex gap-3  justify-around item-center'> LinkedIn <FaLinkedin size={30}/></button></a>   
              <a target={'_blank'} href='https://github.com/PranayJadhao'> <button className='flex gap-3'>GitHub <FaGithub size={30}/></button></a> 
                
            </div>

            <div className='flex justify-center items-center'>
                <form action='https://getform.io/f/b87861b7-28f7-4d62-8e81-fee534f2e347' method='POST' className='flex flex-col w-full md:w-1/2'>
                    <input type='text' name='name' placeholder='Enter Your name'
                        className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                    />

                    <input type='email' name='email' placeholder='Enter Your email'
                        className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                    />

                    <textarea placeholder='Enter your message' name='message' rows='10' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                    

                    <button className= 'text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-rfrom bg-cyan-500 to-blue-500 '>Let's talk</button>
                </form>
            </div>

          
        </div>



    </div>
  )
}

export default Contact