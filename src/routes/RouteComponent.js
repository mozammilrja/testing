import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import PublicRoute from "../layout/PublicRoute"
import Home from '../components/home/Home';



const Index = () => {
  return (
    <Router>
      <div>
        <Switch>
        <PublicRoute  path="/"  component={Home} exact />
        </Switch>
      </div>
    </Router>
  )
}

export default Index