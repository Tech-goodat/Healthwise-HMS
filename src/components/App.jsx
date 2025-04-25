import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home'
import SignUp from './SignUp'
import DashBoard from './DashBoard'
import ClientSignUpForm from './ClientSignUpForm'
const App = () => {
  return (
   <Router>
    
    <div className='bg-zinc-900 min-h-screen text-white '>
      <Routes >
        
        <Route path="/" element={<Home />} />
        <Route path="/sign up" element={<SignUp />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/client form" element={<ClientSignUpForm />} />
        
      </Routes>
      </div>
    
   </Router>
  )
}

export default App
