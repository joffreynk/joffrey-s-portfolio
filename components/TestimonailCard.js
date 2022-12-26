import {motion} from 'framer-motion';
import Image from 'next/image'

import styles from './styles.module.css'


const TestimonailCard = () => {
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
        src='/testimonials/david.jpeg'
        width={128}
        height={128}
        alt='Experience picture'
        className='h-32 w-32 rounded-full xl:w-[120px] xl:h-[120px] object-cover object-center'
        />
      </motion.div>
      <div className='px-0 md:px-10'>
        <h4 className='text-lg md:text-xl xl:text-2xl font-light  text-gray-400'>David Vera Castillo</h4>
      </div>
      <p className=' text-gray-400 px-6' >
      Joffrey is a remarkable developer. I know him because we worked together during the first weeks in Microverse, which were the most challenging. He is a reliable partner and skilled programmer. We were able to develop projects with tight deadlines, and he always had a great learning attitude while being generous with his knowledge. Our team benefitted a lot from his contributions when pair programming. I'm sure he will be an asset for any team he's on!
      </p>
      
    </article>
  )
}

export default TestimonailCard