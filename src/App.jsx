import { useState } from 'react'
import React, { useEffect } from 'react';
import Navigation from './components/Navigation/Navigation'
import ContentHeader from './components/contentHeader/contentHeader'
import Contactform from './components/contactForm/Contactform'
import './App.css'
function App() {
  return (
    <>
      <Navigation/>
       <main className='main_container'>
        <ContentHeader/>
        <Contactform/>
       </main>
    </>
  )
}

export default App
