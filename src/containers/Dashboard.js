import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import NavBar from '../components/Dashboard/NavBar'
import {withStyles} from '@material-ui/core/styles';

const styles = () => ({
    dashboard:{}
});

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.dashboard}>
                <NavBar/>





            </div>

        );
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
/**
 * Created by root on 19.06.18.
 */
