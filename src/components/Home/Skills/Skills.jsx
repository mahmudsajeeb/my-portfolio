import React from 'react'

function Skills() {
  return (
    <>
    <h1 className='text-center font-bold text-5xl mt-12 text-white '>My  <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#ffff00] to-cyan-500'>Skills</span></h1>
    <div className='grid lg:grid-cols-2 gap-5 mt-20 mb-20  grid-cols-1'>
     <div className="relative">
      <div className=" font-bold  ">
      <span className="text-2xl text-white px-1 py-0.5  ">HTML/CSS</span>
        
      </div>
      
      <progress className="progress progress-secondary w-full" value="80" max="100"><span className="text-white text-2xl font-bold ml-2">80%</span></progress>

    </div>
     <div className="relative">
      <div className=" font-bold  ">
      <span className="text-2xl text-white px-1 py-0.5  ">Bootstrap 5</span>
        
      </div>
      
      <progress className="progress progress-secondary w-full" value="70" max="100"><span className="text-white text-2xl font-bold ml-2">80%</span></progress>

    </div>
     <div className="relative">
      <div className=" font-bold  ">
      <span className="text-2xl text-white px-1 py-0.5  ">Tailwind CSS</span>
        
      </div>
      
      <progress className="progress progress-secondary w-full" value="80" max="100"><span className="text-white text-2xl font-bold ml-2">80%</span></progress>

    </div>
     <div className="relative">
      <div className=" font-bold  ">
      <span className="text-2xl text-white px-1 py-0.5  ">JavaScipt</span>
        
      </div>
      
      <progress className="progress progress-secondary w-full" value="60" max="100"><span className="text-white text-2xl font-bold ml-2">80%</span></progress>

    </div>
     <div className="relative">
      <div className=" font-bold  ">
      <span className="text-2xl text-white px-1 py-0.5  ">React JS</span>
        
      </div>
      
      <progress className="progress progress-secondary w-full" value="60" max="100"><span className="text-white text-2xl font-bold ml-2">80%</span></progress>

    </div>
     <div className="relative">
      <div className=" font-bold  ">
      <span className="text-2xl text-white px-1 py-0.5  ">Redux  </span>
        
      </div>
      
      <progress className="progress progress-secondary w-full" value="50" max="100"><span className="text-white text-2xl font-bold ml-2">80%</span></progress>

    </div>
     <div className="relative">
      <div className=" font-bold  ">
      <span className="text-2xl text-white px-1 py-0.5  ">Node Js</span>
        
      </div>
      
      <progress className="progress progress-secondary w-full" value="60" max="100"><span className="text-white text-2xl font-bold ml-2">80%</span></progress>

    </div>
     <div className="relative">
      <div className=" font-bold  ">
      <span className="text-2xl text-white px-1 py-0.5  "> Express Js</span>
        
      </div>
      
      <progress className="progress progress-secondary w-full" value="60" max="100"><span className="text-white text-2xl font-bold ml-2">80%</span></progress>

    </div>
     <div className="relative">
      <div className=" font-bold  ">
      <span className="text-2xl text-white px-1 py-0.5  "> Firebase</span>
        
      </div>
      
      <progress className="progress progress-secondary w-full" value="75" max="100"><span className="text-white text-2xl font-bold ml-2">80%</span></progress>

    </div>
         
       
           
    </div>
    </>
  )
}

export default Skills