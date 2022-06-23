import React from "react";
import { Route, Redirect } from "react-router-dom";
import Footer from '../componets/footer/Footer'
import Header from '../componets/header/Header'

function ProtectedRoute({ component: Component, ...args }) {
  return (
      <Route
          {...args}
          
          render={(props) => sessionStorage.getItem("token") ?
              <>
                  <Header />
                  {window.location.pathname !== "/"}
                  <Component {...props} />
                  <Footer />
              </>
              : <Redirect to="/login" />
          }
      />
  )
}

export default ProtectedRoute

