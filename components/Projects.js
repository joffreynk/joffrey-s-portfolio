import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {motion} from 'framer-motion'
import styles from './styles.module.css'

const Projects = () => {
  const projects = [
    {
      pic: "/projects/car-booking.png",
      live:" ",
      title: "Booking Car",
      git: "https://github.com/JoffreyNK/final-capstone",
      descripion: "Car Booking API is Rais API based that allows registered users to book cars. only user of the type admin is allowed to add vehicles in the system and other users can book them them and see their reservations",
    },
    {
      pic: "/projects/book-store.png",
      live:" ",
      git: "https://github.com/JoffreyNK/book-store",
      title: "Book Store",
      descripion: "The Book Store App is the app that is builtusing React, Bootstrap, Redux,  and Book end point API. The user can add, edit, remove, and comment on them. It is public to all users for use",
    },
    {
      pic: "/projects/ecommerce.png",
      live:"https://joffreynk.github.io/ecommerce-site/",
      git: "https://github.com/JoffreyNK/ecommerce-site",
      title: "Ecommerce",
      descripion: "The ecommerce site is project build on intention of HTML, CSS, and some JavaScript best practices. It is just blue print of ecommerce site with all features necessary. I Can customize it based on clients needs and deliver it",
    },
    {
      pic: "/projects/spacetravelorApp.png",
      live:"https://jl-sth.netlify.app/",
      git: "https://github.com/JoffreyNK/space-travelerers",
      title: "Space Travelers Hub",
      descripion: "The Space Travelers Hub project was built using ReactJS, SCSS, HTML, and tested through Jest. This is a React/Redux project for educational purposes only.",
    },
    {
      pic: "/projects/summit.png",
      live:"https://joffreynk.github.io/summit/",
      title: "Degital Summit",
      git: "https://github.com/JoffreyNK/summit",
      descripion: "The Degital Summit is built with JavaScript, HTML, and CSS. It promotes events andlet audience now the speakers of the day and agenda of the day. It is dynamic to all media types", 
     },
    {
      pic: "/projects/math.png",
      live:"https://math-magicians-by-joffrey.netlify.app/",
      title: "Math Magicians",
      git: "https://github.com/JoffreyNK/math-magicians",
      descripion: "\"Math magicians\" is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to: - Make simple calculations. - Read a random math-related quote.",
    },
  ]
  return (
    <div
    className='h-fit relative flex flex-col overflow-hidden text-left md:flex-row max-w-4/5 justify-evenly mx-auto items-center z-0 '>
      <h3 className={`absolute top-20 font-bold ${styles.headertext} uppercase tracking-[10px] es:tracking-[15px] sm:tracking-[20px] text-gray-500 text-4xl`}>projects</h3>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-7 md:gap-14 p-5 md:p-14 relative snap-x snap-mandatory mt-28 z-20'>
        {projects.map((project, i)=>{
          return <div key={i+1} className={`flex-shrink-0 snap-center hover:scale-110 duration-[1.25s] flex flex-col items-center justify-center py-6 px-3 ${styles.expericenceBorder}`}>
            <motion.div
            initial={{
              y:-200,
              opacity:0
            }}
            transition={{duration:1.2}}
            whileInView={{y:0, opacity:1}}
            >
            <Image
            src={project.pic}
            alt="project" 
            className='w-60'
            width={200}
            height={150}
            />
            </motion.div>
            
            <div className='p-4 max-w-4xl'>
              <h4 className='text-2xl sm:text-4xl md:text-4xl font-semibold text-center py-2 text-gray-400 '> {project.title} </h4>
              <p className='text-base sm:text-xl text-justify space-x-1 break-all  text-gray-400'> {project.descripion} </p>
            </div>
              <div className='flex justify-between w-full'>
                {project.live.length>5?
                <Link href={project.live} className={`rounded-lg ${styles.button} text-base p-2 flex justify-center items-center gap-x-4  hover:border-[#f7ab0a]/40 hover:text-gray-400`}>
                <span className='hidden sm:block'>Live</span><Image src='/live.svg' width={16} height={16} alt='live icon'/>  
                </Link>
                :<div></div>}

                <Link href={project.git} className={`rounded-lg ${styles.button} text-base p-2 hover:border-[#f7ab0a]/40 hover:text-gray-400   flex justify-center items-center gap-x-2`} >
                  <span className='hidden sm:block'>GitHub</span>
                  <Image src='/github.svg' width={16} height={16} alt='live icon'/>
                </Link>
              </div>
              <div className='w-full bg-[#f7ab8a]/10 ltf-0 h-[3px] mt-4 -skew-y-0' />
          </div>
          
        })}

      </div>
      <div className='w-full absolute top-[37%] bg-[#f7ab8a]/10 ltf-0 h-[400px] -skew-y-12 z-0' />
      </div>
  )
}

export default Projects