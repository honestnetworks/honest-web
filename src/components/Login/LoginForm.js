import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form'
import TextField from '@material-ui/core/TextField'
import blue from '@material-ui/core/colors/blue';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {login} from '../../actions/forms/login';
import {Link} from 'react-router-dom';
import RingLoader from '../Common/Spinner/RingLoader';

const theme = createMuiTheme({
    palette: {
        primary: blue,
    },
});

const renderTextField = ({input, label, type, meta: {touched, error}, className, ...custom}) => (
    <div>
        <MuiThemeProvider theme={theme}>
            <TextField
                className={className}
                label={label}
                type={type}
                {...input}
                {...custom}
                error={touched && error ? true : false}
                helperText={error}
            />
        </MuiThemeProvider>
    </div>
);

const LoginForm = props => {
    const {error, handleSubmit, pristine, reset, submitting} = props;
    const submit = handleSubmit(login);
    return (
        submitting ? <RingLoader loading={submitting}/> :
        <form onSubmit={submit}>
            <div>
                <Field name="email" component={renderTextField} label="Email" type="email"/>
            </div>
            <div>
                <Field name="password" component={renderTextField} label="Password" type="password"/>
            </div>
            {error && <strong>{error}</strong>}
            <div>
                <button type="submit" disabled={pristine || submitting} color="primary">
                    Log In
                </button>
            </div>
            <div>
                <p>Forgot Password? <Link to="/forgot-password">
                    <span>Click here.</span>
                </Link>
                </p>
            </div>
        </form>
    )
};

export default reduxForm({
    form: 'loginForm', // a unique identifier for this form
})(LoginForm)