import React from 'react'
import '../Style.css'
import { Link } from 'react-router-dom'


function HeaderNav() {
  return (
    <div className='headerNav'>
      <nav >
        <div class="nav">
          <span class="nav-item">
            <Link to="/" class="nav-link active"><p>Home</p></Link>
            <Link to="/about" class="nav-link active"><p>About</p></Link>
            <Link to="/projects" class="nav-link active"><p>Projects</p></Link>
            <Link to="/contact" class="nav-link active"><p>Contact</p></Link>
          </span>
        </div>
      </nav>
    </div>
  )
}

export default HeaderNav