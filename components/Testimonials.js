import React from 'react'
import TestimonailCard from './TestimonailCard'
import styles from './styles.module.css'


const Testimonials = () => {
  const testimonials = [
    
    {
      name:'Dario Alession',
      position:'Mechanical Engineer, MBA, software developer',
      url: "https://www.linkedin.com/in/dario-alessio",
      picture:'/testimonials/dario.jpeg',
      quote: "Joffrey is one of the finest programmers I have met. Years of study and practical experience combined with a character focused on problem-solving and getting the job done sense. On top of that, a great team member with excellent communication skills, and a great patient in teaching and helping junior programmers or teammates when stuck. He's also got the great talent to deal with the pressure of deadlines. If your company lives under that kind of pressure, he's certainly the right guy to hire."
    },
    {
      name:'David Vera Castillo',
      position:'Full-Stack Developer, Enterpreneur',
      url: "https://www.linkedin.com/in/davidveracastillo",
      picture:'/testimonials/david.jpeg',
      quote: "Joffrey is a remarkable developer. I know him because we worked together during the first weeks in Microverse, which were the most challenging. He is a reliable partner and skilled programmer. We were able to develop projects with tight deadlines, and he always had a great learning attitude while being generous with his knowledge. Our team benefitted a lot from his contributions when pair programming. I'm sure he will be an asset for any team he's on!"
    },
    {
      name:'Hans Zizold',
      position:'Telecommunication Engineer and full-stack developer',
      url: "https://www.linkedin.com/in/hanszizold",
      picture:'/testimonials/hans.jpeg',
      quote:"Joffrey is one of the best coding partners I had the luck to work with. He always had a clear idea of the projects we had to do and implemented them with some short elegant lines of code. He also took his time to help and encourage others to succeed."
    },
    {
      name:'Elson Otake',
      position:'Backend Developer, Code Reviewer',
      url: "https://www.linkedin.com/in/elsonotake",
      picture:'/testimonials/elson.jpeg',
      quote: "Joffrey is a fantastic software engineer. In some chats we usually did, he taught several concepts related to React, presenting all his technical knowledge. If you need to get a job done efficiently, Joffrey is the one for you."
    }
  ]
  return (
    <div 
    className='h-fit relative flex flex-col overflow-hidden text-left md:flex-row  px-4 sm:px-10 justify-evenly mx-auto items-center'>
        <h3 className={`absolute top-20 font-bold ${styles.headertext} uppercase tracking-[6px] es:tracking-[12px] sm:tracking-[20px] text-gray-500 text-2xl sm:text-4xl`}>Testimonials</h3>
        <div className='grid md:grid-cols-2 mt-36 mb-14 gap-8 md:gap-10 snap-x snap-mandatory' >
          {testimonials.map((t, i) => <TestimonailCard key={i} person={t} />)}
            
        </div>

    </div>
  )
}

export default Testimonials