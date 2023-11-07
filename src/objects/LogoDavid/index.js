import React from 'react'
import DavidRocha from '../../img/logo.png'

const LogoDavid = () => (
  <img className='logo-david' src={DavidRocha}
  alt='Logo David Rocha Dev' />);

export default LogoDavid;

/**
 * Nem todo Object precisa de Style
 * Esse é um exemplo.
 * Pois, os Objects devem ser CRUS ao ponto de
 * conseguirmos manipulá-lo da melhor maneira 
 * para o componente que o inglobar
 */