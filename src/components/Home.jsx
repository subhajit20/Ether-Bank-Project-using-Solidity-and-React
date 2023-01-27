import React,{useContext,useEffect} from 'react'
import HomeNavbar from './HomeNavbar'
import { Outlet,useNavigate } from 'react-router-dom'
import {WalletAuthContext} from '../contexts/AuthContext'

function Home() {
    const navigate = useNavigate();
    const {checkAccount} = useContext(WalletAuthContext);
    useEffect(()=>{
        if(!checkAccount){
          navigate('/')
        }
    },[checkAccount])
  return (
    <div>
        <HomeNavbar/>
        <Outlet/>
    </div>
  )
}

export default Home