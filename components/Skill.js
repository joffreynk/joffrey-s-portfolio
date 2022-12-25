import React from 'react'
import {motion} from 'framer-motion'


const Skill = ({directionLeft}) => {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.img
      initial={{
        x: directionLeft ? -200: 200,
        opacity: 0,
      }}

      transition={{duration: 1}}
      whileInView={{opacity: 1, x:0}}
      src='/technologies/css3.png'
      width={50}
      height={50}
      alt='Skill'
      className='rounded-full border border-gray-500 object-cover w-16 h-16 md:w-24 md:h-24  xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
      />

      <div className='absolute opacity-0 group-hover:opacity-60 transition duration-300 ease-in-out w-16 h-16 md:w-24 md:h-24  xl:w-32 xl:h-32 rounded-full group-hover:bg-white'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-2xl font-bold text-black opacity-60 '>100</p>
        </div>

      </div>
        
    </div>
  )
}

export default Skill