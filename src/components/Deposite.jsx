import React,{useState,useContext} from 'react'
import { WalletAuthContext } from '../contexts/AuthContext'

function Deposite() {
  const {DepositeAmountToBank,flag} = useContext(WalletAuthContext);
  const [wei,setWei] = useState();
  const [currency,setCurrency] = useState()

  function DepositeToBank(){
    DepositeAmountToBank(wei,currency)
  }

  function onSelectedCurrency(e){
    setCurrency(e.target.value)
  }


  return (
    <div style={{"display":"flex","justifyContent":"center","alignItems":"center"}}>
        <div className="row g-3 align-items-center" >
          {
            flag.status ? <p>{flag.msg}</p>  : <p>{flag.msg}</p>
          }
            <div className="col-auto">
                <label for="inputPassword6" className="col-form-label">Enter Ether Amount</label>
            </div>
            <div className="col-auto">
                <input type="number" onChange={(e)=>setWei(e.target.value)} id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline"/>
            </div>
            <div className="col-auto">
                <select name="currency" className="form-select form-select-md mb-3" aria-label=".form-select-lg example" id="" onChange={onSelectedCurrency}> 
                  <option select>Select Currency</option>
                  <option value="wei">Wei</option>
                  <option value="ether">Ether</option>
                </select>
            </div>
            <div className="col-auto">
                <span id="passwordHelpInline" className="form-text">
                At least 1 or above wei should be deposite.
                </span>
            </div>
            <button type="button" className="btn btn-warning" onClick={DepositeToBank}>Deposite</button>
            </div>
    </div>
  )
}

export default Deposite