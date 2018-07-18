import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import LoginForm from 'components/Login/LoginForm';
import {withStyles} from '@material-ui/core/styles';
import loginBackground from 'assets/images/intro-677-ab-528@3x.png';
import loginTitle from 'assets/images/login-title-image@2x.png';

const styles = (theme) => ({
    loginForm: {
        display: "flex",
        flexDirection:'column',
        alignItems: "center",
        width: "100%",
        height: "100vh",
        backgroundColor:'#f5f6fa',
        background:`url(${loginBackground}) bottom center no-repeat`,
        backgroundSize:'contain!important'
    },
    loginTitle:{
        minHeight:'9.3125rem',
        alignItems:'flex-end',
        display:'flex',
        '& img':{
            width:'126px',
            height:'53px'
        },
        [theme.breakpoints.only('xs')]: {
            height:'15%',
            minHeight:'3.3125rem',
            marginBottom: '1rem'
        }
    },
    loginContent:{
        display:'flex',
        alignItems:'center',
        height:'70%',
        position:'relative'
    }
});

class Login extends Component {
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
                <div className="LoginForm">
                <div className={classes.loginForm}>
                    <div className={classes.loginTitle}>
                        <img src={loginTitle} alt="login title"/>
                    </div>
                    <div className={classes.loginContent}>
                        <LoginForm/>
                    </div>
                </div>
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

export default withStyles(styles)(connect(mapStateToProps, null)(Login));
