import React, {Component} from 'react';
import Button from '@material-ui/core//Button';
import {withStyles} from '@material-ui/core/styles';
import {connect} from 'react-redux';
import {forgotPasswordRequest, forgotPasswordRequestSuccess} from '../../actions/password-recovery';
import Spinner from '../Common/Spinner/Spinner';

const styles = theme => ({
    createDeckButton: {
        width: '90%',
        backgroundColor: '#00C0BF',
        marginBottom: '39px',
        padding: '13px 0 12px 0',
        marginTop: '31px',
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
class RequestToReset extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            status: false,
            message: "",
            showLoader: false,
            loading: this.props.loading,
            disabledButton: true
        };

        this.props.forgotPasswordRequestSuccess('');
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeResetEmail = this.onChangeResetEmail.bind(this);
        this.renderContent = this.renderContent.bind(this);
    }

    render() {
        return (
            <div className="reset-password-page">
                <section className="main">
                    {this.renderContent()}
                </section>
            </div>
        );
    }

    onChangeResetEmail = (event) => {
        this.setState({
            email: event.target.value
        });
        if (event.target.value.length > 0) {
            this.setState({
                disabledButton: false
            });
        } else {
            this.setState({
                disabledButton: true
            });
        }
    };

    handleSubmit(event) {
        this.props.forgotPasswordRequest(this.state.email)
    }

    renderContent() {
        const {classes} = this.props;
        return (<div className="main__wrapper">
            <form className="request-to-reset">
                <div className="request-to-reset">
                    {this.props.loading ?
                        <div className="request-to-reset">
                            <h2 style={{marginTop: '8.5%', marginBottom: '-4%', fontSize: '1em'}}>Sending email...</h2>
                            <Spinner style={{margin: '20.4% 49.2%', fontSize: '0.5em'}}/>
                        </div> :
                        this.props.message ?
                            <div className="request-to-reset">
                                <span style={{margin: '10.1%', fontSize: '1em'}}>{this.props.message}</span>
                                    <Button className={classes.createDeckButton} raised
                                            color='primary' onClick={()=>this.props.history.push('/profile/account')}>GO TO HOME PAGE</Button>
                            </div>
                            :
                            <div className="request-to-reset">
                                <h2 style={{margin: '6.5%', fontSize: '1em'}}> We'll send a new reset password link to your email.<br/>Please type your email.</h2>
                                <div className='inputWrapper'>
                                    <span>Email Address</span>
                                    <input type="email" placeholder="hello@stick.ai" onChange={this.onChangeResetEmail}
                                           required/>
                                </div>
                                <Button disabled={this.state.disabledButton} className={classes.createDeckButton} raised
                                        color='primary' onClick={this.handleSubmit}>RESET PASSWORD</Button>
                            </div>
                    }
                    <div className={"message " + (this.state.status ? "" : "error")}>
                    </div>
                </div>
            </form>
        </div>)
        // }
    }
}

const mapStateToProps = (state) => ({
    loading: state.passwordRecovery.forgotPasswordLoading,
    message: state.passwordRecovery.forgotPasswordMessage
});

const mapDispatchToProps = (dispatch) => ({
    forgotPasswordRequest: (email) => {
        dispatch(forgotPasswordRequest(email))
    },
    forgotPasswordRequestSuccess: (data) => {
        dispatch(forgotPasswordRequestSuccess(data))
    },
});

RequestToReset = connect(mapStateToProps, mapDispatchToProps)(RequestToReset);
export default withStyles(styles)(RequestToReset);
