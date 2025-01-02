import './App.css'
import { Navbar } from './components/navbar'
import { Home } from './components/Home'
import { EgState } from './components/EgState'
import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Footer } from './components/Footer'
import { Usestate } from './components/Usestate'
import { Egaxios } from './components/Egaxios'
import { Useref } from './components/Useref'
import { UseContext } from './components/UseContext'
import { UseMemo } from './components/UseMemo'


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar name="Mathav Ramalingam"/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/egstate' element={<EgState />} />
      <Route path='/Usestate' element={<Usestate/>}/>
      <Route path='Egaxios' element={<Egaxios />} />
      <Route path='useref' element={<UseMemo />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
