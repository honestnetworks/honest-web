import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
    dashboard: {}
});

class DashboardDetails extends Component {

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.dashboard}>
                <div>Test message</div>
            </div>

        );
    }
}

DashboardDetails.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user
});

export default withStyles(styles)(connect(mapStateToProps)(DashboardDetails));
