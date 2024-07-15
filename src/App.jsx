import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import Footer from './components/Footer/Footer'
import Shop from './pages/Shop/Shop'
import About from './pages/About/About'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  
  return (
    <>
    <ToastContainer />
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
