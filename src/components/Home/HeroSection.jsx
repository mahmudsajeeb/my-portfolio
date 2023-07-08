import React from 'react'
import Typed from "react-typed";

function HeroSection() {
  return (
    <div className='p-4 lg:flex justify-evenly mt-20 items-center'>
      <div>
      <h3 className='text-2xl font-bold text-white'>Hi, I'm</h3>
      <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ffff00] to-cyan-500">
     
  Sajib Miah
</h1>
 
      <Typed className="text-white text-4xl font-bold"
          strings={[
            "Diploma In Computer Engineer",
            "Specialized in React.js",
            "MERN stack Web Developer",
            
          ]}
          typeSpeed={150}
          backSpeed={100}
          loop
        />
    <p className='text-white '>Create an interactive data visualization dashboard that fetches real-time data from an API and presents <br />  it through visually   appealing charts and graphs. The dashboard features a responsive <br /> user interface implemented using HTML, CSS, and a <br /> CSS framework like Tailwind or Bootstrap.
    </p>
      </div>

      <div>
        <img className='w-[400px] rounded' src="https://i.ibb.co/cJrFTTZ/pp-1.jpg" alt="" />
      </div>
    </div>
  )
}

export default HeroSection