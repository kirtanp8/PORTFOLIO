import React from 'react'
import { Button } from 'react-bootstrap'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Nav = () => {
  
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  const SidebarData = [
    {
      title: 'About',
      ref: '#about',
      cName: 'nav-text',
    },
    {
      title: 'Skills',
      ref: '#skills',
      cName: 'nav-text',
    },
    {
      title: 'Projects',
      ref: '#projects',
      cName: 'nav-text',
    },
    {
      title: 'Contact',
      ref: '#contact',
      cName: 'nav-text',
    }
  ]

  return (
    <>
    <div className='main-navigation-bar'>
      <ul className='nav-buttons'>
        <Button id='button-main-nav' href='#about'>About</Button>
        <Button id='button-main-nav' href='#skills'>Skills</Button>
        <Button id='button-main-nav' href='#projects'>Projects</Button>
        <Button id='button-main-nav' href='#contact'>Contact</Button>
      </ul>
    </div>
      <div className='hamburger-container'>
          <IconContext.Provider value={{ color: '#EDF5E1' }}>
            <div className='navbar'>
              <Link to='#' className='menu-bars'>
                <FaIcons.FaBars onClick={showSidebar} />
              </Link>
            </div>
            <div className={sidebar ? 'nav-menu active' : 'nav-menu'}>
              <ul className='nav-menu-items' onClick={showSidebar}>
                <li className='menu-bar-div'>
                  <Link to='#' className='menu-bars'>
                  <AiIcons.AiOutlineClose />
                  </Link>
                </li>
                {SidebarData.map((item, index) => { 
                  return (
                    <li key={index} className={item.cName}>
                        <Button id='button-menu' href={item.ref} className='nav-button'>{item.title}</Button>
                    </li>
                  )
                }          
                ) 
              }
              </ul>
            </div>
            </IconContext.Provider>
          </div>
    </>
  )
}

export default Nav
