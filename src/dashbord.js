import React from 'react';
import Header from './header';

const Dashboard = () =>{
return(
    <>
    <Header/>
    <div className='container'>
            <h1 className='text-center text-primary'>Dashboard</h1>

            <div className='row text-center'>
            
                <div className='col-lg-2'></div>
                <div className='col-lg-2 border rounded m-2 bg-info'>
                    <div className=' p-3'>
                        <i className='fa fa-desktop fa-3x'></i>
                    </div>
                    <h5>Software Development</h5>
                    
                </div>
                
                <div className='col-lg-2 border rounded m-2 bg-warning'>
                    <div className='p-3 '>
                        <i className='fa fa-headphones fa-3x'></i> 
                        <h5>customer Services 7</h5>
                    </div>
                </div>
                
                <div className='col-lg-2 border rounded m-2 bg-success'>
                    <div className=' p-3 '>
                        <i className='fa fa-suitcase fa-3x'></i> 
                        <h5>Product Design 4</h5>
                    </div>
                </div>
                <div className='col-lg-2 border rounded m-2  bg-primary'>
                    <div className='p-3 '>
                        <i className='fa fa-search fa-3x'></i> 
                        <h5>SEO Services 8</h5>
                    </div>
                    <div className='col-lg-2'></div>
                </div>

            </div>



            <div className='row text-center'>
            
            <div className='col-lg-2'></div>
            <div className='col-lg-2 border rounded m-2 bg-secondary'>
                <div className=' p-3'>
                    <i className='fa fa-people-group fa-3x'></i>
                </div>
                <h5>User Management 5</h5>
                
            </div>
            
            <div className='col-lg-2 border rounded m-2  bg-danger'>
                <div className='p-3 '>
                    <i className='fa fa-indian-rupee-sign fa-3x'></i> 
                    <h5>Billing & Invoice 7</h5>
                </div>
            </div>
            
            <div className='col-lg-2 border rounded m-2  bg-white'>
                <div className=' p-3 '>
                    <i className='fa fa-pen fa-3x'></i> 
                    <h5>Content Writing 5</h5>
                </div>
            </div>
            <div className='col-lg-2 border rounded m-2  bg-info'>
                <div className='p-3 '>
                    <i className='fa fa-address-book fa-3x'></i> 
                    <h5>Client Management 4</h5>
                </div>
                <div className='col-lg-2'></div>
            </div>

        </div>

    </div>
    </>
)


}
export default Dashboard;