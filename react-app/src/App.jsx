import './App.css'
import { Navbar } from './components/navbar'
import { Home } from './components/Home'
import { EgState } from './components/EgState'
import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Footer } from './components/Footer'


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar name="Mathav Ramalingam"/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/egstate' element={<EgState />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
