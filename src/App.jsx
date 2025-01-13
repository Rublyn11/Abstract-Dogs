import { useState } from 'react';
import Header from './components/header';
import Swipe from './components/swipe';
import HeaderTest from './components/home';
import About from './components/about';
import './App.css';

function App() {

  return (
    <>
    <div className='page'>
      <Header />
      <HeaderTest/>
      <Swipe/>
      <About/>
    </div>
    </>
  )
}

export default App
