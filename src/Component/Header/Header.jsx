import React from 'react'
import "./Header.css"


import {Link} from 'react-router-dom'

function Header() {
 
  return (
    <header>
    <div className='Header'>
        <img className="nav" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Header" />
        <img className='avat' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="avatar" />
      
     <Link className='home' to='/'>Home</Link>
     
     <Link className='Categories' to='/about'>Categories</Link>
        
     
    </div>
    </header>
  )
}

export default Header