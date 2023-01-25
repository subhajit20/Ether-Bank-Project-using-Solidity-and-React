import React,{useState} from 'react'
import Web3 from 'web3';
import {useNavigate} from 'react-router-dom'
// import contractabi from '../components/contract_abi/CryptoWallet.json'

export const WalletAuthContext = React.createContext();

export const CONTRACT_ADDRESS = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";


/**
 * Contract Abi json
 */
const ABI = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "useraddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "flag",
        "type": "bool"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "message",
        "type": "string"
      }
    ],
    "name": "AlertMsg",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "flag",
        "type": "bool"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "msg",
        "type": "string"
      }
    ],
    "name": "Message",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "AccountBalance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "Customer",
    "outputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "useraddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "saving_amount",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "DepositeAmount",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "user",
        "type": "address"
      }
    ],
    "name": "GetAccount",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "address",
            "name": "useraddress",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "saving_amount",
            "type": "uint256"
          }
        ],
        "internalType": "struct User.UserDeatails",
        "name": "acc",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "GetContractBalance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "name_",
        "type": "string"
      }
    ],
    "name": "OpeningAccount",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "WithDraw",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "userarray",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]

function AuthContext({children}) {
    const navigate = useNavigate();
    const [account,setAccount] = useState();
    const [connected,setConnected] = useState(false);
    const [contract,setContract] = useState()
    const [checkAccount,setcheckAccount] = useState(false)
    const [flag,setFlag] = useState({status:"",msg:""});


    async function ConnectWallet(){
        let web3;
        if(typeof window.ethereum != 'undefined'){
          web3 = new Web3(window.ethereum);
          let accounts = await web3.eth.requestAccounts()
          /**
           * Connect with the contract
          */
          console.log(accounts)
          if(accounts.length > 0){
            setAccount(accounts[0])
            setConnected(true);
            let contract =  new web3.eth.Contract(ABI,CONTRACT_ADDRESS);
            setContract(contract)
          }else{
            console.log("Metamask is not installed...")
          }
          
        }else{
            console.log("Metamask is not installed...")
        }
    }

    async function OpeningAccount(address,name){
          try{
              console.log(address)
              let web3 = new Web3(window.ethereum);
              const account_opening = await contract.methods.OpeningAccount(address,name).send({
                  from:address,
                  to:CONTRACT_ADDRESS,
                  value: web3.utils.toWei('10', 'wei'),
              })
              if(account_opening.events.AlertMsg[1].returnValues[1]){
                  setFlag({
                      status:true,
                      msg:<div class="alert alert-success" role="alert">
                      Your Account has been created successfully...
                    </div>
                  });
                  setcheckAccount(true);
                  setTimeout(()=>{
                      setFlag({
                          status:"",
                          msg:""
                      });
                      navigate('/profile')
                  },2000)
              }
          }catch(err){
              setFlag({
                  status:false,
                  msg:<div class="alert alert-danger" role="alert">
                  Yor account is already exist...
                </div>
              });
              setcheckAccount(true)
              navigate("/profile");
              setTimeout(()=>{
                  setFlag({
                      status:"",
                      msg:""
                  });
              },2000)
          }
  }

  return <WalletAuthContext.Provider value={{
    ConnectWallet:ConnectWallet,
    account:account,
    connected:connected,
    OpeningAccount:OpeningAccount,
    flag:flag,
    checkAccount:checkAccount,
    setcheckAccount:setcheckAccount,
    contract:contract
  }}>
    {children}
  </WalletAuthContext.Provider>
}

export default AuthContext