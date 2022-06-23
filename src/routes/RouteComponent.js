import React from 'react'
import { Switch } from "react-router-dom";
import PublicRoute from "../layout/PublicRoute"
import Login from '../components/login/Login';
import Home from '../components/home/Home';


const RouteComponent = () => {
  return (
    <div>
    <Switch>
    <PublicRoute path="/login" component={Login}/>
    <PublicRoute  path="/"  component={Home} exact />
    </Switch>
    
    </div>
  )
}

export default RouteComponent