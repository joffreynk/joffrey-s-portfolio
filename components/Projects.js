import React from 'react'
import {motion} from 'framer-motion'
import styles from './styles.module.css'

const Projects = () => {
  const projects = [1,2,3,4,5]
  return (
    <div
    className='h-fit relative flex flex-col overflow-hidden text-left md:flex-row max-w-4/5 justify-evenly mx-auto items-center z-0 '>
      <h3 className={`absolute top-20 font-bold ${styles.headertext} uppercase tracking-[10px] es:tracking-[15px] sm:tracking-[20px] text-gray-500 text-4xl`}>projects</h3>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-10 p-14 relative snap-x snap-mandatory mt-44 z-20'>
        {projects.map((project, i)=>{
          return <div key={i+1} className={`flex-shrink-0 snap-center flex flex-col items-center justify-center py-6 px-3 ${styles.expericenceBorder}`}>
            <motion.img
            initial={{
              y:-300,
              opacity:0
            }}
            transition={{duration:1.2}}
            whileInView={{y:0, opacity:1}}
            viewport={{once: true}}
            src="/projects/math-magicians.png"
            alt="project" 
            className='w-60'
            />
            <div className='p-4 max-w-4xl'>
              <h4 className='text-2xl sm:text-4xl md:text-4xl font-semibold text-center py-6 '>Books store</h4>
              <p className='text-xl sm:text-2xl text-justify space-x-1 break-all'>
                React-Redux book store application is an application that helps libraries to manage their books in the store. A librarian can add or remove the book from the store. a teacher who is using that book can track the progress of the book and what he has already taught
                </p>
            </div>
              <div className='flex justify-between w-full'>
                <button className=''>live</button>
                <button className=''>Demo</button>
              </div>
          </div>
          
        })}

      </div>
      <div className='w-full absolute top-[37%] bg-[#f7ab8a]/10 ltf-0 h-[400px] -skew-y-12 z-0' />
      </div>
  )
}

export default Projects