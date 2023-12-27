import React from 'react'
import "./app.scss"
import  Navbar  from './components/navbar/navbar'
import Land from './components/land/Land'
import Parallax from './components/parallax/Parallax'

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
      <section>Project1</section>
      <section>Project2</section>
      <section>Project3</section>
      <section id='Contact'>Contacts</section>
      
    </div>
     
    
  )
}

export default App

