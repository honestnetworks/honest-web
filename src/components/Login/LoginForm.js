import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper';
import {login} from '../../actions/forms/login';
import {withStyles} from '@material-ui/core/styles';
import CheckIcon from '@material-ui/icons/Check';
import LoginIcon from 'assets/icons/login-icon.png';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {isValidEmail, isValidPassword} from "utils/validations";
import { Button } from '../../../node_modules/@material-ui/core';

const styles = theme => ({
    paper: {
        width: '363px',
        height: '375px',
        display: 'flex',
        alignItems: 'center',
        boxShadow: '0 15px 45px 0 rgba(201, 203, 209, 0.24)',
        [theme.breakpoints.only('xs')]: {
            backgroundColor: 'transparent',
            boxShadow:'none',
            width:'100%'
        }
    },
    loginForm: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    loginButton: {
        border: 'none',
        color: "#fff",
        width: '299px',
        height: '3.5rem',
        minHeight: '56px',
        borderRadius: '28px',
        backgroundColor: '#4c84ff',
        boxShadow: '0px 5px 8px 0px #7d7d7d',
        transition: '.3s all ease',
        color: 'white',
        fontSize: '1rem',
        position: 'relative',
        marginTop: '1rem',
        '&:hover': {
            cursor: 'pointer',
            boxShadow: 'none'
        }
    },
    endAdornment: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#dbe7ff',
        width: '2.5rem',
        height: '2.5rem',
        borderRadius: '40px'

    },
    endButtonAdornment: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2e6aec',
        width: '2.5rem',
        height: '2.5rem',
        borderRadius: '40px',
        position: 'absolute',
        top: '0.5rem',
        right: '0.5rem'
    },
    svgRoot: {
        color: theme.honest.general.main
    },
    rootInput: {
        display: 'flex',
        alignItems: 'center',
        border: 'solid 1px #d3d8e6',
        width: '18.75rem',
        borderRadius: '28px',
        margin: '0 auto',
        height: '3.5rem',
        minHeight: '56px',
        boxSizing: 'border-box',
        padding: '0.5rem 0.5rem 0.5rem 1.5rem',
        marginBottom: '1rem',
        justifyContent: 'center'
    },
    focusedInput: {
        boxShadow: '0px 0px 3px 2px rgba(76, 132, 255, 0.17)',
        border: `solid 1px ${theme.honest.general.main}`,
    },
    forgotPasswordBlock: {
        width: '18.75rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '1rem'
    },
    forgotPasswordMessage: {
        fontSize: '1rem',
        [theme.breakpoints.only('xs')]: {
            fontSize: '0.8rem'
        },
        color: theme.honest.general.main,
        '&:hover': {
            cursor: 'pointer'
        },
        fontWeight:'100'
    },
    errorMessage: {
        fontSize: '0.8rem',
        textAlign: 'center',
        fontWeight: '100',
        padding: '0  1rem 1rem 1rem',
        color: theme.honest.general.red
    },
    label: {
        fontFamily:'Gilroy-Medium,sans-serif',
        color:'#a0a6b5',
        fontWeight:'100',
        fontSize: '1rem',
        [theme.breakpoints.only('xs')]: {
            fontSize: '0.8rem'
        }
    },
    inputField: {
        height: '100%',
        width: '80%'
    },
    checked: {
        color: '#4c84ff!important'
    },
    checkboxRoot:{
        color:'#e8ebf3'
    }
});

class LoginForm extends Component {
    state = {
        isLoginValid: false,
        isPasswordValid: false
    };


    validateInput = label => event => {
        const value = event.target.value;
        if (label === 'login') {
            this.setState({
                isLoginValid: isValidEmail(value)
            })
        } else {
            this.setState({
                isPasswordValid: isValidPassword(value)
            })
        }
        return false;
    };

    renderTextField = ({
                           input,
                           label,
                           type,
                           meta,
                           meta: {touched, error},
                           className,
                           ...custom
                       }) => {
        const {classes} = this.props;
        const {isLoginValid, isPasswordValid} = this.state;
        const showEndAdornment = (type === 'email' && isLoginValid) || (type === 'password' && isPasswordValid);

        const endAdornment = showEndAdornment && (
            <span className={classes.endAdornment}>
                <CheckIcon classes={{
                    root: classes.svgRoot
                }}/>
            </span>
        );


        return (
            <div>
                <TextField
                    className={className}
                    type={type}
                    {...input}
                    {...custom}
                    error={touched && error ? true : false}
                    InputProps={{
                        disableUnderline: true,
                        endAdornment: endAdornment,
                        classes: {
                            root: classes.rootInput,
                            focused: classes.focusedInput,
                            input: classes.inputField
                        }
                    }}
                    helperText={error}

                />
            </div>
        );
    };

    render() {

        const {error, handleSubmit, pristine, submitting, classes} = this.props;
        const submit = handleSubmit(login);

        return (
                <Paper classes={{
                    root: classes.paper
                }}>
                    <form onSubmit={submit} className={classes.loginForm}>
                        <div>
                            <Field onChange={this.validateInput('login')}
                                   name="email"
                                   component={this.renderTextField}
                                   label="Email"
                                   type="email"
                                   placeholder={'E-mail'}
                            />
                        </div>
                        <div>
                            <Field onChange={this.validateInput('password')}
                                   name="password"
                                   component={this.renderTextField}

                                   label="Password"
                                   type="password"
                                   style={{
                                       color: '#d3d8e6',
                                       borderColor: this.state.isFocused ? 'red' : null
                                   }}
                                   placeholder={'Password'}
                            />
                        </div>
                        {error && <strong className={classes.errorMessage}>{error}</strong>}
                        <div>
                            <button type="submit" disabled={pristine || submitting} color="primary"
                                    className={classes.loginButton}>
                                Log In
                                <span className={classes.endButtonAdornment}>
                                    <img src={LoginIcon} alt=""/>
                                </span>
                            </button>
                        </div>
                        <div className={classes.forgotPasswordBlock}>
                            <FormControlLabel
                                style={{color: '#a0a6b5'}}
                                classes={{
                                    label: classes.label,
                                    root: classes.buttonRoot
                                }}

                                control={
                                    <Checkbox
                                        //checked={this.state.checkedA}
                                        //onChange={this.handleChange('checkedA')}
                                        value="checkedA"
                                        style={{borderColor: '#e8ebf3'}}
                                        classes={{
                                            checked: classes.checked,
                                            root:classes.checkboxRoot
                                        }}
                                    />
                                }

                                label="Remember"
                            />
                            <span className={classes.forgotPasswordMessage}>Forgot Password</span>
                        </div>
                    </form>
                </Paper>
        )
    }
};

export default reduxForm({
    form: 'loginForm', // a unique identifier for this form
})(withStyles(styles)(LoginForm));