
const Login = () =>{
    return(
      <>
        <div className="container">
          <div className="row">
            <div className="col-lg-4"></div>
            <div className="col-lg-4">
              <div className="card mt-4">
                <div className="card-header bg-success text-white text-center">
                  <h2><i className="fa fa-lock"></i> Login</h2>
                  </div> 
                  <div className="card-body mt-4">
                    <div>
                      <label>E-mail ID</label>
                      <input type="text" className="form-control" placeholder="Enter Your Email"></input>
                    </div>
                    <div>
                      <label>password</label>
                      <input type="password" className="form-control" placeholder="Enter Your Password"></input>
                    </div> 
                    <div className="footer text-center mt-2">
                      < button className="btn btn-primary">Login</button>
                    </div>
                  </div>
                  <div className="col-lg-4"></div>
                </div>
              </div>
            </div>
          </div>
          </>
        
    )

}
export default Login;