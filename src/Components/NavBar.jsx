import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'


function NavBar() {
  return (
    <>
      <div className='wrapOpciones'>
        <div className='opcionMenu'><Link to='/'>Home</Link></div>
        <div className='opcionMenu'><Link to='/login'>Login</Link></div>
        <div className='opcionMenu'><Link to='/registro'>Registro</Link></div>
      </div>
    </>
  )
}

export default NavBar