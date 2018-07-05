import React, {Component} from 'react';
import './App.css';
import Login from './containers/Login.js';//
import ForgotPassword from './containers/ForgotPassword';
import Profile from './components/Profile/Profile.js';
import {Route, Switch} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux'
import PrivateRoute from "./components/Common/PrivateRoute";
import {history} from "./store/configure-store"
import { connect } from 'react-redux'
import stickAPI from './api/config'
import ConfirmPassword from './components/ResetPassword/ConfirmPassword.js'
import Layout from './hoc/layout'
import Home from './components/Home/Home'
import Contacts from './components/Contacts/Contacts'
import Details from "./components/Details/Details";

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
                    {/*<Layout>*/}
                        <Switch>
                            <PrivateRoute path="/profile" component={Profile} isAuthenticated={isAuth} />
                            <PrivateRoute path="/home"   exact component={Home} isAuthenticated={isAuth} />
                            <PrivateRoute path="/contacts"   exact component={Contacts} isAuthenticated={isAuth} />
                            <PrivateRoute path="/details/:id" exact component={Details} isAuthenticated={isAuth} />
                            <Route path="/reset-password" component={ConfirmPassword} isAuthenticated={true}/>
                            <Route path="/forgot-password" component={ForgotPassword} isAuthenticated={true}/>
                            <Route path="/"  exact component={Login} />
                            <Route path="/login"  exact component={Login}/>
                        </Switch>
                    {/*</Layout>*/}
                </div>
            </ConnectedRouter>
        );
    }
}

const mapStateToProps = state => (()=>{
        console.log(state);
        return ({
        session: state.session
    })
}

);

export default connect(mapStateToProps)(App);
