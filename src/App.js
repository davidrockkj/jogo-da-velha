import React from 'react'
import './App.css'

import Checkbox from './objects/Checkbox';
import About from './objects/About';
import AboutLink from './objects/AboutLink';

import Header from './components/Header/index'
import Hashtag from './components/Hashtag';

const App = () => (
  <main className='app'>
    <Header />
    <Hashtag />
    <Checkbox type='checkbox' id='show' value='show' content='Mostrar eventos' />

    <About>
      <AboutLink className='-light' />
    </About>
  </main>
);

export default App;
