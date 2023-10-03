import React from 'react'
import '../Style.css'
import { Link } from 'react-router-dom'


function HeaderNav() {
  return (
    <div className='headerNav'>
        <Link to="/"><p>Home</p></Link>
        <Link to="/about"><p>About</p></Link>
        <Link to="/projects"><p>Projects</p></Link>
        <Link to="/contact"><p>Contact</p></Link>
    </div>
  )
}

export default HeaderNav