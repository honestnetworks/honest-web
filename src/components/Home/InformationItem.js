import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import {createMuiTheme,MuiThemeProvider} from "@material-ui/core/styles/index";

const styles = (theme) => ({
    card: {
        minHeight:'11vh',
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
    },
    leftBlock:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    rightBlock:{
        display:'flex',
        justifyContent:'flex-start',
        alignItems:'center',
        // [theme.breakpoints.between('xs','md')]: {
        //     justifyContent:'flex-start'
        // }
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
});

const customItem = createMuiTheme({
    overrides: {
        MuiCard:{
            root:{
                boxShadow:'none',
                shadow:'none'
            }
        }
    }
});

function InformationItem(props) {
    const { classes, caption, content, sufix, isContact, icon} = props;

    return (
        <Grid  item xs={12} sm={6} className={classes.informationItem}>
            <MuiThemeProvider theme={customItem}>
            <Card className={classes.card}>
                <Grid container spacing={16}>
                <Grid item xs={4} className={classes.leftBlock}>{icon}</Grid>
                <Grid item xs={8} className={classes.rightBlock}>
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
                </Grid>
                </Grid>
            </Card>
            </MuiThemeProvider>
        </Grid>
    );
}

InformationItem.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InformationItem);