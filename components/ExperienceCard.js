import {motion} from 'framer-motion';
import Image from 'next/image'



const ExperienceCard = () => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-3 flex-shrink-0 w-[300px] md:w-[450px] xl:w-[600px] snap-x-center py-5 bg-[#292929] opacity-50 duration-200 cursor-pointer transition-opacity hover:opacity-100 overflow-hidden'>
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

      viewport = {{once: true}}
      >
        <Image
        src='/passport.jpg'
        width={128}
        height={128}
        alt='Experience picture'
        className='h-32 w-32 rounded-full xl:w-[120px] xl:h-[120px] object-cover object-center'
        />
      </motion.div>
      <div className='px-0 md:px-10'>
        <h4 className='text-xl md:text-2xl xl:text-5xl font-light'>FuLL stack</h4>
        <p className='font-bold text-2xl mt-1'>Microverse</p>
        <div className='flex space-x-2 my-2'>
          <Image
          src='/technologies/css3.png'
          className='h-10 w-10 rounded-full'
          alt='technology'
          width={40}
          height={40}
           />
           <Image
          src='/technologies/rails.png'
          className='h-10 w-10 rounded-full'
          alt='technology'
          width={40}
          height={40}
           />
           <Image
          src='/technologies/js.png'
          className='h-10 w-10 rounded-full'
          alt='technology'
          width={40}
          height={40}
           />
           <Image
          src='/technologies/html5.png'
          className='h-10 w-10 rounded-full'
          alt='technology'
          width={40}
          height={40}
           />
        </div>
        <p className='py-2'>April 18, 2022 - Now</p>

      </div>
        <ul className='list-disc space-y-1 xl:space-y-4 px-3 ml-5 text-lg'>
          <li>Designation and elaboration of the program</li>
          <li>Taught 1000+ people computer science</li>
          <li>7 months of technical support and computer maintenance</li>
        </ul>
      
    </article>
  )
}

export default ExperienceCard