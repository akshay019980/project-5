import React, { useState, useEffect } from "react";
import Header from "./header";
import { Link } from 'react-router-dom';
import swal from "sweetalert";

const Software = () => {
    
    const [api1, updateApi] = useState([]);
    const [search,searchValue] = useState('');

    const getApi1 = () => {
        fetch("http://localhost:1234/software")
            .then(response => response.json())
            .then(serverArray => {
                updateApi(serverArray);

            })
    }
    useEffect(() => {
        getApi1();
    }, []);

    const deleteSoftware = (Softwareid) =>{
        var url = "http://localhost:1234/software/" + Softwareid;
        var postData = {
            Headers : {"Content-type" : 'application/json'},
            method : "DELETE"
        }
        fetch(url,postData)
        .then(response => response.json())
        .then(serverArray =>{
            swal("Deleted Succesfully");
            getApi1("");
        })
    }

    return (
        <>
            <Header/>
            <h1 className="text-center mt-3">Welcome To Software World</h1>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-2"></div>
                        <Link to="/Add" className="col-lg-6">
                            <button className="btn btn-danger">Enter Software</button>
                        </Link>      
                         <div className="col-lg-2">         
   <input className="text" placeholder="Search Here" onChange={(e)=>  searchValue(e.target.value)} value={search}></input>   
                         </div>     
                         <div className="col-lg-2"></div>                            
                </div>
                <div className="row mt-2">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8">
                        <table className="table table-bordered  text-center">
                            <thead className="table-dark">
                                <tr>
                                    <th>ID</th>
                                    <th>name</th>
                                    <th>version</th>
                                    <th>year</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    api1.map((soft,index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{soft.id}</td>
                                                <td>{soft.name}</td>
                                                <td>{soft.version}</td>
                                                <td>{soft.year}</td>
                                                <td><button className="btn btn-danger" onClick={deleteSoftware.bind(this, soft.id)}>Delete</button>
                                                <Link  className="btn btn-warning" to={`/editsoftware/${soft.id}`}>Edit</Link></td>
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

export default Software;