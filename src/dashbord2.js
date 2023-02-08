import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Dashboard2 = () =>{
    const [api1, updateApi] = useState([]);

    const getApi1= () => {
       fetch("http://localhost:1234/software")
            .then(response => response.json())
            .then(serverArray => {
               updateApi(serverArray);

            })
            
    }
    
  
    useEffect(() => {
      getApi1();
    },[]);

  
    const [api2, updateApi2] = useState([]);

    const getApi2 = () =>{
        fetch(" http://localhost:1234/marketing")
        .then(response => response.json())
        .then(serverArray =>{
            updateApi2(serverArray);
        })
    }
    useEffect(()=>{
        getApi2();
    },[]);



    const [api3, updateApi3] = useState([]);

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

    const [api4, updateApi4] = useState([]);

    const getApi4 = () =>{
        fetch(" http://localhost:1234/billing")
        .then(response => response.json())
        .then(serverArray => {
            updateApi4(serverArray);
        })
    }
    useEffect(()=>{
        getApi4();
    },[]);



    return(
<>


	<div className="bg-light">
		<div className="container mt-4">
			<div className="row mb-5">
				<div className="col-lg-4 text-center">
					<h1 className="text-primary"><i class="fa fa-home"></i> Dashboard</h1>
				</div>
				<div className="col-lg-8 text-end">
				<div className="btn-group">
	<button className="btn btn-danger"><i className="fa fa-home"></i> Dashboard</button>
	<button className="btn btn-info"><i className="fa fa-suitcase"></i> Product</button>
	<button className="btn btn-success"><i className="fa fa-users"></i> Customer</button>
	<button className="btn btn-primary"><i className="fa fa-inr"></i> Billing</button>
	<button className="btn btn-warning"><i className="fa fa-building"></i> Vendor</button>
	<button className="btn btn-secondary"><i className="fa fa-power-off"></i> Logout</button>
				</div>
				</div>
			</div>
			    <div className="row mt-5 mb-5">
				<div className="col-lg-12 text-center">
					<h1 className="text-black">Dashboard</h1>
				</div>
			</div>
			
			<div className="row text-center">
				<div  className ="col-lg-3 mb-4">
					<Link to="/software" className="p-4 bg-info  text-white nav-link rounded shadow-lg " >
						<i className="fa fa-desktop fa-4x mb-3"></i>
						<h4>software</h4>
                        <p>{api1.length}</p>
					</Link>
				</div> 
				
				<div className="col-lg-3 mb-4 " >
					<Link to="/Marketing" className="p-4 bg-secondary  nav-link text-white rounded shadow-lg">
						<i className="fa fa-suitcase fa-4x mb-3"></i>
						<h4>Marketing</h4>
                        <p>{api2.length}</p>
					</Link>
				</div> 
				
				<div className="col-lg-3 mb-4">
					<Link to="/Customer" className="p-4 bg-success text-white  nav-link rounded shadow-lg">
						<i className="fa fa-users fa-4x mb-3"></i>
						<h4>Customer</h4>
                        <p>{api3.length}</p>
					</Link>
				</div> 
				
				<div className="col-lg-3 mb-4">
					<Link to="/Billing" className="p-4 bg-danger text-white nav-link  rounded shadow-lg">
						<i className="fa fa-inr fa-4x mb-3"></i>
						<h4>Billing</h4>
                        <p>{api4.length}</p>
					</Link>
				</div> 
			</div>
		</div>
		<footer className="p-4 text-center myfooter border-top border-info">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 text-start">
						<p> Copyright@yourwebsite.com 2012 - 2025</p>
					</div>
					<div className="col-lg-6 text-end">
						<p>  
							<i className="fab fa-facebook fa-lg m-2"></i>
							<i className="fab fa-twitter fa-lg m-2"></i>
							<i className="fab fa-linkedin fa-lg m-2"></i>
							<i className="fab fa-instagram fa-lg m-2"></i>
						</p>
					</div>
				</div>
			</div>
		</footer>
	</div>
    </>
    )
}
export default Dashboard2;