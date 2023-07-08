import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({item}) => {
  // console.log(item,"item")
  const [hovered, setHovered] = useState(false);
  // const {image,name,details} =item
  const handleHover = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const footerTechnologies = hovered ?  item.tools :''
  // const footerDescription = hovered ? item.details : '';
  // const footerTechnologies = `${hovered ? 'Technologies:' item.technogies :''
  return (
    <div
      className="w-96 p-4 border border-gray-300 rounded-md shadow-md transition duration-300 hover:shadow-lg"
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={item.image}
        alt="ProjectCard Image"
        className="w-full h-40 object-cover rounded-t-md"
      />
      <div className="p-4">
        <h3 className="text-xl text-white font-semibold">{item.name}</h3>
        <p className="text-white">{item.details}</p>
      </div>
      <div className="flex flex-col items-center justify-center p-4 bg-transparent rounded-b-md transition duration-300">
        <div>
          <h3 className="font-semibold text-white">{footerTechnologies}</h3>
          {/* <p className="text-sm text-white">{footerDescription}</p> */}
        </div>
        {hovered && (
          <div className="mt-4 flex flex-row items-center">
          <Link to={item.github} target="_blank" rel="noopener noreferrer">

            <button className="px-4 py-2 mt-2 text-sm font-semibold text-white bg-blue-500 rounded">Github</button>
            </Link>
            <Link to={item.url} target="_blank" rel="noopener noreferrer">
            <button className="px-4 py-2 mt-2 text-sm font-semibold ml-2 text-white bg-green-500 rounded">Live Site</button>
            </Link>
           
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
