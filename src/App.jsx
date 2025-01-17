import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Dashboard from './Pages/Dashboard'
import Login from './Pages/Auth/LOgin'
import Register from './Pages/Auth/Register'
import AdminDashboard from './Pages/Admin/AdminDashboard'
import ProtectedRoute from './Components/ProtectedRoute'



function App() {

  return (
    <>
      <Router>
        <div className="">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Dashboard/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/admin' element={<ProtectedRoute><AdminDashboard/></ProtectedRoute>}></Route>
        </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
