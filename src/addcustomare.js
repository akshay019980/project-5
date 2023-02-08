import React,{useState} from "react";
import Header from "./header";
import {useNavigate } from "react-router-dom";

const Addcust =  () =>{

    const navigate = useNavigate()

const [allcustomare,pickAllCustomare] = useState([]);
const [name,pickName] = useState('')
const [age,pickAge] = useState('')
const [location,pickLocation] = useState('')
const [contact,pickContact] = useState('')
const [working,pickWorking] = useState('')
const [message,pickMessage] = useState('')

const getcustomare = () =>{
    const url = "http://localhost:1234/customer";
    fetch(url)
    .then((response)=>response.json())
    .then((serverArray)=>{
        pickAllCustomare((serverArray))
    });
}

    const save = () =>{

        const url = 'http://localhost:1234/customer';

        const customareInfo = {
            "name":name,
            "age":age,
            "location":location,
            "contact":contact,
            "working":working
        }

        const postOption = {
            headers :{'Content-Type': 'application/json'},
            method:'POST',
            body:JSON.stringify( customareInfo)
        }
    
    fetch(url,postOption)
    .then((response)=> response.json())
    .then((serverArray)=>{
            getcustomare()
        pickMessage(`${name} added succesfully`)
    
    })
    navigate("/customer")
}

    return(
        <>
        <Header/>
      
      <h1>{message}</h1>
        <div className="container p-5">
            <div className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg-6 card mt-4">  
                    <div className="card-header text-center text-white bg-dark">
                        <label>Add Customare</label>
                    </div>
                    <div className="card-body mt-2">
                    <div className="m-2">
                            <label> Name</label>
                            <input type="text" value={name} onChange={obj => pickName(obj.target.value)}  className="form-control" placeholder="Add Name"></input>
                        </div>
                        <div className="m-2">
                            <label> Age</label>
                            <input type="text" value={age} onChange={obj => pickAge(obj.target.value)}  className="form-control" placeholder="Add Age"></input>
                        </div>
                        <div className="m-2">
                            <label> Location</label>
                            <input type="text" value={location} onChange={obj => pickLocation(obj.target.value)}  className="form-control" placeholder="Add Location"></input>
                        </div> 
                        <div className="m-2">
                            <label> Contact No</label>
                            <input type="text" value={contact} onChange={obj => pickContact(obj.target.value)} className="form-control" placeholder="Add contact number"></input>
                        </div>
                        <div className="m-2">
                            <label> Working hrs</label>
                            <input type="text" value={working} onChange={obj => pickWorking(obj.target.value)} className="form-control" placeholder="Add working hrs"></input>
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
export default Addcust;