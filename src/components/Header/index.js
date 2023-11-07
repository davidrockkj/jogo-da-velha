/* COMPONENTE HEADER
 * Logo
 * Sobre
 * Menu
 */

import React from 'react'

import './styles.css'
import LogoDavid from '../../objects/LogoDavid'
import AboutLink from '../../objects/AboutLink'
import Menu from '../../objects/Menu'

const Header = () => {  
  return (
    <header className='header'>
        <LogoDavid />
        <AboutLink />
        <Menu />
        
    </header>
  );
}
export default Header;