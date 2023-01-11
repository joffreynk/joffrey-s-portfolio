import React from 'react'
import ExperienceCard from './ExperienceCard'
import styles from './styles.module.css'


const WorkingExperience = () => {
  const experience = [
    {
      job: 'Software Engineer',
      company: 'Microverse',
      pic:'/experience/microverse.jpeg',
      type:'Full-Time',
      years: 'April 2022 - Now',
      expr:[
        'Obtained Full Stack Developer Certificate',
        'Completed the rigorous full-stack remote program where I created multiple projects using React, Ruby on Rails, HTML, NextJS, Sanity.io, Sass,  CSS, and Vanilla Javascript. Pair programmed remotely with other developers from all over the world',
        'Mentoring and guiding three junior developers in full-stack web development.',
        'Proposing improvements to code organization to improve code quality and overall performance.',
        'Leading weekly code review sessions and providing feedback and guidance on best coding practices.',
      ]
    },
    {
      job: 'ICT Teacher',
      company: 'Maarif School',
      pic:'/experience/maarif.png',
      type:'Full-Time',
      years: 'Sept 2021 - Now',
      expr:[
        'Maintaining a positive and productive learning environment and managing student behavior',
        'Developing lesson plans that align with curriculum standards and incorporate technology in an age-appropriate way',
        "communicating with parents and guardians about students' progress and technology usage",
        'Demonstrating ability to integrate technology into your lessons through use of interactive whiteboards, tablets, laptops and educational software',
        'Classroom management',
        'Provided individual and small group instruction to support students in mastering technology skills',
      ]
    },
    {
      job: 'ICT coordinator',
      years: 'Jan 2021 - August 2021',
      pic:'/experience/higherlife.png',
      company: 'HigherLife Foundation',
      type:'Full-Time',
      expr:[
        'Trained 1000+ people in data management and visualization(MS Access, Advanced Excel, and PowerPoint)',
        'Installed and maintained hardware and software systems.',
        'Provided technical support and troubleshooting computer and network problems.',
        'Taught various computer and technology-related classes to individuals and groups of all ages and abilities.',
        'Developed and delivered training materials, including lesson plans, handouts, and assessments.'
      ]
    },
    {
      job: 'Internship',
      company: 'Burundi Revenue Authority',
      pic:'/experience/obr.png',
      type:'Internship',
      years: 'May 2020 - July 2020',
      expr:[
        'Learned new tech in one month at work place',
        'made a full-stack leave management system'
      ]
    }
  ]
  return (
    <div 
    className='relative flex flex-col overflow-hidden text-left md:flex-row   px-4 sm:px-10 justify-evenly mx-auto items-center mb-16 '>
        <h3 className={`absolute top-20 font-bold ${styles.headertext} uppercase tracking-[10px] es:tracking-[15px] sm:tracking-[20px] text-gray-500 text-4xl`}>Experience</h3>
        <div className='grid w-3/4 md:grid-cols-2 mt-52 mb-14  gap-8 md:gap-14  snap-x snap-mandatory' >
            
            {
              experience.map(ex=><ExperienceCard key={ex.company} ex={ex} />)
            }
        </div>

    </div>
  )
}

export default WorkingExperience