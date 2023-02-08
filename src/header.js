import React from "react";
import { Link } from "react-router-dom";
const Header = () =>{

    return(
      
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="javascript:void(0)"> <i className="fa fa-headphones "></i> NitorConnect</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mynavbar">
          <ul className="navbar-nav me-auto">
            <li className="nav-item px-3">
              <Link to="/" className="nav-link active" href="javascript:void(0)"><i className="fa fa-home "></i> Dashboard</Link>
            </li>

            <li className="nav-item px-3">
              <Link to="/dashbord2" className="nav-link active" href="javascript:void(0)"><i className="fa fa-home "></i> Dashboard2</Link>
            </li>

            <li className="nav-item px-3">
              <a className="nav-link active" href="javascript:void(0)"><i className="fa fa-people-group "></i> Customer</a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link active" href="javascript:void(0)"><i className="fa fa-suitcase "></i>  Product</a>
            </li>

            <li className="nav-item px-3">
              <a className="nav-link active" href="javascript:void(0)"><i className="fa fa-indian-rupee-sign "></i> Billing</a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link active" href="javascript:void(0)"><i className="fa fa-address-book "></i> Clients</a>
            </li>
          </ul>

          <form className="d-flex">
            <input className="form-control me-2" type="text" placeholder="search"/>
            <button className="btn btn-primary" type="button">Search</button>
          </form>

        </div>
      </div>
    </nav>
    
     
      
    
    )
    
    };
    export default Header;