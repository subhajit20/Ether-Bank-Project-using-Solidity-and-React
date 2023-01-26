import React,{useContext,useState} from 'react';
import { useEffect } from 'react';
import {WalletAuthContext} from '../contexts/AuthContext'
import {useNavigate} from 'react-router-dom'

function AcoountCreateForm() {
    const navigate = useNavigate()
    const [name,setName] = useState();
    const [address,setAddress] = useState();
    const [error,setError] = useState({status:"",msg:""});
    const {account,OpeningAccount,flag,checkAccountExist,setcheckAccount,exist} = useContext(WalletAuthContext);

    async function createAccount(e){
        e.preventDefault();

        if(name == '' || address != account){
            setcheckAccount(false)
            setError({
                status:true,
                msg:<div class="alert alert-danger" role="alert">
                    Fill The form correctly...
              </div>
            });

            setTimeout(()=>{
                setError({
                    status:"",
                    msg:""
                });
            },2000)
        }else{
            try{
                await OpeningAccount(address,name);
            }catch(e){
                console.log(flag)
                console.log(e)
            }
        }
    }

  return (
    <div className="container mt-5">
        {
            error.status == true ? error.msg : error.msg
        }
        {
            flag.status == true ? flag.msg : flag.msg
        }
        {
            account != null ? <form>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Enter Account Public Key</label>
                <input type="text" onChange={(e)=>setAddress(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Enter Name</label>
                <input type="text" onChange={(e)=>setName(e.target.value)} className="form-control" id="exampleInputPassword1"/>
            </div>
            <button type="submit" className="btn btn-primary" onClick={createAccount}>Create Account</button>
        </form> : "Please Connect Your Metamask Wallet At first"
        }
    </div>
  )
}

export default AcoountCreateForm