import React from "react";
import { Route, Redirect } from "react-router-dom";
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'


function PublicRoute({ component: Component, ...args }) {
    return (
        <Route
            {...args}
            render={(props) => !sessionStorage.getItem("token")  ?
                <>
                    <Header />
                    {window.location.pathname !== "/"}
                    <Component {...props} />
                    <Footer />
                </>:
                <Redirect to="/" />
            }
        />
    )
}

export default PublicRoute
