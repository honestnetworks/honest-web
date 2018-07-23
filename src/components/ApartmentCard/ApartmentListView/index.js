import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import PlayIcon from '@material-ui/icons/PlayArrow';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import ApartmentContent from '../ApartmentContent';
import ApartmentContactBlock from '../ApartmentContactBlock';
// import {Link} from 'react-router-dom';

const styles =(theme)=> ({
    card: {
        minWidth: 275,
        //height:'35vh',
        marginBottom:'3vh',
        position:'relative',
        boxShadow:'0 1px 3px 0 rgba(201, 203, 209, 0.24)',
        borderRadius:'6px',
        [theme.breakpoints.down('sm')]: {
            marginLeft:'2vh'
        },
        '@media(max-width: 710px)' : {
           // height:'auto'
        }
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        marginBottom: 16,
        fontSize: 16,
        color:'black',
        fontWeight:'500'
    },
    pos: {
        marginBottom: 12,
    },
    streetView:{
        paddingLeft: '20px',
        color:'#7ca5ff',
        fontWeight:'400',
        fontSize:12,
        display: 'inline-flex',
        alignItems: 'flex-start',
        position: 'absolute',
        top: '17px',
        '&:hover': {
            cursor:'pointer'
        }
    },
    mediaContainer:{
        [theme.breakpoints.up('md')]: {
            paddingRight:'20px!important'
        }
    },
    cover:{
        height:'100%',
        minHeight:'12vh',
        borderRadius:'4px'
    },
    headerContent:{
        borderBottom:'1px #e8eaf0 solid',
        paddingBottom:'0px'
    },
    mainContent:{
        padding: '2vh 2vh 2vh 2vh',
        marginTop: '0'
    },
    actionButton:{
        display:'inline-flex',
        position:'absolute',
        top:'3px',
        right:0
    },
    iconImage:{
        width:'4vw',
        [theme.breakpoints.only('xs')]: {
            width:'12vw'
        },
        [theme.breakpoints.only('sm')]: {
            width:'8vw'
        }

    },
    modifyIcon:{
        height:'3vw',
        [theme.breakpoints.down('sm')]: {
            height:'7vw'
        }
    },
    playButton:{
        alignSelf: 'center',
        right: '13px',
        top: '-12px',
        height:'2rem',
        width:'2rem',
        backgroundColor: '#ffffff',
        border:'4px solid #f5f6fa',
        color:'#c2c6d1',
        '&:hover':{
            color:'#4c84ff'
        }
    },
    root: {
        backgroundColor: 'rgba(255, 255, 255, 1)'
    },
    iconButton:{
        fontSize:'14px',
        zIndex:'1000'
    },
    contactBlock:{
        display:'flex',
        justifyContent:'center',
        flexWrap:'wrap'
    },
    informationBlocks:{
        display:'flex',
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
    },
    buildCity: {
        textTransform:'uppercase',
        color: '#bebfcc',
        fontSize: '0.625rem'
    }
});

const ApartmentListView = (props) => {
    const { classes } = props;

    const handleButtonClick = (id) => {
        const {history} = props;
        if(id === ''){
            return;
        }
        history.push(`/details/${id}`)
    }

    return (
            <Grid container justify="center">
                <Grid item xs={9} style={{marginLeft:'2rem'}}>
                    <Card className={classes.card}>
                        <Grid  container spacing={8} className={classes.mainContent}>
                            <Grid item xs={12} md={3} className={classes.mediaContainer}>
                                <CardMedia
                                    className={classes.cover}
                                    image={props.building.imageUrl}
                                    title="Live from space album cover"
                                />
                            </Grid>
                            <Grid item xs={12} md={9}>
                                <Grid container spacing={8} className={classes.informationBlocks}>
                                    <Grid item xs={5} className={classes.contactBlock}>

                                        <Grid item xs={12} className={classes.relativeBlock}>
                                            <Typography variant="caption" className={classes.buildCity}>
                                                {props.building.city}
                                            </Typography>
                                            <div className={classes.buildAddress} >
                                                {props.building.name} <Chip label="Active" className={classes.chip} />
                                            </div>
                                        </Grid>
                                        <Grid item xs={12}>
                                        <ApartmentContactBlock />
                                        </Grid>

                                    </Grid>
                                    <Grid item xs={12} md={7}>
                                    <ApartmentContent
                                        buldingName={props.building.name}
                                        upTime = {'88.99'}
                                        speed={'980'}
                                    />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
                    <IconButton
                        TouchRippleProps={{
                            classes: {
                                root: classes.root
                            }
                        }}
                        className={classes.playButton}
                        color="primary"
                        onClick={() => handleButtonClick(props.building.id)}
                    >
                        <PlayIcon 
                            className={classes.iconButton}
                        />
                    </IconButton>
                </Grid>
            );
}

ApartmentListView.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(ApartmentListView));