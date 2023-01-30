import { useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import AcoountCreateForm from './components/AcoountCreateForm'
import './App.css'
import RegisterComponent from './components/RegisterComponent'
import Home from './components/Home'
import Profile from './components/Profile';
import Login from './components/Login'
import Deposite from './components/Deposite'
import Withdrawl from './components/Withdrawl'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route element={<RegisterComponent/>}>
          <Route path='/' element={<AcoountCreateForm/>}/>
          <Route path='/login' element={<Login/>}/>
        </Route>
        <Route element={<Home/>}>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/deposite' element={<Deposite/>}/>
          <Route path='/withdraw' element={<Withdrawl/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
