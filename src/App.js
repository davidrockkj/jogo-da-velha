import React from 'react'
import './App.css'

import Label from './objects/Label';
import Input from './objects/Input';

import Header from './components/Header/index'
import Hashtag from './components/Hashtag';

const App = () => (
  <main className='app'>
    <Header />
    <Hashtag />
    <Input value='show' />
    <Label content='Mostrar eventos' />
  </main>
);

export default App;
