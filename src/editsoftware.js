import React,{ useEffect,useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import swal from "sweetalert";



const EDitsoft = () =>{
    const navigate = useNavigate();
    const{softid} = useParams();
    const [name, pickName ] = useState('')
    const [version,pickVersion ] = useState('')
    const [year ,pickYear ] = useState('')
  
    const getSoftware = () =>{
        const url = `http://localhost:1234/software/${softid}`;
        fetch(url)
        .then((response) => response.json())
        .then ((serverArray)=>{
           pickName(serverArray.name);
           pickVersion(serverArray.version);
           pickYear(serverArray.year);
        });

    } 
    useEffect(()=>{
        getSoftware ();
    },[1]);

    const save = () =>{

        const url = `http://localhost:1234/software/${softid}`;
        const softwareInfo = {
            "name":name,
            "version":version,
            "year": year
        }

        const postOption = {
            headers :{'Content-Type': 'application/json'},
            method:'PUT',
            body:JSON.stringify(softwareInfo)
        }

        fetch(url,postOption)
        .then((response)=> response.json())
        .then((serverArray)=>{
            navigate("/software")
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
                        <h2 >Enter The Update</h2>
                    </div>
                    <div className="card-body mt-2">
                        <div className=" m-2 ">
                         <label>Name</label>
                            <input  type="text" value={name} onChange={obj => pickName(obj.target.value)}  className="form-control" placeholder="Add Your name"></input>
                        </div>
    
                        <div className=" m-2 ">
                         <label>Version</label>
                            <input  type="text"  value={version} onChange={obj => pickVersion(obj.target.value)} className="form-control" placeholder="Add Your version"></input>
                        </div>
    
                        <div className=" m-2 ">
                         <label>Year</label>
                            <input  type="text" value={year} onChange={obj => pickYear(obj.target.value)} className="form-control" placeholder="Add Your year"></input>
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
export default EDitsoft;