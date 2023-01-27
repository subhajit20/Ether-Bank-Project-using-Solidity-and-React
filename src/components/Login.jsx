import React,{useState,useContext} from 'react';
import { WalletAuthContext } from '../contexts/AuthContext';

function Login() {
    const [address,setAddress] = useState();
    const {LoginAccount,flag} = useContext(WalletAuthContext);

    function Login(e){
        e.preventDefault();
        LoginAccount(address);
    }
  return (
    <div className='container'>
        {
            flag.status ? flag.msg : flag.msg
        }
        <form>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Enter Account Public Key</label>
                <input type="text" onChange={(e)=>setAddress(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <button type="submit" className="btn btn-primary" onClick={Login}>Create Account</button>
        </form>
    </div>
  )
}

export default Login