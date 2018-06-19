import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form'
import TextField from '@material-ui/core/TextField'
import blue from '@material-ui/core/colors/blue';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {forgotPassword} from '../../actions/forms/forgot-password';
import {RingLoader} from 'react-spinners';

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
                error={!!(touched && error)}
                helperText={error}
            />
        </MuiThemeProvider>
    </div>
);

const ForgotPasswordForm = props => {
    const {error, handleSubmit, pristine, submitting} = props;
    const submit = handleSubmit(forgotPassword);
    return (
        submitting ? <RingLoader color={'red'} loading={submitting}/> :
            <form onSubmit={submit}>
                <h2 style={{margin: '2.5%', fontSize: '1em'}}> We'll send a new reset password link to your email.<br/>Please
                    type your email.</h2>
                <div>
                    <Field name="email" component={renderTextField} label="Email" type="email"/>
                </div>
                {error && <strong>{error}</strong>}
                <div>
                    <button type="submit" disabled={pristine || submitting} color="primary">
                        Reset password
                    </button>
                </div>
            </form>
    )
};

export default reduxForm({
    form: 'forgotPasswordForm', // a unique identifier for this form
})(ForgotPasswordForm)
