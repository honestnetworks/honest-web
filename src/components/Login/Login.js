import React, {Component} from 'react';
import PropTypes from 'prop-types';
import loginBackground from '../../assets/StickLogin.png';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core//Button';
import {Link , Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import {loadSession} from '../../actions/session'
import Input from '../Common/Input'

const styles = theme => ({
    root: {
        //flexGrow: 1,
    },
    paper: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    loginBackgroundImage: {
        background: 'linear-gradient(rgba(3, 217, 201, 0.5),rgba(0, 117, 255, 0.5)),' +
        'url(' + loginBackground + ')',
        height: '100%',
        backgroundSize: '100% 100%',
        backgroundPosition: 'right -93% bottom 0%'
    },
    loginBackground: {
        background: '#E6EEF2',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center'
    },
    loginPage: {
        display: 'flex',
        height: '100vh'
    },
    leftColumn: {
        width: '50%'
    },
    rightColumn: {
        width: '50%'
    },
    recoveryPassword: {
        textAlign: 'right',
        marginBottom: '0px',
        color: '#263238',
        fontSize: '14px'
    },
    loginTitle: {
        color: '#263238',
        fontWeight: '400'
    },
    loginForm: {
        width: '60%'
    },
    loginButton: {
        width: '100%',
        backgroundColor: '#00C0BF',
        marginBottom: '39px',
        padding: '13px 0 12px 0',
        marginTop: '31px',
        boxShadow: 'none',
        "&:hover": {
            backgroundColor: "#00C0BF"
        },
        "&:active": {
            boxShadow: "none"
        }
    },
    loginBody: {
        padding: '30px 46px 0 43px'
    },
    loginFooter: {
        backgroundColor: '#F6F8F9',
        padding: '31px 0 25px 0'
    },
    loginLabel: {
        color: '#00C0BF',
        cursor: 'pointer'
    },
    link:{
      textDecoration: 'none'
    }

});

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            redirectToReferrer: false
        };

        this.loginHandler = this.loginHandler.bind(this);
        this.setUsername = this.setUsername.bind(this);
        this.setPassword = this.setPassword.bind(this);
    }

    componentDidMount() {
        // this.props.loadSessionSuccess('')
    }

    setUsername(username) {
        // this.props.loadSessionSuccess('')
        this.setState({username: username})
    }

    setPassword(password) {
        // this.props.loadSessionSuccess('')
        this.setState({password: password})
    }

    loginHandler() {
        let loginRequest = {
            email: this.state.username,
            password: this.state.password
        };

        this.props.loadSession(loginRequest);
    }

    render() {
        const {classes} = this.props;
        // const { from } = this.props.location.state && this.props.location.state.from && this.props.location.state.from.pathname && this.props.location.state.from.pathname === "/" || { from: { pathname: '/profile' } };
        const { from } = this.props.location.state || { from: { pathname: '/dashboard' } };
        const { redirectToReferrer } = this.state;

        console.log('redirect', from);
        if (localStorage.getItem("token")) {
            return (
                <Redirect to={from}/>
            )
        }

        return (
            <div className={classes.root}>
                <div className={classes.loginPage}>
                    <div className={classes.rightColumn}>
                        <div className={`${classes.paper} ${classes.loginBackgroundImage}`}></div>
                    </div>
                    <div className={`${classes.leftColumn} ${classes.loginBackground}`}>
                        <div className='Login-form'>
                            <Paper className={classes.paper}>
                                <div>
                                    <div className={classes.loginBody}>
                                        <h2 className={classes.loginTitle}>Sign In to Stick</h2>
                                        <Input id="username"
                                               placeHolder='Email'
                                               labelName="Email: "
                                               inputType="text"
                                               parentFunction={this.setUsername}/>
                                        <Input id="password"
                                               placeHolder='Password'
                                               labelName="Password: "
                                               inputType="password"
                                               parentFunction={this.setPassword}/>

                                        {this.props.error ?
                                        <div className={'no-error error'}><h2
                                            style={{fontSize: '0.72em'}}>{this.props.error}</h2>
                                        </div> : null}

                                        {/* <p className={classes.recoveryPassword}>Forgot Password</p> */}
                                        <Button className={classes.loginButton} raised color='primary'
                                                onClick={this.loginHandler}>Sign In</Button>
                                    </div>
                                    <div className={classes.loginFooter}>
                                        <p>Forgot Password? <Link to="/forgot-password" className={classes.link}>
                                        <span className={classes.loginLabel}>Click here.</span>
                                      </Link>
                                        </p>
                                    </div>
                                </div>
                            </Paper>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return {
        session: state.session.data,
        error: state.session.error,
    }
};

const mapDispatchToProps = (dispatch) => ({
    loadSession: (userId) => {
        dispatch(loadSession(userId))
    },
    // loadSessionSuccess: (userId) => {
    //     dispatch(loadSessionSuccess(userId))
    // },
});

Login = connect(mapStateToProps, mapDispatchToProps)(
    withStyles(styles)(Login)
);


export default withStyles(styles)(Login);
