import React from 'react'
import ExperienceCard from './ExperienceCard'


const WorkingExperience = () => {
  return (
    <div 
    className='h-fit relative flex flex-col overflow-hidden text-left md:flex-row  px-4 sm:px-10 justify-evenly mx-auto items-center'>
        <h3 className="absolute top-20 uppercase tracking-[15px] md:tracking-[20px] text-gray-500 text-4xl">Experience</h3>
        <div className='grid md:grid-cols-2 mt-36 mb-14 gap-8 md:gap-10 snap-x snap-mandatory' >
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
        </div>

    </div>
  )
}

export default WorkingExperience