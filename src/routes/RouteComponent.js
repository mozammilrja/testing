import React from 'react'
import { Switch } from "react-router-dom";
import PublicRoute from "../layout/PublicRoute"
import Home from '../components/home/Home';


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