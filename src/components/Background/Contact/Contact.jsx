import React, { useState } from 'react'
import {FaPhone} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'
import {CiLocationOn} from 'react-icons/ci'
function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };
  return (
    < >
    <h1 className='text-center text-4xl font-bold text-white'><span className='text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ffff00] to-cyan-500'>Contact</span> Me</h1>

<div className='mt-20 lg:grid lg:grid-cols-2'>

    <div>

 
      <div className='text-white flex items-center '>
      <div className='mr-4 border p-3 border-yellow-500  rounded-full '>
      <FaPhone size={24} />
      </div>
      <div>
      <h1 className='text-2xl'>Phone</h1>
      <p>+8801965013808</p>
      </div>
      </div>
      <div className='text-white flex items-center mt-5 '>
      <div className='mr-4 border p-3 border-yellow-500  rounded-full '>
      <AiOutlineMail size={24} />
      </div>
      <div>
      <h1 className='text-2xl'>Email</h1>
      <p>saifurrahmansajib37@gmail.com</p>
      </div>
      </div>
      <div className='text-white flex items-center mt-5 '>
      <div className='mr-4 border p-3 border-yellow-500  rounded-full '>
      <CiLocationOn size={24} />
      </div>
      <div>
      <h1 className='text-2xl'>Location</h1>
      <p>Road-4,House-25,section-11,Uttara,Dhaka,Bangladesh</p>
      </div>
      </div>

    
      </div>


      <div>
      <form onSubmit={handleSubmit} className="bg-transparent">
  <div className="mb-4">
    <label htmlFor="name" className="block text-sm font-bold mb-1 text-white">Name</label>
    <input
      type="text"
      id="name"
      className="w-full px-4 py-2 border rounded text-white bg-transparent"
      placeholder="Enter your name"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  </div>
  <div className="mb-4">
    <label htmlFor="email" className="block text-sm font-bold mb-1 text-white">Email</label>
    <input
      type="email"
      id="email"
      className="w-full px-4 py-2 border rounded text-white bg-transparent"
      placeholder="Enter your email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
  </div>
  <div className="mb-4">
    <label htmlFor="message" className="block text-sm font-bold mb-1 text-white">Message</label>
    <textarea
      id="message"
      className="w-full px-4 py-2 border rounded text-white bg-transparent"
      rows="4"
      placeholder="Enter your message"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
    ></textarea>
  </div>
  <button type="submit" className="text-transparent border bg-clip-text bg-gradient-to-r from-[#ffff00] to-cyan-500text-white font-bold py-2 px-4 rounded">
    Submit
  </button>
</form>
      </div>
      
</div>
    </>
  )
}

export default Contact