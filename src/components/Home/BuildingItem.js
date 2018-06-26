import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import InformationItem from './InformationItem';
import {Link} from 'react-router-dom';
import ErrorIcon from '@material-ui/icons/Error';
import ActiveIcon from '@material-ui/icons/ThumbUp';
import UptimeIcon from '@material-ui/icons/History';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import PersonIcon from '@material-ui/icons/PersonOutline';
import StreetIcon from '@material-ui/icons/Streetview';
import SpeedometerIcon from '../../assets/icons/speedometer.svg';

import IconButton from '@material-ui/core/IconButton';


const styles = {
    card: {
        minWidth: 275,
        height:'35vh',
        marginBottom:'3vh',
        position:'relative'
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
        alignItems: 'flex-end',
        position: 'absolute',
        top: '12px',
        '&:hover': {
            cursor:'pointer'
        }
    },
    cover:{
        width: '75%',
        margin:'1vh'
    },
    mainContent:{
        display:'flex',
        padding: '0 2vh 0 2vh',
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
        // color:'red'
    },
};

function BuildingItem(props) {
    const { classes } = props;
    const getInfoItemIcon = (status) =>{
        let icon = null;
        if(status==='Active') {
            icon = <ActiveIcon className={classes.informationIcon} style={{color:'green'}}/>;
        } else if(status==='Inactive'){
            icon = <ErrorIcon className={classes.informationIcon} style={{color:'red'}}/>;
        } else if(status=='Speed'){
            icon = <img src={SpeedometerIcon} alt="speed"  style={{width:'3vw'}}/>;
        } else if(status==='Uptime') {
            icon = <UptimeIcon className={classes.informationIcon} style={{color:'orange'}}/>;
        } else if(status==='Contact') {
            icon = <PersonIcon className={classes.informationIcon} style={{color:'gray'}}/>;
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
                        {props.building.name} <span className={classes.streetView} onClick={()=>props.handleStreetView(props.building.name)}><StreetIcon style={{paddingRight:'5px'}}/> Street View</span>
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
                        <InformationItem content="980" caption="SPEED" sufix="mbps" icon={getInfoItemIcon('Speed')}/>
                        <InformationItem content="98.99%" caption="UPTIME" icon={getInfoItemIcon('Uptime')} />
                        <InformationItem content={props.building.networkStatus} caption="NETWORK STATUS" icon={getInfoItemIcon(props.building.networkStatus)}/>
                        <InformationItem content="Stephen Streg" caption="CONTACT" isContact={true} icon={getInfoItemIcon('Contact')}/>
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