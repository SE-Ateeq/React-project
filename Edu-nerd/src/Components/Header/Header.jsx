import React, {useRef} from 'react'

import { Container } from 'reactstrap';
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

const Header = () => {

  const menuRef = useRef()

  const menuToggle = ()=> menuRef.current.classList.toggle("active_menu")
  return (
   <header className='header'>
    <Container>
    <div className="navigation d-flex align-items-center justify-content-between">
      <div className="logo">
        {/* <img src="../src/assets/logo.png" alt="" /> */}
        <h2 className='d-flex align-items-center'>
          Edu-Nerd 
        </h2>
      </div>
      <div className="nav d-flex align-items-center gap-5">
        <div className="nav_menu" ref={menuRef} onClick={menuToggle}>
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
          <p className='mb-0 d-flex align-items-center gap-2'><i className="fa-solid fa-phone"></i> +923404242984</p>
        </div>
      </div>
      <div className="mobile_menu">
        <span><i className="fa-solid fa-bars" onClick={menuToggle}></i></span>
      </div>
    </div>
    </Container>
   </header>
  )
}

export default Header;