import {Typewriter} from "react-simple-typewriter";
import {BiMenu} from "react-icons/bi";
import {IoClose} from 'react-icons/io5';
import { useState } from "react";
import {FaDotCircle} from 'react-icons/fa';
import {AiOutlineHome, AiOutlineFundProjectionScreen} from 'react-icons/ai';
import { GrContact} from 'react-icons/gr';
import {GiSkills, GiAchievement} from 'react-icons/gi';
import {FcReading} from 'react-icons/fc';
import {MdOutlinePreview, MdContactMail} from 'react-icons/md';
import Image from "next/image";
import Link from "next/link";
import BackgroundCircle from "./BackgroundCircle";



const Introduction = () => {  
  const [displayMenu, setDisplayMenu] = useState(true);
  return (
    <div className="h-screen flex xs:mt-40 first-letter: flex-col justify-center items-center overflow-hidden text-center space-y-8">
      <div className="fixed z-50 top-24 left-4 text-lg">
      {displayMenu
      ? 
      <button onClick={()=>setDisplayMenu(!displayMenu)}><BiMenu className="text-4xl bg-slate-300 text-[rgb(36,36,36)] self-start " /></button> 
      :
      <div className="fixed z-50 top-0 left-0 right-0 bottom-0 text-lg bg-gray-500  text- bg-opacity-70  duration-200">
        <div className=" fixed top-0 left-0 bg-blend-overlay right-[15%] es:right-[40%] md:right-[60%] bottom-0  pt-10 pl-10 flex justify-between items-start text-gray-500 bg-[rgb(36,36,36)] pr-5 ">
          <div className="text-xl flex flex-col gap-2 ">
          <Link onClick={()=> setDisplayMenu(!displayMenu)} href="#home" className="flex gap-2 items-center border-b border-gray-500 w-fit px-2 ">
            <AiOutlineHome className=" text-violet-400" />
            <button className={`introButtons  capitalize  hover:scale-x-75 duration-125`}>Home</button>
          </Link>
          <Link onClick={()=> setDisplayMenu(!displayMenu)} href="#about" className="flex gap-3  border-gray-500 items-center border-b w-fit p-2 ">
          <FcReading className="text-violet-400" />
            <button className={`introButtons capitalize hover:scale-x-75 duration-125 `}>about</button>
          </Link>
          <Link onClick={()=> setDisplayMenu(!displayMenu)} href="#experience" className="flex gap-3 items-center  border-gray-500 border-b w-fit p-2 ">
          <GiAchievement className="text-violet-400" />
            <button className={`introButtons capitalize hover:scale-x-75 duration-125 `}>experience</button>
          </Link>
          <Link onClick={()=> setDisplayMenu(!displayMenu)} href="#skills" className="flex gap-5   border-gray-500 items-center border-b w-fit p-2 ">
          <GiSkills className="text-violet-400" />
            <button className={`introButtons capitalize hover:scale-x-75 duration-125 `}>skills</button>
          </Link>
          <Link onClick={()=> setDisplayMenu(!displayMenu)} href="#projects" className="flex  border-gray-500 gap-3 items-center border-b w-fit p-2 ">
          <AiOutlineFundProjectionScreen className="text-violet-400" />
            <button className="introButtons capitalize hover:scale-x-75 duration-125 ">projects</button>
          </Link>
          <Link onClick={()=> setDisplayMenu(!displayMenu)} href="#testimonials" className="flex gap-3 items-center  border-gray-500 border-b w-fit p-2 ">
          <MdOutlinePreview className="text-violet-400" />
            <button className="introButtons capitalize hover:scale-x-75 duration-125 ">Testimonials</button>
          </Link>
          <Link onClick={()=> setDisplayMenu(!displayMenu)} href="#contacts" className="flex gap-3  border-gray-500 items-center border-b w-fit p-2 ">
          <MdContactMail className="text-violet-400" />
            <button className="introButtons capitalize hover:scale-x-75 duration-125 ">Contacts</button>
          </Link>
          
          </div>
          <button onClick={()=> setDisplayMenu(!displayMenu)} className="hover:text-orange-400"><IoClose className="text-4xl bg-[rgb(36,36,36)] text-slate-300 "  /></button>
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
                  "Hi, there! I'm <Joffrey/>",
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
          <h2 className=" text-sm uppercase text-gray-500 pb-2 mt-5 tracking-[5px]">
          {/* GREAT APE&#39;S CODE */}
          code like greate apes
        </h2>
          </div>
      </div>
    </div>
  )
}

export default Introduction