import React from 'react'
import { useEffect } from 'react';
import { useContext } from 'react';
import {WalletAuthContext} from '../contexts/AuthContext';

function Profile() {
  const {account,checkAccountExist,accountDetails} = useContext(WalletAuthContext);

  useEffect(()=>{
    checkAccountExist(account);
    console.log(accountDetails)
  },[])
  return (
    <div>
      <h1>This is user's profile</h1>
    </div>
  )
}

export default Profile