import React from 'react';
import { motion } from "framer-motion";


const BackgroundCircle = () => {
  return (
    <motion.div
    initial = {{
      opacity:0,
    }}

    animate = {{
      scale: [1, 2, 2, 3, 1],
      opacity:[0.1, 0.2, 0.4, 0.8, 1.0],
      borderRadius: ["20%", "20%", "50%", "80%", "20%"]
    }}

    transition = {{
      duration: 2.5,
    }}

     className='relative flex justify-center items-center'>
        <div className='absolute border border-[#333] rounded-full animate-ping w-[200px] h-[240px] mt-50' />
        <div className='absolute border border-[#b99c3c] opacity-5 rounded-full w-[320px] h-[340px] mt-50' />
        <div className='absolute border border-[#beab6a] rounded-full animate-ping w-[320px] h-[340px] mt-50' />
        <div className='absolute border border-[#333] rounded-full animate-pulse  w-[650px] h-[670px] mt-50' />
    </motion.div>
  )
}

export default BackgroundCircle