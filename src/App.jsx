import { useState } from 'react'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'

import HeaderLinks from './data/headerLinks.js'

function App() {

  return (
    <>
      <Header links={HeaderLinks}/>

      <Main /> 

      <Footer />
    </>
  )
}

export default App
