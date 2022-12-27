import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'
import {TbBrandNextjs, TbBrandJavascript,TbBrandTailwind, TbBrandHtml5 } from 'react-icons/tb'
import {FaReact, FaBootstrap, FaSass, FaGitAlt } from 'react-icons/fa'
import {SiRubyonrails, SiRedux, SiMysql, SiGraphql, SiMongodb, SiCss3, SiNodedotjs, SiExpress, SiPostgresql, SiJava, SiWebpack } from 'react-icons/si'
import styles from './styles.module.css'


const Skills = () => {
  const  commonStyles = 'w-14 h-14 es:w-18 es:h-18 sm:w-20 sm:h-20 md:w-24 md:h-24  xl:w-32 xl:h-32 rounded-full'
  return (
    <motion.div
    
    className='h-fit relative flex flex-col overflow-hidden text-left md:flex-row  px-4 sm:px-10 justify-evenly mx-auto items-center'>
      <h3 className={`absolute top-20 font-bold ${styles.headertext} uppercase tracking-[10px] es:tracking-[15px] sm:tracking-[20px] text-gray-500 text-4xl`}>skills </h3>
      <h3 className='absolute top-44 uppercase tracking-[3px] text-gray-400 text-sm'>Hover over for proficiency</h3>
      <div className='grid grid-cols-3 md:grid-cols-4 mb-14 gap-8 md:gap-10 snap-x snap-mandatory mt-52'>




      <div className='group relative flex cursor-pointer'>
        <div className={`uppercase border flex justify-center items-center text-6xl border-gray-500 object-cover filter group-hover:grayscale transition duration-300 ease-in-out ${commonStyles}`}>
          < TbBrandNextjs className='w-full h-full' />
        </div>

        <div className={`absolute opacity-0 group-hover:opacity-60 transition duration-300 ease-in-out  group-hover:bg-white ${commonStyles} z-10`}>
          <div className='flex items-center justify-center h-full'>
            <p className='text-2xl font-bold text-black opacity-60 '>NextJs</p>
          </div>

        </div>
      </div>


      <div className='group relative flex cursor-pointer'>
        <div className={`uppercase border flex justify-center items-center text-6xl border-gray-500 object-cover filter group-hover:grayscale transition duration-300 ease-in-out ${commonStyles}`}>
          < FaReact className='w-full h-full' />
        </div>

        <div className={`absolute opacity-0 group-hover:opacity-60 transition duration-300 ease-in-out  group-hover:bg-white ${commonStyles} z-10`}>
          <div className='flex items-center justify-center h-full'>
            <p className='text-2xl font-bold text-black opacity-60 '>ReactJs</p>
          </div>

        </div>
      </div>


      <div className='group relative flex cursor-pointer'>
        <div className={`uppercase border flex justify-center items-center text-6xl border-gray-500 object-cover filter group-hover:grayscale transition duration-300 ease-in-out ${commonStyles}`}>
          < SiRubyonrails className='w-full h-full' />
        </div>

        <div className={`absolute opacity-0 group-hover:opacity-60 transition duration-300 ease-in-out  group-hover:bg-white ${commonStyles} z-10`}>
          <div className='flex items-center justify-center h-full'>
            <p className='text-2xl font-bold text-black opacity-60 '>Rails</p>
          </div>

        </div>
      </div>


      <div className='group relative flex cursor-pointer'>
        <div className={`uppercase border flex justify-center items-center text-6xl border-gray-500 object-cover filter group-hover:grayscale transition duration-300 ease-in-out ${commonStyles}`}>
          < SiRedux className='w-4/5 h-4/5' />
        </div>

        <div className={`absolute opacity-0 group-hover:opacity-60 transition duration-300 ease-in-out  group-hover:bg-white ${commonStyles} z-10`}>
          <div className='flex items-center justify-center h-full'>
            <p className='text-2xl font-bold text-black opacity-60 '>Redux</p>
          </div>

        </div>
      </div>


      <div className='group relative flex cursor-pointer'>
        <div className={`uppercase border flex justify-center items-center text-6xl border-gray-500 object-cover filter group-hover:grayscale transition duration-300 ease-in-out ${commonStyles}`}>
          < SiMysql className='w-4/5 h-full' />
        </div>

        <div className={`absolute opacity-0 group-hover:opacity-60 transition duration-300 ease-in-out  group-hover:bg-white ${commonStyles} z-10`}>
          <div className='flex items-center justify-center h-full'>
            <p className='text-2xl font-bold text-black opacity-60 '>MYSQL</p>
          </div>

        </div>
      </div>


      <div className='group relative flex cursor-pointer'>
        <div className={`uppercase border flex justify-center items-center text-6xl border-gray-500 object-cover filter group-hover:grayscale transition duration-300 ease-in-out ${commonStyles}`}>
          < SiMongodb className='w-full h-full' />
        </div>

        <div className={`absolute opacity-0 group-hover:opacity-60 transition duration-300 ease-in-out  group-hover:bg-white ${commonStyles} z-10`}>
          <div className='flex items-center justify-center h-full'>
            <p className='text-2xl font-bold text-black opacity-60 '>MongoDB</p>
          </div>

        </div>
      </div>


      <div className='group relative flex cursor-pointer'>
        <div className={`uppercase border flex justify-center items-center text-6xl border-gray-500 object-cover filter group-hover:grayscale transition duration-300 ease-in-out ${commonStyles}`}>
          
          <Image className='w-full h-full' src='/sanity.webp' alt='sanity logo'  width={60} height={60} />
        </div>

        <div className={`absolute opacity-0 group-hover:opacity-60 transition duration-300 ease-in-out  group-hover:bg-white ${commonStyles} z-10`}>
          <div className='flex items-center justify-center h-full'>
            <p className='text-2xl font-bold text-black opacity-60 '>Sanity.io</p>
          </div>

        </div>
      </div>


      <div className='group relative flex cursor-pointer'>
        <div className={`uppercase border flex justify-center items-center text-6xl border-gray-500 object-cover filter group-hover:grayscale transition duration-300 ease-in-out ${commonStyles}`}>
          < TbBrandJavascript className='w-full h-full' />
        </div>

        <div className={`absolute opacity-0 group-hover:opacity-60 transition duration-300 ease-in-out  group-hover:bg-white ${commonStyles} z-10`}>
          <div className='flex items-center justify-center h-full'>
            <p className='text-2xl font-bold text-black opacity-60 '>Javascript</p>
          </div>

        </div>
      </div>


      <div className='group relative flex cursor-pointer'>
        <div className={`uppercase border flex justify-center items-center text-6xl border-gray-500 object-cover filter group-hover:grayscale transition duration-300 ease-in-out ${commonStyles}`}>
          < SiNodedotjs className='w-full h-full' />
        </div>

        <div className={`absolute opacity-0 group-hover:opacity-60 transition duration-300 ease-in-out  group-hover:bg-white ${commonStyles} z-10`}>
          <div className='flex items-center justify-center h-full'>
            <p className='text-2xl font-bold text-black opacity-60 '>NodeJs</p>
          </div>

        </div>
      </div>


      <div className='group relative flex cursor-pointer'>
        <div className={`uppercase border flex justify-center items-center text-6xl border-gray-500 object-cover filter group-hover:grayscale transition duration-300 ease-in-out ${commonStyles}`}>
          < SiExpress className='w-full h-full' />
        </div>

        <div className={`absolute opacity-0 group-hover:opacity-60 transition duration-300 ease-in-out  group-hover:bg-white ${commonStyles} z-10`}>
          <div className='flex items-center justify-center h-full'>
            <p className='text-2xl font-bold text-black opacity-60 '>ExpressJS</p>
          </div>

        </div>
      </div>


      <div className='group relative flex cursor-pointer'>
        <div className={`uppercase border flex justify-center items-center text-6xl border-gray-500 object-cover filter group-hover:grayscale transition duration-300 ease-in-out ${commonStyles}`}>
          < SiPostgresql className='w-full h-4/5' />
        </div>

        <div className={`absolute opacity-0 group-hover:opacity-60 transition duration-300 ease-in-out  group-hover:bg-white ${commonStyles} z-10`}>
          <div className='flex items-center justify-center h-full'>
            <p className='text-2xl font-bold text-black opacity-60 '>PostgreS</p>
          </div>

        </div>
      </div>


      <div className='group relative flex cursor-pointer'>
        <div className={`uppercase border flex justify-center items-center text-6xl border-gray-500 object-cover filter group-hover:grayscale transition duration-300 ease-in-out ${commonStyles}`}>
          < SiJava className='w-full h-full' />
        </div>

        <div className={`absolute opacity-0 group-hover:opacity-60 transition duration-300 ease-in-out  group-hover:bg-white ${commonStyles} z-10`}>
          <div className='flex items-center justify-center h-full'>
            <p className='text-2xl font-bold text-black opacity-60 '>JAVA</p>
          </div>

        </div>
      </div>


      <div className='group relative flex cursor-pointer'>
        <div className={`uppercase border flex justify-center items-center text-6xl border-gray-500 object-cover filter group-hover:grayscale transition duration-300 ease-in-out ${commonStyles}`}>
          < SiCss3 className='w-full h-4/5 mt-2' />
        </div>

        <div className={`absolute opacity-0 group-hover:opacity-60 transition duration-300 ease-in-out  group-hover:bg-white ${commonStyles} z-10`}>
          <div className='flex items-center justify-center h-full'>
            <p className='text-2xl font-bold text-black opacity-60 '>CSS3</p>
          </div>

        </div>
      </div>


      <div className='group relative flex cursor-pointer'>
        <div className={`uppercase border flex justify-center items-center text-6xl border-gray-500 object-cover filter group-hover:grayscale transition duration-300 ease-in-out ${commonStyles}`}>
          < TbBrandTailwind className='w-full h-full' />
        </div>

        <div className={`absolute opacity-0 group-hover:opacity-60 transition duration-300 ease-in-out  group-hover:bg-white ${commonStyles} z-10`}>
          <div className='flex items-center justify-center h-full'>
            <p className='text-2xl font-bold text-black opacity-60 '>Tailwind</p>
          </div>

        </div>
      </div>




      <div className='group relative flex cursor-pointer'>
        <div className={`uppercase border flex justify-center items-center text-6xl border-gray-500 object-cover filter group-hover:grayscale transition duration-300 ease-in-out ${commonStyles}`}>
          < SiWebpack className='w-full h-full' />
        </div>

        <div className={`absolute opacity-0 group-hover:opacity-60 transition duration-300 ease-in-out  group-hover:bg-white ${commonStyles} z-10`}>
          <div className='flex items-center justify-center h-full'>
            <p className='text-2xl font-bold text-black opacity-60 '>Webpack</p>
          </div>

        </div>
      </div>


      <div className='group relative flex cursor-pointer'>
        <div className={`uppercase border flex justify-center items-center text-6xl border-gray-500 object-cover filter group-hover:grayscale transition duration-300 ease-in-out ${commonStyles}`}>
          <TbBrandHtml5 className='w-full h-full' />
        </div>

        <div className={`absolute opacity-0 group-hover:opacity-60 transition duration-300 ease-in-out  group-hover:bg-white ${commonStyles} z-10`}>
          <div className='flex items-center justify-center h-full'>
            <p className='text-2xl font-bold text-black opacity-60 '>HTML5</p>
          </div>

        </div>
      </div>


      <div className='group relative flex cursor-pointer'>
        <div className={`uppercase border flex justify-center items-center text-6xl border-gray-500 object-cover filter group-hover:grayscale transition duration-300 ease-in-out ${commonStyles}`}>
          < FaBootstrap className='w-full h-full' />
        </div>

        <div className={`absolute opacity-0 group-hover:opacity-60 transition duration-300 ease-in-out  group-hover:bg-white ${commonStyles} z-10`}>
          <div className='flex items-center justify-center h-full'>
            <p className='text-2xl font-bold text-black opacity-60 '>BootStrap</p>
          </div>

        </div>
      </div>



      <div className='group relative flex cursor-pointer'>
        <div className={`uppercase border flex justify-center items-center text-6xl border-gray-500 object-cover filter group-hover:grayscale transition duration-300 ease-in-out ${commonStyles}`}>
          < FaSass className='w-full h-full' />
        </div>

        <div className={`absolute opacity-0 group-hover:opacity-60 transition duration-300 ease-in-out  group-hover:bg-white ${commonStyles} z-10`}>
          <div className='flex items-center justify-center h-full'>
            <p className='text-2xl font-bold text-black opacity-60 '>SASS</p>
          </div>

        </div>
      </div>


      <div className='group relative flex cursor-pointer'>
        <div className={`uppercase border flex justify-center items-center text-6xl border-gray-500 object-cover filter group-hover:grayscale transition duration-300 ease-in-out ${commonStyles}`}>
          < SiGraphql className='w-full h-full' />
        </div>

        <div className={`absolute opacity-0 group-hover:opacity-60 transition duration-300 ease-in-out  group-hover:bg-white ${commonStyles} z-10`}>
          <div className='flex items-center justify-center h-full'>
            <p className='text-2xl font-bold text-black opacity-60 '>GraphQl</p>
          </div>

        </div>
      </div>


      <div className='group relative flex cursor-pointer'>
        <div className={`uppercase border flex justify-center items-center text-6xl border-gray-500 object-cover filter group-hover:grayscale transition duration-300 ease-in-out ${commonStyles}`}>
          < FaGitAlt className='w-full h-full' />
        </div>

        <div className={`absolute opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out  group-hover:bg-white ${commonStyles} z-10`}>
          <div className='flex items-center justify-center h-full'>
            <p className='text-2xl font-bold text-black opacity-60 '>git</p>
          </div>

        </div>
      </div>







      </div>
      <div className='w-full absolute top-[37%] bg-[#f7ab8a]/10 ltf-0 h-[400px] skew-y-12 z-0' />
    </motion.div>
  )
}

export default Skills