import React, { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import swal from "sweetalert";

const Editmarket = () =>{
    const navigate = useNavigate();
    const{markid} = useParams();
   const [productname,pickproductname] = useState ('');
   const [productPrice,pickproductPrice] = useState ('');
   const [productvaranty, pickproductvaranty] = useState('');
   const [productstock, pickproductStock] = useState('');

   const getmarket = () =>{
               const url = `http://localhost:1234/marketing/${markid}`;
               fetch(url)
               .then((respone)=>respone.json())
               .then(sereverArray=>{
                 pickproductname(sereverArray.productname)
                 pickproductPrice(sereverArray.productPrice)
                 pickproductvaranty(sereverArray.productvaranty)
                 pickproductStock(sereverArray.productstock)
               });
   }
   
   useEffect(()=>{
    getmarket();
   },[1]);

   const save = () =>{

    const url = `http://localhost:1234/marketing/${markid}`;

       const marketInfo = {
       "productname":productname,
       "productPrice":productPrice,
       "productvaranty":productvaranty,
       "productstock":productstock
       }
       const postOption ={
        headers :{'Content-Type': 'application/json'},
        method:'PUT',
        body:JSON.stringify(marketInfo)
       }
       fetch(url,postOption)
       .then((response)=> response.json())
       .then((serverArray)=>{
           navigate("/marketing")
           swal("Updated succesfully")
       })
   }

    return(
        <>
        <div className="col-lg-8 text-end m-4">
                    <div className="btn-group">
        <button className="btn btn-danger"><i className="fa fa-home"></i> Dashboard</button>
        <button className="btn btn-info"><i className="fa fa-suitcase"></i> Product</button>
        <button className="btn btn-success"><i className="fa fa-users"></i> Customer</button>
        <button className="btn btn-primary"><i className="fa fa-inr"></i> Billing</button>
        <button className="btn btn-warning"><i className="fa fa-building"></i> Vendor</button>
        <button className="btn btn-secondary"><i className="fa fa-power-off"></i> Logout</button>
                    </div>
                    </div>
    
                  
        
        <div className="container">
            <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4 card mt-2">
                    <div className="card-header text-center bg-dark text-white">
                        <h2 >Product Update </h2>
                    </div>
                    <div className="card-body mt-2">
                        <div className=" m-2 ">
                         <label>productname</label>
                            <input  type="text" value={productname} onChange={obj => pickproductname(obj.target.value)}  className="form-control" placeholder="Add Your name"></input>
                        </div>
    
                        <div className=" m-2 ">
                         <label>productPrice</label>
                            <input  type="text"  value={productPrice} onChange={obj => pickproductPrice(obj.target.value)} className="form-control" placeholder="Add Your version"></input>
                        </div>
    
                        <div className=" m-2 ">
                         <label>productvaranty</label>
                            <input  type="text" value={productvaranty} onChange={obj => pickproductvaranty(obj.target.value)} className="form-control" placeholder="Add Your year"></input>
                        </div>

                        <div className=" m-2 ">
                         <label>productstock</label>
                            <input  type="text" value={productstock} onChange={obj => pickproductStock (obj.target.value)} className="form-control" placeholder="Add Your year"></input>
                        </div>
    
                        <div className="text-center m-4">
                            <button className="btn btn-danger " onClick={save}>Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   </>    
    )


}
export default Editmarket;