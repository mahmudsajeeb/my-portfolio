import React from 'react'

function About() {
  return (
    <div className='text-white text-center mt-20'>
        <h1 className='text-5xl font-bold'>About <span className='text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ffff00] to-cyan-500'>Me</span></h1>


        <div className='lg:grid lg:grid-cols-2 mt-16  '>
          <div>
            <img className='w-[500px] h-[450px]' src="https://i.ibb.co/jhPfGDw/IMG-20220111-161803-506.jpg" alt="" />
          </div>
          <div>
          <h1 className='text-4xl font-bold'>I'm Sajib & I am a Web Developer</h1>

          <div className='flex mt-5 text-[18px] justify-between'>
            <div>
            <h4> <span className='text-lime-500 font-bold'>Age:</span>24</h4>
            </div>

            <div>
              <h4><span className='text-lime-500 font-bold'>Freelancer</span> : Available</h4>
            </div>
          </div>
          <div className='flex mt-5 text-[18px] justify-between'>
            <div>
            <h4 ><span className='text-lime-500 font-bold'>Gender</span>: <span>Male</span></h4>
            </div>

            <div>
              <h4><span className='text-lime-500 font-bold'>Phone</span>:  +8801965013808</h4>
            </div>
          </div>
          <div className='flex mt-5 text-[18px] justify-between'>
            <div>
            <h4 ><span className='text-lime-500 font-bold'>Language</span>:English,Bangla  </h4>
            </div>

            <div>
              <h4><span className='text-lime-500 font-bold '>Email</span>:  saifurrahmansajib37@gmail.com</h4>
            </div>
          </div>

        <div className='flex mt-8  justify-between'>
        <div className='border p-12 rounded'>
            <h1 className='text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ffff00] to-cyan-500'>35+</h1>
            <h2 className='text-2xl text-lime-500'>--Complete Projects</h2>
          </div>
          <div className='border p-12 rounded'>
            <h1 className='text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ffff00] to-cyan-500'>60+</h1>
            <h2 className='text-2xl text-lime-500'>--Fiverr Projects  </h2>
          </div>
        </div>
          </div>
         

   

        </div>
        
    </div>
  )
}

export default About