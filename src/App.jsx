import { useState } from 'react'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'

import HeaderLinks from './data/headerLinks.js'
import { dcComicsLinks, shopLinks, dcLinks, sitesLinks } from './data/footerLinks.js'

function App() {

  return (
    <>
      <Header links={HeaderLinks} />

      <Main /> 

      <Footer dcComicsLinks={dcComicsLinks} shopLinks={shopLinks} dcLinks={dcLinks} sitesLinks={sitesLinks}/>
    </>
  )
}

export default App
