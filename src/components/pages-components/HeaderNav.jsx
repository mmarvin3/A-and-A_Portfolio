import React from 'react'
import '../../Style.css'
import { Link } from 'react-router-dom'


function HeaderNav() {
  return (
    <div className='headerNav'>
      <nav >
        <div class="nav">
          <span class="nav-item">
            <Link to="/" class="nav-link active"><p>Home</p></Link>
          </span>
          <span class="nav-item">
            <Link to="/about" class="nav-link active"><p>About</p></Link>
          </span>
          <span class="nav-item">
            <Link to="/projects" class="nav-link active"><p>Projects</p></Link>
          </span>
          <span class="nav-item">
            <Link to="/contact" class="nav-link active"><p>Contact</p></Link>
          </span>
        </div>
      </nav>
    </div>
  )
}

export default HeaderNav