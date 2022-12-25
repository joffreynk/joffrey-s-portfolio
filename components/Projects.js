import React from 'react'
import {motion} from 'framer-motion'


const Projects = () => {
  const projects = [1,2,3,4,5]
  return (
    <div
    className='h-fit relative flex flex-col overflow-hidden text-left md:flex-row max-w-4/5 justify-evenly mx-auto items-center z-0 '>
      <h3 className='absolute top-24 uppercase tracking-[15px] md:tracking-[20px] text-gray-500 text-4xl'>projects</h3>
      <div className='relative w-full flex overflow-y-hidden snap-x snap-mandatory z-20 mt-16'>
        {projects.map((project, i)=>{
          return <div key={i+1} className='w-screen md:w-1/2 flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-5 md:p-32 h-screen'>
            <motion.img
            initial={{
              y:-300,
              opacity:0
            }}
            transition={{duration:1.2}}
            whileInView={{y:0, opacity:1}}
            viewport={{once: true}}
            src="https://media.licdn.com/dms/image/C4D2DAQFlgzrd7pNa3w/profile-treasury-image-shrink_800_800/0/1659171338365?e=1672221600&v=beta&t=BKhWx87yq116V4VCtD5gjubU2OfCDgFHExXwODUzp9g"
            alt="project" 
            className='w-60'
            />
            <div className='space-y-2 md:space-y-10 px-0 md:px-10 max-w-4xl'>
              <h4 className='text-2xl md:text-4xl font-semibold text-center '>Books store</h4>
              <p className='text-lg text-left'>
                React-Redux book store application is an application that helps libraries to manage their books in the store. A librarian can add or remove the book from the store. a teacher who is using that book can track the progress of the book and what he has already taught
                </p>
            </div>

          </div>
        })}
      </div>
      <div className='w-full absolute top-[37%] bg-[#f7ab8a]/10 ltf-0 h-[400px] -skew-y-12' />
      </div>
  )
}

export default Projects