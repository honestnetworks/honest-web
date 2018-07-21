import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import createStyles from '@material-ui/core/styles/createStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

const styles = (theme) =>
    createStyles({
        chip: {
            margin: theme.spacing.unit,
            color: '#22bc8a',
            fontSize: '12px',
            paddingTop: '5px',
            paddingBottom: '5px',
            height: 'auto',
            backgroundColor: '#d4f1e8',
            position: 'absolute',
            top: '-6px',
            right: '0',
            '& span:before': {
                content: `''`,
                borderRadius: '90px',
                height: '0.40rem',
                width: '0.40rem',
                backgroundColor: '#22bc8a',
                marginRight: '5px'
            }
        },
        buildAddress: {
            marginBottom: 16,
            fontSize: '18px',
            color: '#171d33',
            fontWeight: '500'
        },
        relativeBlock: {
            position: 'relative'
        },
        buildCity: {
            textTransform: 'uppercase',
            fontSize: '0.625rem',
            color: '#bebfcc'
        }
    });

const ApartmentHeader = (props) => {
    const { classes, building: { name, city } } = props;
    return (
        <Grid  item xs={12} className={classes.relativeBlock}>
            <Typography variant="caption" className={classes.buildCity}>
                {city}
            </Typography>
            <div className={classes.buildAddress} >
                {name} <Chip label="Active" className={classes.chip}/>
            </div>
        </Grid>
    );
}

ApartmentHeader.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ApartmentHeader);