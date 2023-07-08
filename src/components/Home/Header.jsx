import React from 'react'
import './header.css'
function Header() {
  const handleButtonClick = () => {
   
    window.open('../../../public/front-end resume.pdf');
  };

  return (
 
         <div className='text-right'>
    <button onClick={handleButtonClick} className=" btn2 mt-12 px-10 py-5 relative border border-white text-white uppercase font-semibold tracking-wider leading-none overflow-hidden hover:text-black" type="button">
      <span className="absolute inset-0 bg-white"></span>
      <span className="absolute inset-0 flex justify-center items-center font-bold"> 
      Download Resume
      </span>
      Download Resume
    </button>
    </div>
  );
}

export default Header