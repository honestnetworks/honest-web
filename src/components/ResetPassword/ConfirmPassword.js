import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';
import {resetPasswordRequest, resetPasswordRequestSuccess} from '../../actions/password-recovery';
import {connect} from 'react-redux';
import Spinner from '../Common/Spinner/Spinner';

const styles = theme => ({
    createDeckButton: {
        width: '90%',
        backgroundColor: '#00C0BF',
        marginBottom: '39px',
        padding: '13px 0 12px 0',
        marginRight: '49px',
        marginLeft: '49px',
        boxShadow: 'none',
        "&:hover": {
            backgroundColor: "#00C0BF"
        },
        "&:active": {
            boxShadow: "none"
        }
    }
});
class ConfirmPassword extends Component {

    newPassword;
    repeatedPassword;

    constructor(props) {
        super(props);
        this.newPassword = '';
        this.repeatedPassword = '';

        this.state = {
            newPassword: '',
            repeatNewPassword: '',
            errorClass: '',
            errorMessage: ''
        };
        this.props.resetPasswordRequestSuccess('');
        this.handleNewPassword = this.handleNewPassword.bind(this);
        this.handleRepeatNewPassword = this.handleRepeatNewPassword.bind(this);
    }

    render() {
        const {classes} = this.props;
        let buttonStatus;
        if (this.state.newPassword.length > 7 && this.state.repeatNewPassword.length > 7 &&
            this.state.newPassword === this.state.repeatNewPassword) {
            buttonStatus = false
        } else {
            buttonStatus = true
        }
        return (
            <div className="reset-password-page">
                <section className="main">
                    <div className="main__wrapper">
                        {this.props.loading ?
                            <div className="request-to-reset">
                                <h2 style={{marginTop: '8.5%', marginBottom: '-4%', fontSize: '1em'}}>Reset
                                    password...</h2>
                                <Spinner style={{margin: '20.4% 49.2%', fontSize: '0.5em'}}/>
                            </div> :
                            this.props.message ?
                                this.props.isError ?
                                    <div className={`request-to-reset no-error error`}>
                                        <span style={{fontSize: '1.1em', margin: '11%'}}> {this.props.message} </span>
                                        <Button className={classes.createDeckButton} raised
                                                color='primary'
                                                onClick={() => this.props.history.push('/forgot-password')}>GENERATE NEW LINK</Button>
                                    </div>
                                    :
                                    <div className="request-to-reset">
                                        <span style={{margin: '10.1%', fontSize: '1em'}}>{this.props.message}</span>
                                        <Button className={classes.createDeckButton} raised
                                                color='primary' onClick={() => this.props.history.push('/')}>GO TO
                                            HOME PAGE</Button>
                                    </div>

                                :
                                <div className="reset-password">
                                    <h2 style={{margin: '7%'}}>Reset password</h2>
                                    <input className="type-password" type="password" placeholder="New password"
                                           onChange={this.handleNewPassword} required/>
                                    <input type="password" placeholder="Confirm new password"
                                           onChange={this.handleRepeatNewPassword} required/>

                                    <div className={'no-error ' + this.state.errorClass}><h2
                                        style={{fontSize: '0.75em'}}> {this.state.errorMessage} </h2>
                                    </div>
                                    <Button raised color="primary" className={classes.createDeckButton}
                                            onClick={this.handleSubmit} disabled={buttonStatus}>RESET</Button>
                                </div>}
                    </div>
                </section>
            </div>
        );
    }

    handleNewPassword = (event) => {
        this.setState({
            newPassword: event.target.value
        });
        this.props.resetPasswordRequestSuccess('');
        this.newPassword = event.target.value;
        this.passwordValidation(event);
    };

    handleRepeatNewPassword = (event) => {
        this.setState({
            repeatNewPassword: event.target.value
        });
        this.props.resetPasswordRequestSuccess('');
        this.repeatedPassword = event.target.value;
        this.passwordValidation(event);
    };

    handleSubmit = (event) => {
        event.preventDefault();
        let id = this.urlParam('id');
        if (this.state.newPassword === this.state.repeatNewPassword && this.state.newPassword.length > 7) {
            let data = {
                id: id,
                password: this.state.newPassword
            };
            this.props.resetPasswordRequest(data)
        }
    };

    urlParam = (name) => {
        // TODO: do we need this escape character '\?' ?
        // var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);

        var results = new RegExp('[?&]' + name + '=([^&#]*)').exec(window.location.href);
        if (results == null) {
            return null;
        }
        else {
            return results[1] || 0;
        }
    };

    passwordValidation = (event) => {
        this.setState({
            errorMessage: '',
            errorClass: ''
        });

        if (this.newPassword) {
            if (this.newPassword.length < 8) {
                this.setState({
                    errorMessage: 'New password must be at least 8 characters.',
                    errorClass: 'error'
                });
            } else if (this.repeatedPassword && this.newPassword &&
                this.repeatedPassword !== this.newPassword) {
                this.setState({
                    errorMessage: 'Passwords do not match, please retype',
                    errorClass: 'error'
                })
            }
        }
    };
}

const mapStateToProps = (state) => ({
    loading: state.passwordRecovery.resetPasswordLoading,
    message: state.passwordRecovery.resetPasswordMessage,
    isError: state.passwordRecovery.resetPasswordFailure,
});

const mapDispatchToProps = (dispatch) => ({
    resetPasswordRequest: (email) => {
        dispatch(resetPasswordRequest(email))
    },
    resetPasswordRequestSuccess: (data) => {
        dispatch(resetPasswordRequestSuccess(data))
    },
});

ConfirmPassword = connect(mapStateToProps, mapDispatchToProps)(ConfirmPassword);
export default  withStyles(styles)(ConfirmPassword);
