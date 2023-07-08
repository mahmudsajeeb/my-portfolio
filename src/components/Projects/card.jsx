import React, { useState } from 'react';

// const ProjectCard = () => {
//   const [hovered, setHovered] = useState(false);

//   const handleHover = () => {
//     setHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setHovered(false);
//   };

//   const footerName = hovered ? 'Technologies: React, CSS' : 'Footer Name';
//   const footerDescription = hovered ? 'Technologies: React, CSS' : 'Footer Description';

//   return (
//     <div className="w-64 p-4 border border-gray-300 rounded-md shadow-md transition duration-300 hover:shadow-lg">
//       <img src="https://i.ibb.co/6mrfTtv/screencapture-mahmudsajeeb-github-io-html-css-course-website-responsive-2023-07-01-01-09-57.png" alt="ProjectCard Image" className="w-full h-40 object-cover rounded-t-md" />
//       <div className="p-4">
//         <h3 className="text-xl font-semibold">Title</h3>
//         <p className="text-gray-600">Description</p>
//       </div>
//       <div
//         className="flex flex-col items-center justify-center p-4  bg-transparent rounded-b-md transition duration-300  "
//         onMouseEnter={handleHover}
//         onMouseLeave={handleMouseLeave}
//       >
//         <div>
//           <h3 className="font-semibold text-white">{footerName}</h3>
//           <p className="text-sm text-white">{footerDescription}</p>
//         </div>
//         {hovered && (
//           <div className="mt-4">
//             <button className="px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded">Github</button>
//             <button className="px-4 py-2 mt-2 text-sm font-semibold text-white bg-green-500 rounded">Live Site</button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;
