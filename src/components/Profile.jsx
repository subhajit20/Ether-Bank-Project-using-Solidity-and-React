import React from 'react'
import { useEffect } from 'react';
import { useContext } from 'react';
import {WalletAuthContext} from '../contexts/AuthContext';

function Profile() {
  const {exist,account,checkAccountExist,accountDetails} = useContext(WalletAuthContext);

  useEffect(()=>{
      checkAccountExist(account);
  },[])
  return (
    <div>
      {accountDetails != undefined ? <div>
        <p>Name : {accountDetails[0]}</p>
        <p>Address : {accountDetails[1].substr(0,5)}...{accountDetails[1].substr(-4)}</p>
        <p>Deposite Amount : {accountDetails[2]}</p>
      </div> : "Ookkk"}
    </div>
  )
}

export default Profile