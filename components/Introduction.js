import {Typewriter} from "react-simple-typewriter";
import {BiMenu} from "react-icons/bi";
import {IoClose} from 'react-icons/io5';
import { useState } from "react";
import {FaDotCircle} from 'react-icons/fa';
import Image from "next/image";
import Link from "next/link";
import BackgroundCircle from "./BackgroundCircle";



const Introduction = () => {  
  const [displayMenu, setDisplayMenu] = useState(true);
  console.log(displayMenu);
  return (
    <div className="h-screen flex xs:mt-40 first-letter: flex-col justify-center items-center overflow-hidden text-center space-y-8">
      <div className="fixed z-50 top-20 left-3 text-lg">
      {displayMenu
      ? 
      <button onClick={()=>setDisplayMenu(!displayMenu)}><BiMenu className="text-4xl bg-slate-300 rounded-md text-[rgb(36,36,36)] self-start " /></button> 
      :
      <div className=" fixed z-50 top-0 left-0 right-0 bottom-0 text-lg  bg-slate-300 bg-opacity-70 ">
        <div className=" fixed top-20 left-3 right-1/4 bottom-0  flex justify-between items-start text-gray-500  bg-slate-300 p-5 bg-opacity-90">
          <div>
          <Link href="#top" className="flex gap-3 items-center">
            <FaDotCircle className="bull-dot" />
            <button className={`introButtons  hidden sm:block capitalize`}>top</button>
          </Link>
          <Link href="#about" className="flex gap-3  items-center">
          <FaDotCircle className="bull-dot" />
            <button className={`introButtons hidden sm:block capitalize`}>about</button>
          </Link>
          <Link href="#experience" className="flex gap-3 items-center">
          <FaDotCircle className="bull-dot" />
            <button className={`introButtons hidden sm:block capitalize`}>experience</button>
          </Link>
          <Link href="#skills" className="flex gap-5  items-center">
          <FaDotCircle className="bull-dot" />
            <button className={`introButtons hidden sm:block capitalize`}>skills</button>
          </Link>
          <Link href="#projects" className="flex gap-3 items-center">
          <FaDotCircle className="bull-dot" />
            <button className="introButtons hidden sm:block capitalize">projects</button>
          </Link>
          <Link href="#contacts" className="flex gap-3 items-center">
          <FaDotCircle className="bull-dot" />
            <button className="introButtons hidden sm:block capitalize">Contacts</button>
          </Link>
          </div>
          <button onClick={()=> setDisplayMenu(!displayMenu)} className="hover:text-orange-400"><IoClose  /></button>
      </div>
      </div>
      }
      </div>
      <BackgroundCircle />
      <div>
      <Image  src='/professionalpicture.jpg'
      height={170}
      width={170}
      alt="Professional picture"
      className=" relative rounded-full h-45 w-45 mx-auto -mt-28 object-cover"
      />
        </div>
      <div className="z-40">
        <h2 className=" text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software engineer
        </h2>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-semibold scroll-px-10  text-gray-400">
          <Typewriter
              words={[
                  "Hi, there! I'm <Joffrey/>;",
                  "Happy to see you here!"
              ]}
              loop={true}
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h1>
          <div className="">
          <h2 className=" text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software engineer
        </h2>
          </div>
      </div>
    </div>
  )
}

export default Introduction