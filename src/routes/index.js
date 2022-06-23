import React from 'react'
import { Switch } from "react-router-dom";
import ProtectedRoute from "../layout/ProtectedRoute"
import PublicRoute from "../layout/PublicRoute"
import Home from '../componets/home/Home';
import Login from "../componets/login/Login"
import SignUp from '../componets/registration/SignUp'
import HackerForm from '../componets/registration/HackerForm';

const Index = () => {
  return (
    <div>
    <Switch
    
    
    >
    <PublicRoute path="/login" component={Login} />
    <PublicRoute path="/hacker-form" component={HackerForm} />
    <PublicRoute path="/signup" component={SignUp} />
    <PublicRoute  path="/"  component={Home} exact />
    </Switch>
    
    </div>
  )
}

export default Index