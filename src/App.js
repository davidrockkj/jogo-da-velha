import React from 'react'
import './App.css'

import Checkbox from './objects/Checkbox';

import Header from './components/Header/index'
import Hashtag from './components/Hashtag';

const App = () => (
  <main className='app'>
    <Header />
    <Hashtag />
    <Checkbox type='checkbox' id='show' value='show' content='Mostrar eventos' />
  </main>
);

export default App;
