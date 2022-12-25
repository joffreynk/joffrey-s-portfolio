
function Contacts() {
  return (
    <div className='h-fit relative flex flex-col overflow-hidden text-left md:flex-row max-w-4/5 justify-evenly mx-auto items-center z-0'>
    <h3 className='absolute top-24 uppercase tracking-[15px] md:tracking-[20px] text-gray-500 text-4xl'>Contacts</h3>
    <div className='flex flex-col space-y-10 mt-32'>
      <h4 className='text-4xl font-semibold text-center'>I have what you are looking for{', '}
        <span className='italic text-yellow-900'>drop your message  down</span>
      </h4>
      <form className='w-fit flex flex-col space-y-2 '>
        <div className='flex space-x-2'>
          <input type="text" placeholder='first Name' name="" id="" className='contactInput '/>
          <input type="text" name="" placeholder='last Name' id="" className='contactInput'/>
        </div>
        <input type="text" placeholder='email' name="" id="" className='contactInput'/>
        <textarea name="" placeholder='your message please' id="" className='contactInput'  />
        <button >Submit</button>
      </form>
    </div>
    </div>
  )
}

export default Contacts