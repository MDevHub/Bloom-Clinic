import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Services from './Components/Services'

const App = () => {
  useEffect (() => {
    Aos.init ({
      duration: 1000,
    });
  },[]);
  return (
    <div>
      <Header />
      <Hero />
      <Services />
    </div>
  )
}

export default App