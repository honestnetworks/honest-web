import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

const styles = {
    card: {
        minWidth: '15vw',
        height:'11vh',
        display:'flex'
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
    informationItem:{
        margin:'1vh',
        '@media(max-width: 710px)' : {
            width:'100%',
            margin:'10px'
        }
    },
    leftBlock:{
        width:'40%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    rightBlock:{
        width:'60%',
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'left',
        alignItems:'center'
    },
    informationIcon:{
        fontSize:'3.5vw',
        color:'red'
    },
    button:{
        height: '30px',
        width: '30px'
    },
    iconButton:{
        fontSize: '20px'
    }

};

function InformationItem(props) {
    const { classes, caption, content, sufix, isContact, icon} = props;

    return (
        <div className={classes.informationItem}>
            <Card className={classes.card}>
                <div className={classes.leftBlock}>{icon}</div>
                <div className={classes.rightBlock}>
                    <div>
                        {caption ?  <Typography variant="caption">{caption}
                        </Typography> : null}
                        {content ? <Typography
                            style={{color:props.color?props.color:'black', fontSize:props.fontSize?props.fontSize:null}}
                            variant="body2" gutterBottom>{content}{sufix ? <span style={{fontSize:'14px'}}> {sufix}</span> : null}
                        </Typography> : null}
                        {isContact ?
                        <div>
                        <IconButton className={classes.button} color="primary">
                            <EmailIcon className={classes.iconButton}/>
                        </IconButton>
                        <IconButton className={classes.button} color="primary">
                            <CallIcon className={classes.iconButton}/>
                        </IconButton>
                        </div> : null}
                    </div>
                </div>
            </Card>
        </div>
    );
}

InformationItem.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InformationItem);