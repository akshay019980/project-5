import React,{useState,useEffect} from "react";
import Header from "./header";
import { Link } from "react-router-dom";

const Customare = () =>{
    const [api3 , updateApi3] = useState([]);

    const getApi3 = () =>{
        fetch("http://localhost:1234/customer")
        .then(response => response.json())
        .then(serverArray =>{
            updateApi3(serverArray);
        })

    }
    useEffect(()=>{
        getApi3();
    },[]);

    return(
        <>
        <Header/>
  <h1 className="text-center mt-3">WElcome To customare Profile</h1>
  

      <div className="container">
        
  <div className="row ">
                    <div className="col-lg-2"></div>
                        <Link to="/Addcustomare" className="col-lg-6">
                            <button className="btn btn-danger">ADD</button>
                        </Link>
                        
                         <div className="col-lg-2">
                            
                         <input className="text" placeholder="Search Here" ></input>
            
                        
                         </div>
                         
                         <div className="col-lg-2"></div>   
                        </div>
                                 
        <div className="row mt-4">
            <div className="col-lg-2"></div>
            <div className="col-lg-8">
                <table className="table table-borderd text-center">
                    <thead className="table-success">
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Location</th>
                            <th>Contact No</th>
                            <th>Working Hrs</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            api3.map((name,index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{name.id}</td>
                                        <td>{name.name}</td>
                                        <td>{name.age}</td>
                                        <td>{name.location}</td>
                                        <td>{name.contact}</td>
                                        <td>{name.working }</td>

                                    </tr>
                                );

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

export default Customare;