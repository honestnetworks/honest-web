import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = (theme) => ({
    card: {
        minHeight:'11vh',
        display:'flex',
        boxShadow: 'none',
    },
    infoCaption:{
        textTransform:'uppercase',
        textAlign:'center',
        fontSize:'0.625rem',
        color:'#bebfcc'
    },
    infoMessage:{
        marginBottom: 16,
        fontSize: '18px',
        color:'#171d33',
        fontWeight:'500',
        textAlign:'center'
    },
    infoIcon:{
        width:'1.125rem',
        height:'2.5625rem'
    }
});

const AppartmentInfoBlock = (props) => {
    const { classes, title, subtitle } = props;

    return (
        <div className="ApartmentInfoBlock">
            <Grid container spacing={16} className={classes.card}>>
                <Grid item xs={12}>
                    <Typography variant="caption" className={classes.infoCaption}>
                        Up time
                    </Typography>
                    <Typography  variant="caption" className={classes.infoMessage}>
                        {props.upTime} %
                    </Typography>
                    <img src={TemperatureIcon2x} alt="" className={classes.infoIcon}/>
                </Grid>
            </Grid>
        </div>
    );
}

AppartmentInfoBlock.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppartmentInfoBlock);