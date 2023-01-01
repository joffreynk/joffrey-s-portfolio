import {motion} from 'framer-motion';
import { SocialIcon } from 'react-social-icons'
import {MdOutlineStars} from 'react-icons/md'
import Image from 'next/image'

import styles from './styles.module.css'


const TestimonailCard = ({person}) => {
  return (
    <article className={`flex flex-col rounded-md ${styles.testimonials}  border justify-items-center items-center  space-y-3 flex-shrink-0  snap-x-center py-5 bg-[#292929] opacity-70 duration-200 cursor-pointer transition-opacity hover:opacity-100`}>
      <motion.div
      initial={{
        x:-100,
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
        src={person.picture}
        width={128}
        height={128}
        alt='Experience picture'
        className='h-32 w-32 rounded-full xl:w-[120px] xl:h-[120px] object-cover object-center'
        />
      </motion.div>
      
      <p className='text-base text-gray-400 px-6 text-justify' >
      {person.quote}
      </p>
      <div className='flex'>
        <MdOutlineStars className='text-blue-500' />
        <MdOutlineStars  className='text-blue-500' />
        <MdOutlineStars  className='text-blue-500' />
        <MdOutlineStars  className='text-blue-500' />
        <MdOutlineStars  className='text-blue-500' />
        <MdOutlineStars  className='text-blue-500' />
      </div>

      <div className='px-0 md:px-10'>
        <h4 className='text-lg md:text-xl xl:text-2xl font-light  text-gray-400'>{person.name} </h4>
      </div>
      <div className='px-0 md:px-10'>
        <p className='text-base font-light  text-gray-400'>{person.position}</p>
      </div>
    </article>
  )
}

export default TestimonailCard