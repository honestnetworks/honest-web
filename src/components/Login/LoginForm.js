import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form'
import TextField from '@material-ui/core/TextField'
import blue from '@material-ui/core/colors/blue';
import Paper from '@material-ui/core/Paper';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {login} from '../../actions/forms/login';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import RingLoader from '../Common/Spinner/RingLoader';

const theme = createMuiTheme({
    palette: {
        primary: blue,
    },
    overrides: {
        MuiInput:{
            root:{
                fontFamily:'Poppins, san-serif'
            }
        },
        MuiTypography:{
          root:{
              textAlign:'center',
              fontFamily:'Poppins, san-serif!important',
              color:'rgba(0, 0, 0, 0.54)!important'

          }
        },
        MuiPaper:{
            root:{
                width:'396px',
                padding:'24px'
            }
        },
        MuiFormControl: {
            root: {
                width: '100%',
            }
        },
        MuiFormLabel:{
            root:{
                fontFamily:'Poppins, san-serif'
            }
        }
    }
});

const renderTextField = ({input, label, type, meta: {touched, error}, className, ...custom}) => (
    <div>
            <TextField
                className={className}
                label={label}
                type={type}
                {...input}
                {...custom}
                error={touched && error ? true : false}
                helperText={error}
            />
    </div>
);

const LoginForm = props => {
    const {error, handleSubmit, pristine, reset, submitting} = props;
    const submit = handleSubmit(login);
    return (
        submitting ? <RingLoader loading={submitting}/> :
            <MuiThemeProvider theme={theme}>
            <Paper>
                <Typography variant="title" gutterBottom>
                    User Login
                </Typography>
        <form onSubmit={submit} className={'login-form'}>
            <div>
                <Field name="email" component={renderTextField} label="Email" type="email"/>
            </div>
            <div>
                <Field name="password" component={renderTextField} label="Password" type="password"/>
            </div>
            {error && <strong className={'login-error-message'}>{error}</strong>}
            <div>
                <button type="submit" disabled={pristine || submitting} color="primary">
                    Log In
                </button>
            </div>
            <div>
                {/*<p>Forgot Password? <Link to="/forgot-password">*/}
                    {/*<span>Click here.</span>*/}
                {/*</Link>*/}
                {/*</p>*/}
            </div>
        </form>
            </Paper>
            </MuiThemeProvider>

    )
};

export default reduxForm({
    form: 'loginForm', // a unique identifier for this form
})(LoginForm)