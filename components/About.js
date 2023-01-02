import {motion } from 'framer-motion';
import Image from 'next/image';
import styles from './styles.module.css'



const About = () => {
  return (
    <div className="h-screen min-h-fit flex flex-col relative text-center md:text-left md:flex-row max-w-7xl justify-evenly px-10 mx-auto items-center">

      <h3 className={`absolute top-16 es:top-20 font-bold ${styles.headertext} uppercase tracking-[10px] es:tracking-[15px] sm:tracking-[20px] text-gray-500 text-4xl`}>About</h3>
    
    <div className='mt-24  xs:top-32  flex text-justify flex-col md:flex-row max-w-7xl justify-center mx-2 items-center' >
     
        <motion.div className='hidden md:flex justify-center items-center  float-right  w-32 h-32 es:w-72 es:h-72 md:w-2/3 md:h-2/3 xl:w-3/4  xl:h-3/4'>

        
          <Image

            initial ={{
              y: -300,
              opacity: 0,
            }}

            transition = {{
              duration: 1.5,
            }}

            whileInView={{
              opacity:1,
              y:0
            }}
            width={300}
            height={300}

              src={"/aboutpic.jpg"}

              alt="my professional picture"

              className='w-[70%] h-[90%]  p-0 m-0  flex-shrink-0  rounded-full object-cover md:rounded-lg'
          />
        </motion.div>



             
        <motion.div className='md:hidden justify-center items-center  float-right  w-36 h-36'>

        
          <Image

            initial ={{
              y: -300,
              opacity: 0,
            }}

            transition = {{
              duration: 1.5,
            }}

            whileInView={{
              opacity:1,
              y:0
            }}
            width={300}
            height={300}

              src={"/aboutpic2.jpg"}

              alt="my professional picture"

              className='w-[100%] h-[100%]  p-0 m-0  flex-shrink-0  rounded-full object-cover md:rounded-lg'
          />
        </motion.div>



          <motion.div
          initial ={{
            y: 150,
            opacity: 0,
          }}

          transition = {{
            duration: 1.5,
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          // portView={{once:true}}
          
          className="space-y-2 es:space-x-10 px-0 md:px-10 flex-grow xs:w-full">
            <h5 className='text-2xl mt-3 font-semibold text-center  text-gray-400'>
              Biography
            </h5>
            <p className='mt-0 pt-0 text-[18px]  text-gray-400'>
              With computer science degree, I'm Full-stack developer and open-source enthusiast with a love for clean code and accessible design. Pair-programming, problem-solving, and remote work specialist.
              <br/>
              I can help you to build product, feature, website. Look through my skills, projects and experiences. Don't hesitate to contact me.
            </p>
        </motion.div>
      </div>

    </div>
  )
}

export default About