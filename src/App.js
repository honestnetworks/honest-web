import React, { Component } from 'react';
import { ConnectedRouter } from 'react-router-redux';
import PrivateRoute from "components/PrivateRoute";
import { history } from "store/configure-store"
import { connect } from 'react-redux';
import stickAPI from 'api/config';
import ConfirmPassword from 'components/ResetPassword/ConfirmPassword.js';
import Login from 'pages/Login';
import ForgotPassword from 'pages/ForgotPassword';
import Profile from 'components/Profile';
import { Route, Switch } from 'react-router-dom';
import Dashboard from 'pages/Dashboard';
import DashboardDetails from 'pages/Dashboard/DashboardDetails';
import Contacts from 'pages/Contact';
// import Layout from 'hoc/layout';

import './App.css';

class App extends Component {

    componentWillMount() {
        const { session } = this.props;
        const token = session && session.data && session.data.token;
        if (token) stickAPI.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }

    render() {
        let isAuth = localStorage.getItem("token") && localStorage.getItem("token").length > 0;
        return (
            <ConnectedRouter history={history}>
                <div className="App">
                        <Switch>
                            <PrivateRoute path="/profile" component={Profile} isAuthenticated={isAuth} />
                            <PrivateRoute path="/dashboard"   exact component={Dashboard} isAuthenticated={isAuth} />
                            <PrivateRoute path="/contacts"   exact component={Contacts} isAuthenticated={isAuth} />
                            <PrivateRoute path="/details/:id" exact component={DashboardDetails} isAuthenticated={isAuth} />
                            <Route path="/reset-password" component={ConfirmPassword} isAuthenticated={true}/>
                            <Route path="/forgot-password" component={ForgotPassword} isAuthenticated={true}/>
                            <Route path="/"  exact component={Login} />
                            <Route path="/login"  exact component={Login}/>
                        </Switch>
                </div>
            </ConnectedRouter>
        );
    }
}

const mapStateToProps = state => (()=>{
        console.log('App state', state);
        return ({
        session: state.session
    })
}

);

export default connect(mapStateToProps)(App);
