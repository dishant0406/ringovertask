import React from 'react'
import './styles.scss'
import logo from '../../Assets/logo.svg'
import search from '../../Assets/search.svg'
import avatar from '../../Assets/avatar.svg'
import arrow from '../../Assets/arrow.svg'
import dblarrow from '../../Assets/dblarrow.svg'
const NavBar = () => {
  return (
    <div className="navbar">
      <img className='logo' src={logo}/>
      <div className='searchbar'>
        <input type="text" value='Search' className='searchbarinput'/>
        <a className='searchbtn'><img src={search}/></a>
      </div>
      <div className='avatar'>
        <img className='avimg' src={avatar}/>
        <img className='arrow'  src={dblarrow}/>
        <img className='arrow' src={arrow}/>
      </div>
      </div>
  )
}

export default NavBar