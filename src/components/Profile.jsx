import React from 'react'
import { useEffect } from 'react';
import { useContext } from 'react';
import {WalletAuthContext} from '../contexts/AuthContext';
import Web3 from 'web3';

function Profile() {
  const {exist,account,checkAccountExist,accountDetails} = useContext(WalletAuthContext);
  let web3 = new Web3(window.ethereum);
  

  useEffect(()=>{
      checkAccountExist(account);
  },[])
  return (
    <div style={{"display":"flex","justifyContent":"center","alignItems":"center"}}>
      <div style={{"display":"flex","flexDirection":"column","marginTop":"2rem"}}>
        {accountDetails != undefined ? <div>
          <p style={{"fontSize":"1.2rem","fontWeight":"bold"}}>Account Holder Name : {accountDetails[0]}</p>
          <p style={{"fontSize":"1.2rem","fontWeight":"bold"}}>Account Holder Metamask Address : {accountDetails[1].substr(0,5)}...{accountDetails[1].substr(-4)}</p>
          <p style={{"fontSize":"1.2rem","fontWeight":"bold"}}>Bank Account Balance : {accountDetails[2] >= 10**18 ? web3.utils.fromWei(accountDetails[2],"ether").split(".")[0]+"."+web3.utils.fromWei(accountDetails[2],"ether").split(".")[1].substr(-4)+" Ether" :  accountDetails[2]+" Wei"}</p>
        </div> : "Ookkk"}
      </div>
    </div>
  )
}

export default Profile