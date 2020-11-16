import React from 'react'
import {Link} from 'react-router-dom'

import './styles.css'

const Header = () => (
  <header className="main-header">
    <Link to="/"><span className="logo">Christie</span></Link>
    <div className="links">
      <Link to="/detectives">Detetives</Link>
      <Link to="/about">Sobre</Link>
    </div>
  </header>
)

export default Header