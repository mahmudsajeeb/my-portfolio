 

import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './Projects.css';
// import useProject from '../../hooks/useProject';
import ProjectCard from './ProjectCard';

function Project() {
  const [tabIndex, setTabIndex] = useState(0);
  // const [project] = useProject();
  const [project,setProject] = useState([])
 
 
  useEffect(() => {
    fetch('skill.json')
      .then(res => res.json())
      .then(data => {
        console.log(data); // Log the received data
        setProject(data);
      })
      .catch(error => {
        console.error('Error fetching project data:', error);
      });
  }, []);

  const htmlcss = project.filter(item => item.category === "html")
  const bootstraps = project.filter(item => item.category === "bootstrap")
  const mern = project.filter(item => item.category === "mern")
  const react = project.filter(item => item.category === "react")
  // const tailwind = project.filter(item => item.category === "tailwind")
  const redux = project.filter(item => item.category === "redux")

  console.log(htmlcss)
  return (
    <div>
      <h1 className='text-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ffff00] to-cyan-500'>My Projects</h1>

      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <div className="overflow-x-auto scrollbar-hide">
          <TabList style={{ scrollbarWidth: 'none' }} className="flex  justify-center space-x-4 p-4">
            <Tab className="react-tabs__tab">All</Tab>
            <Tab className="react-tabs__tab">HTML/CSS</Tab>
            <Tab className="react-tabs__tab">Bootstrap</Tab>
            <Tab className="react-tabs__tab">MERN</Tab>
            <Tab className="react-tabs__tab">React Js</Tab>
            {/* <Tab className="react-tabs__tab">Tailwind</Tab> */}
            <Tab className="react-tabs__tab">Redux Js</Tab>
         
           
          </TabList>
        </div>
        <TabPanel className="react-tabs__tab-panel">
          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2'>
          
          {
            project.map(item => <ProjectCard key={item.id} item={item}/>)
          }
          </div>
        </TabPanel>
        <TabPanel className="react-tabs__tab-panel">
          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2'>
          
          {
            htmlcss.map(item => <ProjectCard key={item.id} item={item}/>)
          }
          </div>
        </TabPanel>
        <TabPanel className="react-tabs__tab-panel">
          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2'>
           
          {
            bootstraps.map(item => <ProjectCard key={item.id} item={item}/>)
          }
          </div>
        </TabPanel>
        <TabPanel className="react-tabs__tab-panel">
          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2'>
          
          {
            mern.map(item => <ProjectCard key={item.id} item={item}/>)
          }
          </div>
        </TabPanel>
        <TabPanel className="react-tabs__tab-panel">
          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2'>
         
          {
            react.map(item => <ProjectCard key={item.id} item={item}/>)
          }
          </div>
        </TabPanel>
        <TabPanel className="react-tabs__tab-panel">
          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2'>
         
          {
            redux.map(item => <ProjectCard key={item.id} item={item}/>)
          }
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default Project;

 