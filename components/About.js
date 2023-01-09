import {motion } from 'framer-motion';
import Image from 'next/image';
import styles from './styles.module.css'



const About = () => {
  return (
    <div className="mb-16  min-h-fit flex flex-col relative text-center md:text-left md:flex-row max-w-7xl justify-evenly px-10 mx-auto items-center">

      <h3 className={`absolute top-16 es:top-20 font-bold ${styles.headertext} uppercase tracking-[10px] es:tracking-[15px] sm:tracking-[20px] text-gray-500 text-4xl`}>About Me</h3>
    
    <div className='mt-44  xs:top-32  flex text-justify flex-col md:flex-row max-w-7xl justify-center mx-2 items-center' >
     
        <motion.div className='hidden md:flex justify-center items-center  float-right  w-32 h-32 es:w-72 es:h-72 md:w-2/3 md:h-2/3 xl:w-3/4  xl:h-3/4'>

        
          <Image

            initial ={{
              x: 200,
              opacity: 0,
            }}

            transition = {{
              duration: 1.5,
            }}

            whileInView={{
              opacity:1,
              x:0
            }}
            width={300}
            height={300}

              src={"/aboutpic.jpg"}

              alt="my professional picture"

              className='w-[80%] h-[90%]  p-0 m-0  flex-shrink-0  rounded-full object-cover md:rounded-lg'
          />
        </motion.div>

             
        <motion.div className='md:hidden justify-center items-center  float-right  w-36 h-36'>

        
          <Image

            // initial ={{
            //   x: -200,
            //   opacity: 0,
            // }}

            // transition = {{
            //   duration: 1.5,
            // }}

            // whileInView={{
            //   opacity:1,
            //   x:0
            // }}
            width={300}
            height={300}

              src={"/aboutpic2.jpg"}

              alt="my professional picture"

              className='w-[100%] h-[100%]  p-0 m-0  flex-shrink-0  rounded-full object-cover md:rounded-lg'
          />
        </motion.div>



          <motion.div
          // initial ={{
          //   x: -200,
          //   opacity: 0,
          // }}

          // transition = {{
          //   duration: 1.5,
          // }}

          // whileInView={{
          //   opacity:1,
          //   x:0
          // }}
          
          className="space-y-2 es:space-x-10 px-0 md:px-10 flex-grow xs:w-full">
            <h5 className='text-2xl mt-3 font-semibold text-center  text-gray-400 underline pb-5 decoration-[#8c61c5] '>
              Biography
            </h5>
            <p className='mt-0 pt-0 text-[18px]  text-gray-400  '>
            Hi, my name is Joffrey NKESHIMANA, I have a bachelor&#39;s degree in computer science. I&#39;m a Ruby on Rails and NextJS full-stack developer with the mission of enhancing technology by turning ideas into real-world applications.
            JavaScript, Ruby on Rails, ExpressJS, NextJS, Redux, Sanity.io, SQL, and MongoDB are my favorite technologies.
            Improving open-source projects, Remote working, Team-working and one commitment at a time are my priorities.
            I can help you to build products, features, and websites. Look through my skills, projects, and experiences. Don&#39;t hesitate to contact me.
            </p>
        </motion.div>
      </div>

    </div>
  )
}

export default About