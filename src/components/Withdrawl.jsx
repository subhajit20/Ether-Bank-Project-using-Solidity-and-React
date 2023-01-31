import React,{useState,useContext} from 'react'
import { WalletAuthContext } from '../contexts/AuthContext';

function Withdrawl() {
    const [withdaramount,setWithdrawAmount] = useState(0);
    const {WithdrawAmountToSelf} = useContext(WalletAuthContext);
    
    function withdarwMyAmount(){
        WithdrawAmountToSelf(withdaramount)
    }
  return (
    <div style={{"display":"flex","justifyContent":"center","alignItems":"center"}}>
        <div className="row g-3 align-items-center mt-5">
            <div className="col-auto">
                <label for="inputPassword6" className="col-form-label">Enter Ether Amount</label>
            </div>
            <div className="col-auto">
                <input type="number" onChange={(e)=>setWithdrawAmount(e.target.value)} id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline"/>
            </div>
            <div className="col-auto">
                <span id="passwordHelpInline" className="form-text">
                At least 1 or above wei should be deposite.
                </span>
            </div>
            <button type="button" class="btn btn-warning" onClick={withdarwMyAmount}>Deposite</button>
            </div>
    </div>
  )
}

export default Withdrawl