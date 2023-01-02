import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'
import {TbBrandNextjs, TbBrandJavascript,TbBrandTailwind, TbBrandHtml5 } from 'react-icons/tb'
import {FaReact, FaBootstrap, FaSass, FaGitAlt } from 'react-icons/fa'
import {SiRubyonrails, SiRedux, SiMysql, SiGraphql, SiMongodb, SiCss3, SiNodedotjs, SiExpress, SiPostgresql, SiJava, SiWebpack } from 'react-icons/si'
import styles from './styles.module.css'


const Skills = () => {
  const  commonStyles = 'w-14 h-14 sm:w-20 sm:h-20 rounded-full';
  const mainContainer = 'flex flex-col justify-center items-center cursor-pointer ';
  const submainContainer = 'uppercase  text-2xl object-cover filter transition duration-300 ease-in-out';
  const childContainer = 'transition duration-300 ease-in-out';
  const paragraph = 'text-2xl font-bold text-[#fff] ';


  return (
    <motion.div
    
    className='mb-16  relative flex flex-col overflow-hidden text-left md:flex-row  px-4 sm:px-10 justify-evenly mx-auto items-center '>
      <h3 className={`absolute top-20 font-bold ${styles.headertext} uppercase tracking-[10px] es:tracking-[15px] sm:tracking-[20px] text-gray-500 text-4xl`}>skills </h3>
      <h3 className='absolute top-44 uppercase tracking-[3px] text-gray-400 text-sm'>Fell in love with</h3>
      <div className='grid grid-cols-3 md:grid-cols-5 mb-14 gap-8 md:gap-14 snap-x snap-mandatory mt-52 md:mt-64 md:mb-24'>




      <div className={mainContainer}>
        <div className={` ${submainContainer} ${commonStyles}`}>
          < TbBrandNextjs className='w-full h-full text-[#45ce05] ' />
        </div>

        <div className={`${childContainer} z-10`}>
            <p className={paragraph}>NextJs</p>

        </div>
      </div>


      <div className={mainContainer}>
        <div className={` ${submainContainer} ${commonStyles}`}>
          < FaReact className='w-full h-full  text-[#61DBFB] ' />
        </div>

        <div className={`${childContainer} z-10`}>
            <p className={paragraph}>ReactJs</p>
        </div>
      </div>


      <div className={mainContainer}>
        <div className={` ${submainContainer} ${commonStyles}`}>
          < SiRubyonrails className='w-full h-full text-[#820C02] ' />
        </div>

        <div className={`${childContainer} z-10`}>
            <p className={paragraph}>Rails</p>
        </div>
      </div>


      <div className={mainContainer}>
        <div className={` ${submainContainer} ${commonStyles}`}>
          < SiRedux className='w-4/5 h-4/5 text-[#00a7e5] ' />
        </div>

        <div className={`${childContainer} z-10`}>
            <p className={paragraph}>Redux</p>
        </div>
      </div>


      <div className={mainContainer}>
        <div className={` ${submainContainer} ${commonStyles}`}>
          < SiMysql className='w-4/5 h-full text-[#00758F] ' />
        </div>

        <div className={`${childContainer} z-10`}>
            <p className={paragraph}>MYSQL</p>
        </div>
      </div>


      <div className={mainContainer}>
        <div className={` ${submainContainer} ${commonStyles}`}>
          < SiMongodb className='w-full h-full text-green-500' />
        </div>

        <div className={`${childContainer} z-10`}>
            <p className={paragraph}>MongoDB</p>
        </div>
      </div>


      <div className={mainContainer}>
        <div className={` ${submainContainer} ${commonStyles}`}>
          
          <Image className='w-full h-full' src='/sanity.webp' alt='sanity logo'  width={60} height={60} />
        </div>

        <div className={`${childContainer} z-10`}>
            <p className={paragraph}>Sanity.io</p>
        </div>
      </div>


      <div className={mainContainer}>
        <div className={` ${submainContainer} ${commonStyles}`}>
          < TbBrandJavascript className='w-full h-full text-[#F0DB4F] ' />
        </div>

        <div className={`${childContainer} z-10`}>
            <p className={paragraph}>JavaScript</p>
        </div>
      </div>


      <div className={mainContainer}>
        <div className={` ${submainContainer} ${commonStyles}`}>
          < SiNodedotjs className='w-full h-full text-[#68a063]' />
        </div>

        <div className={`${childContainer} z-10`}>
            <p className={paragraph}>NodeJs</p>
        </div>
      </div>


      <div className={mainContainer}>
        <div className={` ${submainContainer} ${commonStyles}`}>
          < SiExpress className='w-full h-full text-[#68A063]' />
        </div>

        <div className={`${childContainer}z-10`}>
            <p className={paragraph}>ExpressJS</p>
        </div>
      </div>


      <div className={mainContainer}>
        <div className={` ${submainContainer} ${commonStyles}`}>
          < SiPostgresql className='w-full h-4/5 text-[#336791]' />
        </div>

        <div className={`${childContainer} z-10`}>
            <p className={paragraph}>PostgreS</p>
        </div>
      </div>


      <div className={mainContainer}>
        <div className={` ${submainContainer} ${commonStyles}`}>
          < SiJava className='w-full h-full text-[#f89820]' />
        </div>

        <div className={`${childContainer} z-10`}>
            <p className={paragraph}>JAVA</p>
        </div>
      </div>


      <div className={mainContainer}>
        <div className={` ${submainContainer} ${commonStyles}`}>
          < SiCss3 className='w-full h-4/5 mt-2 text-[#264de4]' />
        </div>

        <div className={`${childContainer} z-10`}>
            <p className={paragraph}>CSS3</p>
        </div>
      </div>


      <div className={mainContainer}>
        <div className={` ${submainContainer} ${commonStyles}`}>
          < TbBrandTailwind className='w-full h-full  text-green-500' />
        </div>

        <div className={`${childContainer} z-10`}>
            <p className={paragraph}>Tailwind CSS</p>
        </div>
      </div>




      <div className={mainContainer}>
        <div className={` ${submainContainer} ${commonStyles}`}>
          < SiWebpack className='w-full h-full  text-[#1C78C0] ' />
        </div>

        <div className={`${childContainer}z-10`}>
            <p className={paragraph}>Webpack</p>
        </div>
      </div>


      <div className={mainContainer}>
        <div className={` ${submainContainer} ${commonStyles}`}>
          <TbBrandHtml5 className='w-full h-full text-[#e34c26] ' />
        </div>

        <div className={`${childContainer}z-10`}>
            <p className={paragraph}>HTML5</p>
        </div>
      </div>


      <div className={mainContainer}>
        <div className={` ${submainContainer} ${commonStyles}`}>
          < FaBootstrap className='w-full h-full text-[#563d7c] ' />
        </div>

        <div className={`${childContainer}z-10`}>
            <p className={paragraph}>BootStrap</p>
        </div>
      </div>



      <div className={mainContainer}>
        <div className={` ${submainContainer} ${commonStyles}`}>
          < FaSass className='w-full h-full text-[#CD6799]'  />
        </div>

        <div className={`${childContainer} z-10`}>
            <p className={paragraph}>SASS</p>
        </div>
      </div>


      <div className={mainContainer}>
        <div className={` ${submainContainer} ${commonStyles}`}>
          < SiGraphql className='w-full h-full text-[#e535ab] ' />
        </div>

        <div className={`${childContainer} z-10`}>
            <p className={paragraph}>GraphQl</p>
        </div>
      </div>


      <div className={mainContainer}>
        <div className={` ${submainContainer} ${commonStyles}`}>
          < FaGitAlt className='w-full h-full text-[#3E2C00]' />
        </div>

        <div className={`${childContainer}z-10 `}>
            <p className={paragraph}>git</p>
        </div>
      </div>







      </div>
      <div className='w-full  absolute top-[37%] bg-[#f7ab8a]/10 ltf-0 h-[400px] skew-y-12 z-0' />
    </motion.div>
  )
}

export default Skills