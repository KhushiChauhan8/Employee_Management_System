import React, { useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLoaclStorage, setLocalStorage } from './utils/localStorage'

const App = () => {

  const [user, setUser] = useState(null)
  const handleLogin = (email, password) => {
    if(email == 'admin@me.com' && password == '123'){
      console.log('this is admin')
    }else if(email == 'user@me.com' && password == '123'){
      console.log('this is user')
    }else{
      alert("Invalid Credentials")
    }
  }

  

  return (
    <>
      {!user ? <Login handleLogin={handleLogin}/> : ''}
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard /> */}
    </>
  )
}

export default App