import React from 'react'
import About from '../About/About'
import Background from '../Background/Background'
import Header from './Header'
import HeroSection from './HeroSection'
import Contact from '../Background/Contact/Contact'
import Skills from './Skills/Skills'
import Project from '../Projects/Project'
// import ProjectCard from '../Projects/ProjectCard'
 

export default function Home() {
  return (
    <>
    <Background />
    <div className='max-w-7xl mx-auto'>
    <Header />
    <HeroSection />
    <About />
    <Skills />
    <Project />
    <Contact />
    {/* <ProjectCard /> */}
    </div>


    </>
  )
}
