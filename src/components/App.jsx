import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home'
const App = () => {
  return (
   <Router>
    
    <div className='bg-zinc-900 text-white h-screen'>
      <Routes >
        
        <Route path="/" element={<Home />} />
        
      </Routes>
      </div>
    
   </Router>
  )
}

export default App
