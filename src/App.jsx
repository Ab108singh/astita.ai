import React, { useState } from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import Career from './pages/Career'
import Contacts from './pages/Contacts'
import About from './pages/About'


const App = () => {


  return (
    <div >
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/career' element={<Career/>}/>
        <Route path='/contacts' element={<Contacts/>}/>

      </Routes>
      
    </div>
  )
}

export default App
