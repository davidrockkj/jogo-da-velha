import React from 'react'
import './App.css'

import Label from './objects/Label';

import Header from './components/Header/index'
import Hashtag from './components/Hashtag';

const App = () => (
  <main className='app'>
    <Header />
    <Hashtag />
    <Label content='Mostrar eventos' />
  </main>
);

export default App;
