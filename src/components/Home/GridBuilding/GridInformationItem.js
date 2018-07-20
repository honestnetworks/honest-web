import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import SpeedIcon2x from 'assets/icons/speed-icon@2x.png';
import TemperatureIcon2x from 'assets/icons/temperature-icon@2x.png';

const styles = (theme) => ({
    card: {
        minHeight:'11vh',
        display:'flex',
        boxShadow: 'none',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
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
    pos: {
        marginBottom: 12,
    },
    informationItem:{
        //position:'relative'
    },
    contactBlock:{
        display:'flex',
        justifyContent:'center',
        flexWrap:'wrap'
    },
    informationBlocks:{
        display:'flex',
        justifyContent:'center',
        flexWrap:'wrap',
        '& img':{
            display:'block',
            margin:'0 auto'
        }
    },
    informationIcon:{
        fontSize:'3.5vw',
        color:'red'
    },
    button:{
        height: '22px',
        width: '22px',
        margin: '0 0.2rem'
    },
    iconButton:{
        fontSize: '0.9rem',
        color:'#bebfcc'
    },
    root: {
        backgroundColor: 'rgba(63, 81, 181, 0.08)'
    },
    speedIcon:{
        width:'3.5rem',
        height:'3.5rem'
    },
    temperatureIcon:{
        width:'1.125rem',
        height:'2.5625rem'
    },
    contactName:{
        color:'#bebfcc'
    }
});

function GridInformationItem(props) {
    const { classes } = props;

    return (
        <Grid  item xs={12} sm={12} className={classes.informationItem}>
            <Card className={classes.card}>
                <Grid container spacing={16}>
                    <Grid item xs={6} className={classes.informationBlocks}>
                        <Grid item xs={12}>
                            <Typography variant="caption" className={classes.infoCaption}>
                                Up time
                            </Typography>
                            <Typography  variant="caption" className={classes.infoMessage}>
                                {props.upTime} %
                            </Typography>
                            <img src={TemperatureIcon2x} alt="" className={classes.temperatureIcon}/>
                        </Grid>
                    </Grid>
                    <Grid item xs={6} className={classes.informationBlocks}>
                        <Grid  item xs={12} style={{borderLeft:'1px solid #ebedf5'}}>
                            <Typography variant="caption" className={classes.infoCaption}>
                                Speed
                            </Typography>
                            <Typography variant="caption" className={classes.infoMessage}>
                                {props.speed} Mbps
                            </Typography>
                            <img src={SpeedIcon2x} alt="" className={classes.speedIcon}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Card>
        </Grid>
    );
}

GridInformationItem.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GridInformationItem);