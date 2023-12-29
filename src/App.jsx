import React from 'react'
import "./app.scss"
import  Navbar  from './components/navbar/navbar'
import Land from './components/land/Land'
import Parallax from './components/parallax/Parallax'
import Project from './components/projects/Projects'

const App = () => {
  return (
    <div>
      <section id='Homepage'>
        <Navbar/>
        <Land/>
      </section>
      <section id='About'>About</section>
      <section id='skils'><Parallax type="skils"/></section>
      <section>Skils</section>
      <section id="projects"><Parallax type="projects"/></section>
      <section><Project/></section>
      {/* <section><Project/></section>
      <section><Project/></section> */}
      {/* <section id='Contact'>Contacts</section> */}
      
    </div>
     
    
  )
}

export default App

