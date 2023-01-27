import React,{useState,useContext} from 'react'
import { WalletAuthContext } from '../contexts/AuthContext'

function Deposite() {
  const {DepositeAmountToBank} = useContext(WalletAuthContext);
  const [wei,setWei] = useState();

  function DepositeToBank(){
    DepositeAmountToBank(wei)
  }
  return (
    <div>
        <div className="row g-3 align-items-center">
            <div className="col-auto">
                <label for="inputPassword6" className="col-form-label">Enter Ether Amount</label>
            </div>
            <div className="col-auto">
                <input type="number" onChange={(e)=>setWei(e.target.value)} id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline"/>
            </div>
            <div className="col-auto">
                <span id="passwordHelpInline" className="form-text">
                At least 1 or above wei should be deposite.
                </span>
            </div>
            </div>
            <button type="button" class="btn btn-warning" onClick={DepositeToBank}>Deposite</button>
    </div>
  )
}

export default Deposite