import React from 'react'
import './App.css'
import { Home } from './Pages/Home'
import About from './Pages/About'
import Skills from './Pages/Skills'
import { Portfolio } from './Pages/Portfolio'
// import Contact from './Pages/Contact'
// import Footer from './Pages/Footer'




const App = () => {
  return (
    <div>
      <Home/>
      <About/>
      <Skills/>
      <Portfolio/>
      {/* <Contact/>
      <Footer/> */}
    
    </div>
  )
}

export default App
