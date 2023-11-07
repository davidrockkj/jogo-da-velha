import React from 'react'
import './styles.css'
import AboutLink from '../../objects/AboutLink';
import IconClose from '../../objects/IconClose';
import LogoDavid from '../../objects/LogoDavid';


const HeaderInternal = () => (
  <header className='header-internal'>
    <LogoDavid light />
    <AboutLink className='-light' />
    <IconClose />
  </header>
);

export default HeaderInternal;