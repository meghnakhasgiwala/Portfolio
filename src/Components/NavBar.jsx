import React from 'react'
import "./NavBar.css"
import logo from "../assets/logo1.png"


export default function NavBar() {
  return (
    <div id ="Navbar">
        <img src={logo}/>

        <h2>Portfolio</h2>
        <ul className="NavMenu">
            <li>Home</li>
            <li>About me</li>
            <li>Skills</li>
            <li>Contact</li>
        </ul>
        <div id='Navconnect'>Connect with me</div>
            
    </div>
  )
}
