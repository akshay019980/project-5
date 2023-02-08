import React from "react";
import { HashRouter,Routes, Route } from "react-router-dom";
import Dashboard from "./dashbord";
import Login from "./login";
import Dashboard2 from "./dashbord2";
import Software from "./software";
import Marketing from "./marketing";
import Customare from "./customare";
import Billing from "./billing";
import Add from "./add";
import Addmarket from "./addmarket";
import Addcust from "./addcustomare";
import EDitsoft from "./editsoftware";
import Addbilling from "./addbilling";
import Editmarket from "./editmarket";


function App(){
  return(
      <HashRouter>
        <Routes>
           <Route exact path="/" element={ <Dashboard/> }/>
          <Route exact path="/dashbord2" element={ <Dashboard2/>}/>
          <Route exact path="/Login" element={<Login/>}/>
          <Route exact path="/software" element={<Software/>}/>
          <Route exact path="/Marketing" element={<Marketing/>}/>
          <Route exact path="/customer" element={<Customare/>}/>
          <Route exact path="/billing" element={<Billing/>}/>
          <Route exact path="/add" element={<Add/>}/>
          <Route exact path="/addmarket" element={<Addmarket/>}/>
          <Route exact path="/addcustomare" element={<Addcust/>}/>
          <Route exact path="/editsoftware/:softid" element={<EDitsoft/>}/>
          <Route exact path="/addbilling" element={<Addbilling/>}/> 
          <Route exact path="/editmarket/:markid" element={<Editmarket/>}/>
          </Routes>
      </HashRouter>

  );


}
export default App;