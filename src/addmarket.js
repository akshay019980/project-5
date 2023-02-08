import React, {useState}from "react";
import Header from "./header";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";


const Addmarket = () =>{
    const navigate = useNavigate()
    const [allmarketing, pickAllMarketing] = useState([])
    const [name, pickProductName] = useState('')
    const [price, pickProductPrice] = useState('')
    const [varanty, pickProductVarranty] = useState('')
    const [stock, pickProductStock] = useState('')
    const [message,pickMessage] = useState('')
    

    const getmare= () => {
        const url = 'http://localhost:1234/marketing'
        fetch(url)
        .then((res) => res.json())
        .then((server) => {
            pickAllMarketing(server)
        })

    }

    
    const save = () =>{

        const url = 'http://localhost:1234/marketing';
        const productInfo = {
            "productname":name,
            "productPrice":price,
            "productvaranty":varanty,
            "productstock":stock
        }

        const postOption = {
            headers :{'Content-Type': 'application/json'},
            method:'POST',
            body: JSON.stringify(productInfo),
        }

        fetch(url,postOption)
        .then((response)=> response.json())
        .then((serverresponse)=>{
            getmare()
            pickMessage(`${name} added succesfully`)
            swal("added succesfully...")
            
        })
        navigate("/marketing");
    

    }




    return(
        <>
        <Header/>
        <h1>{message}</h1>
        
        <div className="container p-5">
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6 card  mt-4">
                    <div className="card-header text-center bg-dark text-white">
                        <h2>Add Product</h2>
                    </div>
                    <div className="card-body m-2">
                        <div className="m-2">
                            <label>Product Name</label>
                            <input type="text" value={name} onChange={obj => pickProductName(obj.target.value)} className="form-control" placeholder="Add your product"></input>
                        </div>
                        <div className="m-2">
                            <label>Product Price</label>
                            <input type="text" value={price} onChange={obj => pickProductPrice(obj.target.value)}className="form-control" placeholder="Add your product"></input>
                        </div>
                        <div className="m-2">
                            <label>Product varanty</label>
                            <input type="text" value={varanty} onChange={obj => pickProductVarranty(obj.target.value)} className="form-control" placeholder="Add your product"></input>
                        </div>
                        <div className="m-2">
                            <label>Product Stock</label>
                            <input type="text"  value={stock} onChange={obj => pickProductStock(obj.target.value)} className="form-control" placeholder="Add your product"></input>
                        </div>
                        <div className="text-center m-2">
                            <button className="btn btn-info" onClick={save}>Save</button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
        </>
    )

}
export default Addmarket;