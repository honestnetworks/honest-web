import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import ForgotPasswordForm from 'components/ResetPassword/ForgotPasswordForm'
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

class ForgotPassword extends Component {
    render() {
        const {classes} = this.props;
        // if (localStorage.getItem("token")) {
        //     const {from} = this.props.location.state || {from: {pathname: '/profile'}};
        //     return (
        //         <Redirect to={from}/>
        //     )
        // }
        return (
            <div className={classes.loginForm}>
                <ForgotPasswordForm/>
            </div>
        );
    }
}

ForgotPassword.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return {
        state: state,
    }
};

ForgotPassword = connect(mapStateToProps, null)(
    withStyles(styles)(ForgotPassword)
);

export default withStyles(styles)(ForgotPassword);
