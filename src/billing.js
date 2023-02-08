import React, { useState, useEffect } from "react";
import Header from "./header";
import { Link } from "react-router-dom";

const Billing = () => {
    const [api4, updateApi4] = useState([]);

    const getApi4 = () => {
        fetch(" http://localhost:1234/billing")
            .then(response => response.json())
            .then(serverArray => {
                updateApi4(serverArray);
            })
    }
    useEffect(() => {
        getApi4();
    }, []);

    return (
        <>
            <Header />
            <h1 className="text-center mt-3">Billing Portal</h1>
            <div className="container">
                <div className="row">

                <div className="row ">
                    <div className="col-lg-2"></div>
                        <Link to="/Addbilling" className="col-lg-6">
                            <button className="btn btn-danger m-2">ADD</button>
                        </Link>
                        
                         <div className="col-lg-2">
                            
                         <input className="text" placeholder="Search Here" ></input>
            
                        
                         </div>
                         
                         <div className="col-lg-2"></div>   
                        </div>
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8">
                        <table className="table table-bordered  text-center">
                            <thead className="table-dark">
                                <tr>
                                    <th>ID</th>
                                    <th>Customer Name</th>
                                    <th>Total Dic%</th>
                                    <th>Payment</th>
                                    

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    api4.map((name, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{name.id}</td>
                                                <td>{name.customername}</td>
                                                <td>{name.totalDiscout}</td>
                                                <td>{name.paymentOption}</td>
                                                
                                                
                                        </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Billing;