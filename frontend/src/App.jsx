import React from 'react'
import {
  BrowserRouter as Router, Routes, Route, Navigate
} from 'react-router-dom'
import Login from './pages/Auth/Login'
import SignUp from './pages/Auth/SignUp'
import Income from './pages/Dashboard/Income'
import Home from './pages/Dashboard/Home'
import Expense from './pages/Dashboard/Expense'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path='/dashboard' element={<Home />} />
          <Route path='/income' element={<Income />} />
          <Route path='/expense' element={<Expense />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App


const Root = () => {
  //check for token in local storage

  const isAuthenticated = !!localStorage.getItem('token')
  // return to dashboard if authenticated otherwise to login
  return (
    isAuthenticated ? (
      <Navigate to="/dashboard" />)
      : (<Navigate to="/login" />

      )
  )
}