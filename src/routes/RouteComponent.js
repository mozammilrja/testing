import React from 'react'
import { Switch } from "react-router-dom";
import PublicRoute from "../layout/PublicRoute"
import Login from '../components/login/Login';
import Home from '../components/home/Home';
import SignUp from '../components/registration/SignUp'
import HackerForm from '../components/registration/HackerForm'
import Dashboard from '../components/dashboard/Dashboard'
import MyProgram from '../components/dashboard/MyProgram'
import MyReports from '../components/dashboard/MyReports'


const RouteComponent = () => {
  return (
    <div>
    <Switch>
    <PublicRoute path="/login" component={Login}/>
    <PublicRoute path="/dashboard" component={Dashboard}/>
    <PublicRoute path="/my-program" component={MyProgram}/>
    <PublicRoute path="/my-reports" component={MyReports}/>
    <PublicRoute path="/hack-form" component={HackerForm}/>
    <PublicRoute path="/signup" component={SignUp}/>
    <PublicRoute  path="/"  component={Home} exact />
    </Switch>
    
    </div>
  )
}

export default RouteComponent