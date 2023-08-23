import React from 'react'

import './App.css'
import Navbar from './Pages/Admin/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Enterotp from './Pages/Auth/Enterotp'
import PhoneLogin from './Pages/Auth/Phonelogin'
import Login from './Pages/Auth/Login'
import Forget from './Pages/Auth/Forget'
import SignUp from './Pages/Auth/SignUp'
import {UserAuthContextProvider} from './context/userAuth'

const App = () => {
  return (
    <>

    <BrowserRouter>
       <UserAuthContextProvider>
      <Routes>
        <Route path="/" element={ <SignUp/>}/>  
        <Route path="/login" element={ <Login/>}/>  
        <Route path='/forget' element={ <Forget/>}  />
        <Route path='/phoneLogin' element={  <PhoneLogin/>}  />
        <Route path='/enterotp' element={ <Enterotp/>}/>
      <Route path='/navbar' element={<Navbar/>}/>
     
   
      </Routes>
        </UserAuthContextProvider>
    </BrowserRouter>
   
    
  
  

    </>
  )
}

export default App