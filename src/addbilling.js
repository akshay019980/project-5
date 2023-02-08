import React, { useState } from "react";
import Header from "./header";
import { Navigate, useNavigate } from "react-router-dom";
import swal from "sweetalert";


const Addbilling = () =>{

    const navigate = useNavigate();
    const [pickAll, pickAllBilling] = useState([]);
    const [Name, pickBillingName] = useState('');
    const [Discount , pickBillingDiscount] = useState('');
    const [Payment, pickBillingPayment] = useState('');

    const getbilling = () =>{
         
        const  url ="http://localhost:1234/billing";
           fetch(url)
           .then((response)=>response.json())
           .then((serverArray)=>{
            pickAllBilling(serverArray)
           });
    }

   const save = () =>{
        const url="http://localhost:1234/billing"

        const BillingInfo = {
            "customername":Name,
            "totalDiscout":Discount,
            "paymentOption":Payment
        }
        const postOption = {
            headers :{'Content-Type': 'application/json'},
            method:'POST',
            body:JSON.stringify(BillingInfo)
        }
        fetch(url,postOption)
        .then((response)=> response.json())
        .then((serverArray)=>{
                getbilling()
            swal(` added succesfully`)
            navigate("/billing")   
            
        
        })

    }
    return(
        <>
        <Header/>

        <div className="container p-5">
            <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4 card mt-4">
                <div className="card-header bg-dark text-white text-center ">
                    <label>Billing-Portal</label>
                </div>
                <div className="card-body  m-2">
                    <div className="m-2">
                    <label>Add Customer Name</label>
                    <input className="form-control" value={Name} onChange={obj=> pickBillingName(obj.target.value)} type="text" placeholder="Add the Name"></input>
                    </div>

                    <div className="m-2">
                    <label>Total Discount  </label>
                    <input className="form-control" value={Discount} onChange={obj=> pickBillingDiscount(obj.target.value)} type="text" placeholder="Add the Name"></input>
                    </div>

                    <div className="m-2">
                    <label>Payment Option</label>
                    <input className="form-control" value={Payment} onChange={obj=> pickBillingPayment (obj.target.value)} type="text" placeholder="Add the Name"></input>
                    </div>
                    <div className="text-center m-2" >
                        <button className="btn btn-warning" onClick={save}>Save</button>

                    </div>
                </div>
               
                </div>
            </div>
        </div>

        </>
    )


}
export default Addbilling;