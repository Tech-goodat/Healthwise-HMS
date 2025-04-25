import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home'
import SignUp from './SignUp'
import DashBoard from './DashBoard'
const App = () => {
  return (
   <Router>
    
    <div className='bg-zinc-900 min-h-screen text-white '>
      <Routes >
        
        <Route path="/" element={<Home />} />
        <Route path="/sign up" element={<SignUp />} />
        <Route path="/dashboard" element={<DashBoard />} />
        
      </Routes>
      </div>
    
   </Router>
  )
}

export default App
