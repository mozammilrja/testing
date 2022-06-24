import React from 'react'
import { Switch } from "react-router-dom";
import PublicRoute from "../layout/PublicRoute"
import Home from '../components/home/Home';
// import Login from "../componets/login/Login"
// import SignUp from '../componets/registration/SignUp'
// import HackerForm from '../componets/registration/HackerForm';
// import dashboard from '../componets/dashboard/dashboard';
// import MyProgram from '../componets/dashboard/MyProgram';
// import MyReports from '../componets/dashboard/MyReports';
// import Drawer from '../componets/dashboard/Drawer';

const Index = () => {
  return (
    <div>
    <Switch>
    <PublicRoute  path="/"  component={Home} exact />
    </Switch>
    </div>
  )
}

export default Index