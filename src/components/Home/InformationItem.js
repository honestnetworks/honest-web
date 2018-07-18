import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import EmailIcon from '@material-ui/icons/MailOutline';
import CallIcon from '@material-ui/icons/Call';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import SpeedIcon from 'assets/icons/speed-icon.png';
import SpeedIcon2x from 'assets/icons/speed-icon@2x.png';
import TemperatureIcon2x from 'assets/icons/temperature-icon@2x.png';

const styles = (theme) => ({
    card: {
        minHeight:'11vh',
        display:'flex',
        boxShadow: 'none'
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
        fontSize: '1.125rem',
        color:'#171d33',
        fontWeight:'500',
        textAlign:'center'
    },
    buildAddress:{
        marginBottom: 16,
        fontSize: 16,
        color:'black',
        fontWeight:'500'
    },
    buildCity:{
        textTransform:'uppercase'
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
        color:'gray'
    },
    root: {
        backgroundColor: 'rgba(63, 81, 181, 0.08)'
    },
    chip: {
        margin: theme.spacing.unit,
        color:'#22bc8a',
        fontSize:'10px',
        paddingTop:'5px',
        paddingBottom:'5px',
        height:'auto',
        backgroundColor:'#d4f1e8'
    },
    speedIcon:{
        width:'3.5rem',
        height:'3.5rem'
    },
    temperatureIcon:{
        width:'1.125rem',
        height:'2.5625rem'
    }
});

function InformationItem(props) {
    console.log('Item props', props);
    const { classes } = props;

    return (
        <Grid  item xs={12} sm={12} className={classes.informationItem}>
            <Card className={classes.card}>
                <Grid container spacing={16}>
                    <Grid item xs={5} className={classes.contactBlock}>
                        <Grid  item xs={12}>
                            <Typography variant="caption" className={classes.buildCity}>
                                New York
                            </Typography>
                            <div className={classes.buildAddress} >
                                {props.buldingName} <Chip label="Active" className={classes.chip} />
                            </div>
                        </Grid>


                        <Grid  item xs={12}>
                            <div>
                                <Typography variant="caption">
                                    London Tucker

                                    <IconButton
                                        style={{marginLeft:'10px'}}
                                        className={classes.button}
                                        color="primary">
                                        <CallIcon className={classes.iconButton} />
                                    </IconButton>
                                    <IconButton
                                        className={classes.button}
                                        color="primary"
                                    >

                                        <EmailIcon className={classes.iconButton}
                                        />
                                    </IconButton>
                                </Typography>

                            </div>
                        </Grid>

                    </Grid>
                    <Grid item xs={3} className={classes.informationBlocks}>
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
                    <Grid item xs={4} className={classes.informationBlocks}>
                        <Grid  item xs={12}>
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

InformationItem.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InformationItem);