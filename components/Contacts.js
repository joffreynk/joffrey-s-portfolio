import { useRef } from 'react';
import emailjs from '@emailjs/browser';


import styles from './styles.module.css'


function Contacts() {


  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5zv6kbo', 'template_5lp66f3', form.current, '50rqrZiPBh5xGPVaT')
      .then((result) => {
          console.log(result.text);
          e.target.reset()
      }, (error) => {
          console.log(error.text);
      });
  };



  return (
    <div className='mb-16 relative flex flex-col overflow-hidden text-left md:flex-row max-w-4/5 justify-evenly mx-auto items-center z-0'>
    <h3 className={`absolute top-20 font-bold ${styles.headertext} uppercase tracking-[10px] es:tracking-[15px] sm:tracking-[20px] text-gray-500 text-4xl`}>Contacts</h3>
    <div className='flex flex-col space-y-10 mt-52'>
      <h4 className='text-4xl font-semibold text-center text-gray-400'>I have what you are looking for{', '}
        <span className='italic text-violet-400'>drop your message  down</span>
      </h4>
      <form ref={form} onSubmit={sendEmail} className='w-fit flex flex-col mx-auto'>
        <div className='flex flex-col  md:flex-row md:space-x-4'>
          <input type="text" placeholder='first Name' name="firstName" id="firstName" className='contactInput '/>
          <input type="text" name="lastName" placeholder='last Name' id="lastName" className='contactInput'/>
        </div>
        <input type="email" placeholder='email' name="email" id="email" className='contactInput'/>
        <input type="text" placeholder='Subject' name="subject" id="subject" className='contactInput'/>
        <textarea name="message" placeholder='your message please' id="message" className='contactInput'  />
        <button type='submit' className={`text-xl sm:text-2xl rounded-xl ${styles.submitbtn}  text-gray-400`} >Submit</button>
      </form>
    </div>
    </div>
  )
}

export default Contacts