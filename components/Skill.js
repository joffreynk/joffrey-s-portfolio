import React from 'react'
import {SiRubyonrails } from 'react-icons/si'
import {TbBrandNextjs } from 'react-icons/tb'
import {motion} from 'framer-motion'


const Skill = ({directionLeft}) => {
  const  commonStyles = 'w-14 h-14 es:w-18 es:h-18 sm:w-20 sm:h-20 md:w-24 md:h-24  xl:w-32 xl:h-32 rounded-full'
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.div 
      initial={{
        x: directionLeft ? -200: 200,
        opacity: 0,
      }}

      transition={{duration: 1}}
      whileInView={{opacity: 1, x:0}}

      className={`uppercase border flex justify-center items-center text-6xl border-gray-500 object-cover filter group-hover:grayscale transition duration-300 ease-in-out ${commonStyles}`}>
        <TbBrandNextjs className='w-full h-full' />
      </motion.div>

      <div className={`absolute opacity-0 group-hover:opacity-60 transition duration-300 ease-in-out  group-hover:bg-white ${commonStyles}`}>
        <div className='flex items-center justify-center h-full'>
          <p className='text-2xl font-bold text-black opacity-60 '>100</p>
        </div>

      </div>
        
    </div>
  )
}

export default Skill