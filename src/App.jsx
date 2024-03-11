import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import {Home}  from './Pages/Home'
import About from './Pages/About'
import Skills from './Pages/Skills'
import {Portfolio} from './Pages/Portfolio'
import Contact from './Pages/Contact'
import Navbar from './Components/Navbar'
const App = () => {
  return (
    <div>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          {/* <Route index element={<Home/>}/> */}
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/contact' element={<Contact/>}/>
        
        </Routes>
      </BrowserRouter>
     
    </div>
  )
}

export default App
