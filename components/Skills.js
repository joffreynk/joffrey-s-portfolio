import React from 'react'
import {motion} from 'framer-motion'
import Skill from './Skill'
import styles from './styles.module.css'


const Skills = () => {
  return (
    <motion.div
    
    className='h-fit relative flex flex-col overflow-hidden text-left md:flex-row  px-4 sm:px-10 justify-evenly mx-auto items-center'>
      <h3 className={`absolute top-20 font-bold ${styles.headertext} uppercase tracking-[10px] es:tracking-[15px] sm:tracking-[20px] text-gray-500 text-4xl`}>skills </h3>
      <h3 className='absolute top-44 uppercase tracking-[3px] text-gray-500 text-sm'>Hover over for proficiency</h3>
      <div className='grid grid-cols-3 md:grid-cols-4 mb-14 gap-8 md:gap-10 snap-x snap-mandatory mt-52'>
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
      <div className='w-full absolute top-[37%] bg-[#f7ab8a]/10 ltf-0 h-[400px] skew-y-12 z-0' />
    </motion.div>
  )
}

export default Skills