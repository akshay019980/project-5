import React,{useState,useEffect} from "react";
import Header from "./header";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const Marketing = () =>{

    const [api2, updateApi2] = useState([]);

    const getApi2 = () =>{
        fetch("http://localhost:1234/marketing")
        .then(response => response.json())
        .then(serverArray =>{
            updateApi2(serverArray);
        })
    }
    useEffect(()=>{
        getApi2();
    },[]);

    const deletmarketing = (marketid ) =>{
        var url =" http://localhost:1234/marketing/" + marketid;
        var postData ={
            Headers :{"content-type":'applicaton/json'},
            method:"DELETE"
        }
        fetch(url,postData)
        .then((response)=>response.json())
        .then(serverArray=>{
         swal("Deleted Succesfully...")
         getApi2("");
        })


    }

    return(
        <>
        <Header/>
        <h1 className="text-center mt-3">Welcome to Marketing</h1>
        

        <div className="conatainer">
            <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8 ">
                <div className="row">

                    <Link to="/addmarket" className="col-lg-3">
                        <button className="btn btn-danger m-2">ADD Items</button>
                    </Link>

                    <div className="col-lg-6"></div>
                    <div className="col-lg-3 text-end">
                            <input type="text" className="form-control " placeholder="Search"></input>
                    </div>
                </div>
                <table className="table table-bordered text-center">
                    <thead className="table-secondary">
                        <tr>
                            <th>No</th>
                            <th>Product name</th>
                            <th>Product price</th>
                            <th>Product varanty</th>
                            <th>Product stock </th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            api2.map((mark,index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{mark.id}</td>
                                        <td>{mark.productname}</td>
                                        <td>{mark.productPrice}</td>
                                        <td>{mark.productvaranty}</td>
                                        <td>{mark.productstock}</td>
                                        <td>
                                            <button className="btn btn-danger m-2" onClick={deletmarketing.bind(this, mark.id)}>DELETE</button>
                                            <Link className="btn btn-warning" to={`/editmarket/${mark.id}`}>Edit</Link>
                                        </td>
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

export default Marketing;