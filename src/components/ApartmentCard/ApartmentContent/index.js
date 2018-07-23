import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import SpeedIcon2x from 'assets/icons/speed-icon@2x.png';
import TemperatureIcon2x from 'assets/icons/temperature-icon@2x.png';
import InfoHeader from 'components/InfoHeader';

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
    buildAddress:{
        marginBottom: 16,
        fontSize: '18px',
        color:'#171d33',
        fontWeight:'500'
    },
    buildCity:{
        textTransform:'uppercase',
        fontSize:'0.625rem',
        color:'#bebfcc'
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
    chip: {
        margin: theme.spacing.unit,
        color:'#22bc8a',
        fontSize:'12px',
        paddingTop:'5px',
        paddingBottom:'5px',
        height:'auto',
        backgroundColor:'#d4f1e8',
        position:'absolute',
        top:'-6px',
        right:'0',
        '& span:before':{
            content:`''`,
            borderRadius:'90px',
            height:'0.40rem',
            width:'0.40rem',
            backgroundColor:'#22bc8a',
            marginRight:'5px'
        }
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
    },
    relativeBlock:{
        position:'relative'
    }
});

const ApartmentContent = (props) => {
    const { classes } = props;

    return (
        <Grid item xs={12} className={classes.informationItem}>
            <Card className={classes.card}>
                <Grid container spacing={16}>

                    <Grid item xs={6} className={classes.informationBlocks}>
                        <InfoHeader 
                            title={'Up time'}
                            subtitle={`${props.upTime} %`}
                        />
                        <Grid item xs={12}>
                            <img src={TemperatureIcon2x} alt="" className={classes.temperatureIcon}/>
                        </Grid>
                    </Grid>
                    <Grid item xs={6} style={{borderLeft:'1px solid #ebedf5'}} className={classes.informationBlocks}>
                        <InfoHeader 
                            title={'Speed'}
                            subtitle={`${props.speed} Mbps`}
                        />
                        <Grid item xs={12}>
                            <img src={SpeedIcon2x} alt="" className={classes.speedIcon}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Card>
        </Grid>
    );
}

ApartmentContent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ApartmentContent);