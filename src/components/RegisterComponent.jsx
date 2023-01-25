import React,{useEffect,useContext} from 'react'
import Navbar from './Navbar'
import { Outlet,useNavigate } from 'react-router-dom'
import {WalletAuthContext} from '../contexts/AuthContext'

function RegisterComponent() {
  const navigate = useNavigate();
    const {checkAccount} = useContext(WalletAuthContext);

    useEffect(()=>{
        if(checkAccount){
            navigate('/profile')
        }
    },[checkAccount])
  return (
    <div>
        <Navbar/>
        <Outlet />
    </div>
  )
}

export default RegisterComponent