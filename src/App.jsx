import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import About from './pages/About/About'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Videos from './pages/Videos/Videos'
function App() {
  
  return (
    <>
    <ToastContainer />
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/videos' element={<Videos/>}/>
    </Routes>
    </>
  )
}

export default App
