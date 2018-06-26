import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import LoginForm from '../components/Login/LoginForm'
import {withStyles} from '@material-ui/core/styles';

const styles = () => ({
    loginForm: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh"
    },
});

class Login extends Component {
    constructor(props) {
        super(props);
    }

    redirectToPreviusLocation = () => {
        const {from} = this.props.location.state || {from: {pathname: '/home'}};
        return (
            <Redirect to={from}/>
        )
    };

    render() {
        const {classes} = this.props;
        if (localStorage.getItem("token")) {
            return this.redirectToPreviusLocation()
        }else {
            return (
                <div className={classes.loginForm}>
                    <LoginForm/>
                </div>

            );
        }
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return {
        user: state.user,
    }
};

Login = connect(mapStateToProps, null)(
    withStyles(styles)(Login)
);

export default withStyles(styles)(Login);
