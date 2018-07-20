import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import EmailIcon from '@material-ui/icons/MailOutline';
import CallIcon from '@material-ui/icons/Call';

const styles =(theme)=> ({
    detailLink:{
        fontSize:'0.875rem',
        display:'flex',
        justifyContent:'flex-end',
        alignItems:'center',
        color:theme.honest.general.main
    },
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
    },
    gridContactBlock:{
        marginTop:'1rem'
    }
});

function GridContact(props) {
    console.log(props);
    const { classes } = props;
    return (
        <Grid container className={classes.gridContactBlock}>
            <Grid item xs={6}>
                <Typography variant="caption" className={classes.contactName}>
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

            </Grid>
            <Grid item xs={6} className={classes.detailLink}>
                View more
            </Grid>
        </Grid>
    );
}

GridContact.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GridContact);