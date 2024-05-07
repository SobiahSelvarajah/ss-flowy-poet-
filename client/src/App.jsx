import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from './pages/homepage/Homepage'
import About from './pages/about/About'
import Gallery from './pages/gallery/Gallery'
import Dictionary from './pages/dictionary/Dictionary'

const App = () => {
  return (
    <BrowserRouter> 
      <Routes>
        <Route index element={<Homepage/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='gallery' element={<Gallery/>}/>
        <Route path='dictionary' element={<Dictionary/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App