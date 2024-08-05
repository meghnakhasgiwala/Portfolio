import React from 'react'

//----------------Components-----------------
import NavBar from './Components/NavBar'
//---------------------------------------------

//!------------Pages-------------------------
import Home from "./Pages/Home/Home.jsx"
import Contact from "./Pages/Contact/Contact.jsx"
import About from "./Pages/About/About.jsx"
import Skills from "./Pages/Skills/Skills.jsx"
//!-----------------------------------------------------

export default function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <About/>
      <Skills/>

    </div>
    
    
  )
}
