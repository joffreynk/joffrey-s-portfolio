import {motion} from 'framer-motion';
import { SocialIcon } from 'react-social-icons'
import Image from 'next/image'

import styles from './styles.module.css'


const TestimonailCard = ({person}) => {
  return (
    <article className={`flex flex-col rounded-md ${styles.testimonials}  border justify-items-center items-center  space-y-3 flex-shrink-0  snap-x-center py-5 bg-[#292929] opacity-70 duration-200 cursor-pointer transition-opacity hover:opacity-100`}>
      <motion.div
      initial={{
        y:-100,
        opacity: 0
      }}

      transition = {{
        duration: 1.2
      }}

      whileInView={{
        opacity:1,
        y: 0,
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
      <div className='px-0 md:px-10'>
        <h4 className='text-lg md:text-xl xl:text-2xl font-light  text-gray-400'>{person.name}</h4>
      </div>
      <p className='text-base text-gray-400 px-6' >
      {person.quote}
      </p>
      <div className='self-end flex justify-center items-center gap-0'>
      <p className='text-2xl m-0 p-0'>visit:</p>
      <SocialIcon
          url={person.url}
          fgColor='blue'
          bgColor='transparent'
        /> 
      </div>
    </article>
  )
}

export default TestimonailCard