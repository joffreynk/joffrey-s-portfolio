import {motion} from 'framer-motion';
import Image from 'next/image'
import {BsStarHalf} from 'react-icons/bs'

import styles from './styles.module.css'


const ExperienceCard = ({ex}) => {
  return (
    <article className={`flex flex-col rounded-md ${styles.expericenceBorder} border-transparent justify-items-center items-center flex-shrink-0 py-5 bg-[#292929] opacity-70 duration-200 cursor-pointer transition-opacity hover:opacity-100`}>
      <motion.div
      initial={{
        x: 100,
        opacity: 0
      }}

      transition = {{
        duration: 1.2
      }}

      whileInView={{
        opacity:1,
        x: 0,
      }}
      >
        <Image
        src={ex.pic}
        width={128}
        height={128}
        alt='Experience picture'
        className='h-32 w-32 rounded-full xl:w-[120px] xl:h-[120px] flex items-center object-cover'
        />
      </motion.div>
      <div className='px-0 md:px-10'>
        <h4 className='text-xl xl:text-5xl font-light text-center text-gray-400'>{ex.job} </h4>
        <p className='font-bold text-lg mt-1 text-gray-400 text-center'>{ex.company} - {ex.type}</p>
        <p className='text-blue-400 flex justify-center items-center'><BsStarHalf/> <BsStarHalf/><BsStarHalf/><BsStarHalf/><BsStarHalf/></p>
        <p className='py-2 text-gray-400 text-center'>{ex.years}</p>
        <p className='text-blue-400 flex justify-center items-center'><BsStarHalf/> <BsStarHalf/><BsStarHalf/><BsStarHalf/><BsStarHalf/></p>

      </div>
        <ul className='list-disc ml-5 text-lg  text-gray-400 self-start px-1 md:px-8'>
            {
              ex.expr.map(sk => <li key={sk}>{sk}</li>)
            }
        </ul>
      
    </article>
  )
}

export default ExperienceCard