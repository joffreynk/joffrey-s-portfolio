import React from 'react'
import TestimonailCard from './TestimonailCard'
import styles from './styles.module.css'


const Testimonials = () => {
  return (
    <div 
    className='h-fit relative flex flex-col overflow-hidden text-left md:flex-row  px-4 sm:px-10 justify-evenly mx-auto items-center'>
        <h3 className={`absolute top-20 font-bold ${styles.headertext} uppercase tracking-[6px] es:tracking-[12px] sm:tracking-[20px] text-gray-500 text-2xl sm:text-4xl`}>Testimonials</h3>
        <div className='grid md:grid-cols-2 mt-36 mb-14 gap-8 md:gap-10 snap-x snap-mandatory' >
            <TestimonailCard />
            <TestimonailCard />
            <TestimonailCard />
            <TestimonailCard />
        </div>

    </div>
  )
}

export default Testimonials