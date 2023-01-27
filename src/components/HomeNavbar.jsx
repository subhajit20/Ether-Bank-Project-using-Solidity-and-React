import React from 'react'
import { useContext } from 'react'
import {WalletAuthContext} from '../contexts/AuthContext'
import { Link } from 'react-router-dom';

function HomeNavbar() {
    const {account} = useContext(WalletAuthContext);
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/profile" className="nav-link active" aria-current="page">Profile</Link>
        </li>
        <li className="nav-item">
          <Link to="/deposite" className="nav-link active" aria-current="page">Deposite</Link>
        </li>
      </ul>
        <button className={`btn btn-outline-success  ${account != null ? "disabled" : ""}`} type="submit" >{account != null ? `Account : ${account.substr(0,5)}...${account.substr(-4)}` : "Connect"}</button>
    </div>
  </div>
</nav>
  )
}

export default HomeNavbar