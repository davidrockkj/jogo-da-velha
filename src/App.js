import React from 'react'
import './App.css'
import Profile from './img/davidrocha.png'

import Checkbox from './objects/Checkbox';
import About from './objects/About';
import AvatarProfile from './objects/AvatarProfile';

import Header from './components/Header/index'
import Hashtag from './components/Hashtag';
import HeaderInternal from './components/HeaderInternal';

const App = () => (
  <main className='app'>
    <Header />
    <Hashtag />
    <Checkbox type='checkbox' id='show' value='show' content='Mostrar eventos' />

    <About>
      <HeaderInternal />
      <AvatarProfile src={Profile} alt='Imagem David Rocha' />
    </About>
  </main>
);

export default App;
