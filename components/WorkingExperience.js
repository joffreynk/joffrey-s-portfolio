import React from 'react'
import ExperienceCard from './ExperienceCard'
import styles from './styles.module.css'


const WorkingExperience = () => {
  const experience = [
    {
      job: 'Software Engineer',
      company: 'Microverse',
      type:'Full-Time',
      years: 'April 2022 - Now',
      expr:[
        'Review more than 30 projects',
        'Gave Feedback more than 50 people',
        'Team-working',
        'Remote Work'
      ]
    },
    {
      job: 'ICT Teacher',
      company: 'Maarif School',
      type:'Full-Time',
      years: 'Sept 2021 - Now',
      expr:[
        'Provide technical support and assistance to coworkers',
        '2 years of teaching in the Cambridge system',
        'Designing banners and certificates',
        'Help Desk',
        'Classroom management'
      ]
    },
    {
      job: 'ICT coordinator',
      years: 'Jan 2021 - August 2021',
      company: 'Higherlife Foundation',
      type:'Full-Time',
      expr:[
        'Program Creation and elaboration',
        'Taught 1000+ people computer science',
        '7 months of technical support and computer maintenance'
      ]
    },
    {
      job: 'Internship',
      company: 'Burundi Revenue Authority',
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
    className='h-fit relative flex flex-col overflow-hidden text-left md:flex-row  px-4 sm:px-10 justify-evenly mx-auto items-center'>
        <h3 className={`absolute top-20 font-bold ${styles.headertext} uppercase tracking-[10px] es:tracking-[15px] sm:tracking-[20px] text-gray-500 text-4xl`}>Experience</h3>
        <div className='grid md:grid-cols-2 mt-36 mb-14 gap-8 md:gap-10 snap-x snap-mandatory' >
            
            {
              experience.map(ex=><ExperienceCard key={ex.company} ex={ex} />)
            }
        </div>

    </div>
  )
}

export default WorkingExperience