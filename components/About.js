import {motion } from 'framer-motion';
import Image from 'next/image';



const About = () => {
  return (
    <div className="h-fit flex flex-col relative text-center md:text-left md:flex-row max-w-7xl justify-evenly px-10 mx-auto items-center">

      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-4xl">About</h3>
    
    <div className='mt-24 flex text-justify flex-col md:flex-row max-w-7xl justify-center mx-2 items-center' >
     
        <div className=''>
        
          <motion.img

            initial ={{
              x: -150,
              opacity: 0,
            }}

            transition = {{
              duration: 1.5,
            }}

            whileInView={{
              opacity:1,
              x:0
            }}

              src={"/professionalpicture.jpg"}

              alt="my professional picture"

              className='md:mb-0 w-56 h-56 flex-shrink-0 float-right rounded-full object-cover md:rounded-lg md:w-2/3 md:h-2/3 xl:w-3/4  xl:h-3/4'
          />
        </div>

          <motion.div
          initial ={{
            x: 150,
            opacity: 0,
          }}

          transition = {{
            duration: 1.5,
          }}

          whileInView={{
            opacity:1,
            x:0
          }}
          
          className="space-y-10 px-0 md:px-10 flex-grow">
            <h5 className='text-2xl mt-3 font-semibold text-center'>
              Here is a little about me
            </h5>
            <p className='mt-0 pt-0'>
            Hello I&#39;m a software developer! I can help you build a product , feature or website Look through some of my work and experience! If you like what you see and have a project you need coded, don&#36t hestiate to contact me
            <br />
            Hello I&#39;m a software developer! I can help you build a product , feature or website Look through some of my work and experience! If you like what you see and have a project you need coded, don&#36t hestiate to contact me
            <br />

            </p>
        </motion.div>
      </div>

    </div>
  )
}

export default About