import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import ApartmentContent from '../ApartmentContent';
import ApartmentHeader from '../ApartmentHeader';
import ApartmentContactBlock from '../ApartmentContactBlock';
import Grid from '@material-ui/core/Grid';


const styles =(theme)=> ({
    card: {
        minWidth: 275,
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
    informationBlocks:{
    },
    actionButton:{
        display:'inline-flex',
        position:'absolute',
        top:'3px',
        right:0
    },
    informationIcon:{
        fontSize:'3vw',
        '@media(max-width: 710px)' : {
            fontSize:'7vw',
        }
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
    detailLink:{ 
        fontSize:'0.875rem', 
        display:'flex', 
        justifyContent:'flex-end', 
        alignItems:'center', 
        color:theme.honest.general.main 
    },
    gridContactBlock:{ 
        marginTop:'1rem' 
    }
});

const ApartmentGridView = (props) => {
    console.log(props);
    const { classes, building } = props;
    return (
            <Grid item sm={12} md={6} style={{margin:'0 auto'}}>
                <Card className={classes.card}>
                    <Grid  container spacing={8} className={classes.mainContent}>
                        <ApartmentHeader building={building}/>
                        <Grid item xs={12} md={12} className={classes.mediaContainer}>
                            <CardMedia
                                className={classes.cover}
                                image={props.building.imageUrl}
                                title="Live from space album cover"
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Grid  container spacing={8} className={classes.informationBlocks}>
                                <ApartmentContent
                                    buldingName={building.name}
                                    upTime = {'88.99'}
                                    speed={'980'}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Card>
                <Grid item xs={12} className={classes.gridContactBlock}>
                    <Grid container>
                        <Grid item xs={6}>
                            <ApartmentContactBlock />
                        </Grid>
                        <Grid item xs={6} className={classes.detailLink}> 
                            View more 
                        </Grid> 
                    </Grid>
                </Grid>
            </Grid>
    );
}

ApartmentGridView.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ApartmentGridView);