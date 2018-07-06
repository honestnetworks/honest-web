import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
});

function ExpansionBlock(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>{props.title}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <div style={{width:'100%'}}>
                        {props.children}
                    </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}

ExpansionBlock.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ExpansionBlock);