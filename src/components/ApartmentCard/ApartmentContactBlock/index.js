import React from 'react'; 
import PropTypes from 'prop-types'; 
import { withStyles } from '@material-ui/core/styles'; 
import Grid from '@material-ui/core/Grid'; 
import IconButton from '@material-ui/core/IconButton'; 
import Typography from '@material-ui/core/Typography'; 
import EmailIcon from '@material-ui/icons/MailOutline'; 
import CallIcon from '@material-ui/icons/Call'; 
import mailIcon from 'assets/images/phone.svg' ;
import phoneIcon from 'assets/images/mail.svg' ;


const styles = (theme) => ({ 
    contactName:{ 
        color:'#bebfcc' 
    }, 
    iconButton:{ 
        fontSize: '0.9rem', 
        color:'#bebfcc' 
    }, 
    button:{ 
        height: '22px', 
        width: '22px', 
        margin: '0 0.2rem' 
    }
}); 
 
const ApartmentContactBlock = (props) => { 
    const { classes } = props; 
    return ( 
        <Grid item xs={12}> 
            <Typography variant="caption" className={classes.contactName}> 
                Landon Tucker 
                <IconButton 
                    style={{marginLeft:'10px'}} 
                    className={classes.button} 
                    color="primary"> 
                    <img src={mailIcon} />
                    {/* <EmailIcon className={classes.iconButton} />  */}
                </IconButton> 
                <IconButton 
                    className={classes.button} 
                    color="primary"> 
                    {/* <CallIcon className={classes.iconButton} />  */}
                    <img src={phoneIcon} />
                </IconButton> 
            </Typography> 
        </Grid> 
    ); 
} 
 
ApartmentContactBlock.propTypes = { 
    classes: PropTypes.object.isRequired, 
}; 
 
export default withStyles(styles)(ApartmentContactBlock);