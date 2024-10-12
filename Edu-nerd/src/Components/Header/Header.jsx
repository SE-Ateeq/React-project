import React from 'react'
// import {Container} from "react"
import "./Header.css";

const navLinks = [
  {
    display: "Home",
    url: "#"
  },
  {
    display: "About",
    url: "#"
  },
  {
    display: "Courses",
    url: "#"
  },
  {
    display: "Pages",
    url: "#"
  },
  {
    display: "Blog",
    url: "#"
  },
]



function Header() {
  return (
   <header className='header'>
    <div className="navigation d-flex align-items-center justify-content-between">
      <div className="logo">
        {/* <img src="../src/assets/logo.png" alt="" /> */}
        <h2 className='d-flex align-items-center'>
          Edu-Nerd 
        </h2>
      </div>
      <div className="nav">
        <div className="nav_menu">
          <ul className="nav_list">

          {
            navLinks.map((item,index)=>(
              <li  key={index} className="nav_item">
                <a href={item.url}>{item.display}</a>
              </li>
            ))
          }


           
          </ul>
        </div>
        <div className="nav_right">
          <p className='mb-0 d-flex align-items-center gap-3'><i className="fa-solid fa-phone"></i> +923404242984</p>
        </div>
      </div>
    </div>
   </header>
  )
}

export default Header;