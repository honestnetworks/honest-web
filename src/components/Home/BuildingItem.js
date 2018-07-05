import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import InformationItem from './InformationItem';
import {Link} from 'react-router-dom';
import ErrorIcon from '../../assets/icons/inactive.png';
import ActiveIcon from '../../assets/icons/active.png';
import UptimeIcon from '../../assets/icons/uptime.png';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import PersonIcon from '../../assets/icons/person.png';
import StreetIcon from '../../assets/icons/mapIcon.png';
import SpeedometerIcon from '../../assets/icons/speed.png';

import IconButton from '@material-ui/core/IconButton';


const styles = {
    card: {
        minWidth: 275,
        height:'35vh',
        marginBottom:'3vh',
        position:'relative',
        '@media(max-width: 887px)' : {
            marginLeft:'2vh'
        },
        '@media(max-width: 710px)' : {
            height:'auto'
        }
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
    pos: {
        marginBottom: 12,
    },
    streetView:{
        paddingLeft: '20px',
        color:'blue',
        display: 'inline-flex',
        alignItems: 'center',
        position: 'absolute',
        top: '16px',
        '&:hover': {
            cursor:'pointer'
        }
    },
    cover:{
        width: '75%',
        margin:'1vh',
        '@media(max-width: 710px)' : {
            height:'14vh',
            width:'100%'
        }
    },
    mainContent:{
        display:'flex',
        padding: '0 2vh 0 2vh',
        '@media(max-width: 710px)' : {
            flexWrap:'wrap'
        }

    },
    informationBlocks:{
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'center'
    },
    actionButton:{
        display:'inline-flex',
        position:'absolute',
        top:0,
        right:'2vw'
    },
    informationIcon:{
        fontSize:'3vw',
        '@media(max-width: 710px)' : {
            fontSize:'7vw',
        }
        // color:'red'
    },
    iconImage:{
          width:'4vw',
        '@media(max-width: 710px)' : {
            width:'8vw',
        }
    },
    modifyIcon:{
        height:'3vw',
        '@media(max-width: 710px)' : {
            height:'7vw',
        }
    }
};

function BuildingItem(props) {
    const { classes } = props;
    const getInfoItemIcon = (status) =>{
        let icon = null;
        if(status==='Active') {
            icon = <img src={ActiveIcon} alt="speed"  className={classes.iconImage} />;
        } else if(status==='Inactive'){
            icon = <img src={ErrorIcon} alt="speed"  className={classes.iconImage} />;
        } else if(status=='Speed'){
            icon = <img src={SpeedometerIcon} alt="speed" className={classes.iconImage}  />;
        } else if(status==='Uptime') {
            icon = <img src={UptimeIcon} alt="speed"  className={classes.iconImage} />;
        } else if(status==='Contact') {
            icon = <img src={PersonIcon} alt="speed"  className={` ${classes.modifyIcon}`}/>;
        }

        return icon
    };

    const getNameWithoutSpace = (name) => {
        return name.replace(/\s/g, "")
    };

    const returnDetailsLink = () => {
        return props.linkToDetails ?
        (
            <Link to={{pathname: `details/${getNameWithoutSpace(props.building.name)}`, state:{building:props.building}}} >
                <MoreHorizIcon className={classes.iconButton}/>
            </Link>
        ) : <MoreHorizIcon className={classes.iconButton}/>
    };

    return (
        <div>
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary">
                        {props.building.name} <span className={classes.streetView} onClick={()=>props.handleStreetView(props.building.name)}><img src={StreetIcon} alt="map" style={{paddingRight:'5px'}}/> Street View</span>
                    </Typography>
                    <IconButton className={classes.actionButton} color="primary">
                        {returnDetailsLink()}
                    </IconButton>
                </CardContent>
                <div className={classes.mainContent}>
                    <CardMedia
                        className={classes.cover}
                        image={props.building.imageUrl}
                        title="Live from space album cover"
                    />
                    <div className={classes.informationBlocks}>
                        <InformationItem content="980"
                                         caption="SPEED"
                                         sufix="mbps"
                                         icon={getInfoItemIcon('Speed')}
                                         color={'#4c84ff'}
                                         fontSize="1.75em"
                        />
                        <InformationItem content="98.99%"
                                         color={"#fcc22d"}
                                         fontSize="1.75em"
                                         caption="UPTIME"
                                         icon={getInfoItemIcon('Uptime')}
                        />
                        <InformationItem
                            content={props.building.networkStatus}
                            caption="NETWORK STATUS"
                            icon={getInfoItemIcon(props.building.networkStatus)}
                            color={props.building.networkStatus==='Active'?'#3bc195':'#fc7d7d'}
                        />
                        <InformationItem
                            content="Stephen Streg"
                            caption="CONTACT"
                            isContact={true}
                            icon={getInfoItemIcon('Contact')}
                        />
                    </div>
                </div>
            </Card>
        </div>
    );
}

BuildingItem.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BuildingItem);