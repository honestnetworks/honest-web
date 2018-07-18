import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
const styles = {
    root: {
        width: '100%',
    }
};

function Signup(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <h1>Sign up page</h1>
        </div>
    );
}

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Signup);