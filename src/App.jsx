import { useState } from 'react'
// import logo from './logo.svg'
import Nav from './components/Nav'
import About from './components/About'
import Events from './components/Events'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Nav />
      <div id='about'>
        <About />
      </div>

      <Events />
      <div id='footer'>
        <Footer />
      </div>
    </>
  )
}

export default App
