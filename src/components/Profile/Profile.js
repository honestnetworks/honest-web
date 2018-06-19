import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const styles = theme => ({
    root: {
        //flexGrow: 1,
    },
    sideMenu: {
        width: '20%',
        backgroundColor: '#6A8A91',
    },
    mainContent: {
        width: '80%',
        backgroundColor: 'rgba(123, 146, 158, 0.1)',
    },
    row: {
        display: 'flex',
        justifyContent: 'center',
        pointer: 'relative'
    },
    avatar: {
        margin: 10,
    },
    bigAvatar: {
        width: 72,
        height: 72,
    },
    avatarButton: {
        height: '26px',
        width: '26px',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        position: 'absolute',
        margin: '23px',
        marginTop: '58px',
        borderRadius: '20px',
        '&:hover': {
            cursor: 'pointer'
        }
    }
});

class Profile extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props)
        return (
            <div>Hello world!</div>
        );
    }
}

Profile.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return {
        store: state
    }
};

Profile = connect(mapStateToProps, null)(Profile);
export default withStyles(styles)(Profile);
