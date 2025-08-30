import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Nav() {
  return (
    <nav className='mt-10 flex justify-center gap-10'>
      <NavLink 
      style={(e)=>{
        return{
            color:e.isActive?"red":"",
            fontWeight:e.isActive?"bold":"",

        }
      }}
      to="/">home</NavLink>

      <NavLink 
      style={(e)=>{
        return{
            
            fontWeight:e.isActive?"bold":"",
            color:e.isActive?"red":""
        }
      }}
      to="/about">about</NavLink>

      <NavLink 
      style={(e)=>{
        return{
            fontWeight:e.isActive?"bold":"",
            color:e.isActive?"red":""
        }
      }}
      to="/user">user</NavLink>
    </nav>
  )
}

export default Nav