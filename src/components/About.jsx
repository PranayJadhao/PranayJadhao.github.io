import React from 'react'

const About = () => {
  return (
    <div name='about'className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen '>
    <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                About
            </p>
        </div>
        <p className='text-xl ml-20'>
       I'm Pranay Jadhao

        </p>
        <br>
        </br>

        <p className='text-xl ml-20'>
        Aspiring full Stack MERN Developer. I love to make projects which are helpful for masses and serve as a great helpful entity.
        </p>
       
    </div>
    </div>
  )
}

export default About