import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { Admin } from '../pages/Admin';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/login">
                        <Login />
                    </Route>

                    <Route exact path="/">
                        <Home />
                    </Route>

                    <Route exact path="/admin">
                        <Admin />
                    </Route>

                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}
