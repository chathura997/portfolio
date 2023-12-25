import React from 'react'
import "./app.scss"
import  Navbar  from './components/navbar/navbar'

const App = () => {
  return (
    <div>
      <section id='Homepage'> 
        <Navbar/>
      </section>
      <section id='About'>About</section>
      <section id='Projects'>Projects</section>
      <section id='Contacts'>Contacts</section>
      
    </div>
        // "Homepage",
        // "About", 
        // "Projects", 
        // "Contacts", 
    
  )
}

export default App

