import React from 'react'
import {Input,Button} from './index'

function ContactUs() {
  return (
    <div className=' flex items-center justify-center w-full mt-10 mb-10 '>
    <div className='mx-auto w-full max-w-xl
    bg-gray-100 rounded-xl p-10 border border-black/10'>
    <h1 className='font-bold text-3xl text-center'>
    Contact Us</h1>
    <Input 
      label="full Name:"
      type="text"
      placeholder="Enter your full name"
      className="mb-3"
    />
    <Input 
      label="Phone Number:"
      type="text"
      placeholder="Enter Phno"
      className="mb-3"
    />
      <label htmlFor="">Massege:</label>
      <textarea name="" id="" placeholder='Massege:' className='w-full p-2 shadow-lg' rows="4"></textarea>
 
    <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl" childern={"submit"}></Button>

    <p className='p-3 text-gray-400'>Phno:03270343432</p>
    <p className='text-gray-400 px-3'>Email:safwan@123.exmple</p>
    </div>

      
    </div>
  )
}

export default ContactUs
