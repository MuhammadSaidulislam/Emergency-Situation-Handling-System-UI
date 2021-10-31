import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//get all components
import Home from "./Components/Home/Home";
import { Profile } from "./Components/Profile/Profile";
import AdminLogin from "./Components/AdminLogin/AdminLogin";
import Signup from "./Components/Signup/Signup";
import GetServices from "./Components/GetServices/GetServices";
import { Category } from "./Components/Category/Category";
import { FireService } from "./Components/FireService/FireService";
import { PoliceStation } from "./Components/PoliceStation/PoliceStation";
import { ServiceProfile } from "./Components/ServiceProfile/ServiceProfile";
import { SignIn } from "./Components/SignIn/SignIn";
import { MyService } from "./Components/MyService/MyService";
import { AddService } from "./Components/AddService/AddService";
import { AddServiceAdmin } from "./Components/AddServiceAdmin/AddServiceAdmin";
import { GetUsers } from "./Components/GetUsers/GetUsers";
import { StationLogin } from "./Components/StationLogin/StationLogin";


const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/Services" component={GetServices} />
        <Route path="/category" component={Category} />
        <Route path="/adminlogincheck" component={AdminLogin} />
        <Route path="/userlogincheck" component={SignIn} />
        <Route path="/signup" component={Signup} />
        <Route path="/fire" component={FireService} />
        <Route path="/police" component={PoliceStation} />
        <Route path="/details" component={ServiceProfile} />
        <Route path="/myservices" component={MyService} />
        <Route path="/add_service" component={AddService} />
        <Route path="/add_service_admin" component={AddServiceAdmin} />
        <Route path="/getusers" component={GetUsers} />
        <Route path="/login/station" component={StationLogin} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
