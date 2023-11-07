import React from 'react'
import './App.css'

import Checkbox from './objects/Checkbox';
import About from './objects/About';
import AboutLink from './objects/AboutLink';
import IconClose from './objects/IconClose';
import LogoDavid from './objects/LogoDavid';

import Header from './components/Header/index'
import Hashtag from './components/Hashtag';

const App = () => (
  <main className='app'>
    <Header />
    <Hashtag />
    <Checkbox type='checkbox' id='show' value='show' content='Mostrar eventos' />

    <About>
      <LogoDavid />
      <AboutLink className='-light' />
      <IconClose />
    </About>
  </main>
);

export default App;
