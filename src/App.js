import React, {Component} from 'react';
import './App.css';
import Login from './containers/Login.js';//
import ForgotPassword from './containers/ForgotPassword';
import Dashboard from './containers/Dashboard';
import Profile from './components/Profile/Profile.js';
import {Route, Switch} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux'
import PrivateRoute from "./components/Common/PrivateRoute";
import {history} from "./store/configure-store"
import { connect } from 'react-redux'
import stickAPI from './api/config'
import ConfirmPassword from './components/ResetPassword/ConfirmPassword.js'

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
                        <PrivateRoute path="/dashboard" component={Dashboard} isAuthenticated={isAuth}/>
                        <PrivateRoute path="/profile" component={Profile} isAuthenticated={isAuth}/>
                        <Route path="/reset-password" component={ConfirmPassword} isAuthenticated={true}/>
                        <Route path="/forgot-password" component={ForgotPassword} isAuthenticated={true}/>
                        <Route path="/"  exact component={Login}/>
                        <Route path="/login"  exact component={Login}/>
                    </Switch>
                </div>
            </ConnectedRouter>
        );
    }
}

const mapStateToProps = state => (()=>{
        console.log(state)
        return ({
        session: state.session
    })
}

);

export default connect(mapStateToProps)(App);
