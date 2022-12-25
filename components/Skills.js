import React from 'react'
import {motion} from 'framer-motion'
import Skill from './Skill'


const Skills = () => {
  return (
    <motion.div
    


    className='h-fit relative flex flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-secreen justify-center xl:space-y-0 mx-auto items-center '>
      <h3 className='absolute top-24 uppercase tracking-[15px] md:tracking-[20px] text-gray-500 text-4xl'>skills </h3>
      <h3 className='absolute top-44 uppercase tracking-[3px] text-gray-500 text-sm'>Hover over for proficiency</h3>
      <div className='grid grid-cols-4 gap-5 px-6 pt-48'>
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />

      </div>
      <div className='w-full absolute top-[37%] bg-[#f7ab8a]/10 ltf-0 h-[400px] skew-y-12' />
    </motion.div>
  )
}

export default Skills