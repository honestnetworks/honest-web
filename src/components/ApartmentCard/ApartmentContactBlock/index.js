import React from 'react'; 
import PropTypes from 'prop-types'; 
import { withStyles } from '@material-ui/core/styles'; 
import Grid from '@material-ui/core/Grid'; 
import IconButton from '@material-ui/core/IconButton'; 
import Typography from '@material-ui/core/Typography'; 
import mailIcon from 'assets/icons/phone.svg' ;
import phoneIcon from 'assets/icons/mail.svg' ;


const styles = (theme) => ({
    contactName: {
        color: '#bebfcc',
        display: 'flex',
        alignItems: 'center'
    },
    iconButton: {
        fontSize: '0.9rem',
        color: '#bebfcc'
    },
    button: {
        height: '22px',
        width: '22px',
        margin: '0 0.2rem'
    }
}); 
 
const ApartmentContactBlock = (props) => { 
    const { classes } = props; 
    const handleCallAppartment = (event) => {
        event.stopPropagation();
        console.log('call');
    }

    const handleEmailSend = (event) => {
        event.stopPropagation();
        console.log('send email');
    }
    return ( 
        <Grid item xs={12}> 
            <Typography variant="caption" className={classes.contactName}> 
                Landon Tucker 
                <a href="tel:+456 789 9800" onClick={(event)=>handleCallAppartment(event)}>
                    <IconButton 
                        style={{marginLeft:'10px'}} 
                        className={classes.button} 
                        color="primary"> 
                        <img src={mailIcon} alt="email" />
                    </IconButton> 
                </a>
                <a href="mailto:landon.tucker@honestnetwork.org" onClick={(event)=>handleEmailSend(event)}>
                    <IconButton 
                        className={classes.button} 
                        color="primary"> 
                        <img src={phoneIcon} alt="phone" />
                    </IconButton> 
                </a>
            </Typography> 
        </Grid> 
    ); 
} 
 
ApartmentContactBlock.propTypes = { 
    classes: PropTypes.object.isRequired, 
}; 
 
export default withStyles(styles)(ApartmentContactBlock);