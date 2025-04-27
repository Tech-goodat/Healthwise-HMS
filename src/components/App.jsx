import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home'
import SignUp from './SignUp'
import DashBoard from './DashBoard'
import ClientSignUpForm from './ClientSignUpForm'
import UserModal from './UserModal'
import Programmes from './Programmes'
import ProgramsForm from './ProgramsForm'
const App = () => {
  return (
   <Router>
    
    <div className='bg-zinc-900 min-h-screen text-white '>
      <Routes >
        
        <Route path="/" element={<Home />} />
        <Route path="/sign up" element={<SignUp />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/client form" element={<ClientSignUpForm />} />
        <Route path="/usermodal/:id" element={<UserModal />} />
        <Route path="/programmes" element={<Programmes />} />
        <Route path="/programmesform" element={<ProgramsForm />} />
        
      </Routes>
      </div>
    
   </Router>
  )
}

export default App
