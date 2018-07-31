import { withStyles } from '@material-ui/core';
import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import facebookIcon from 'assets/icons/facebook-logo.svg';
import twitterIcon from 'assets/icons/twitter-logo.svg';
import yelpIcon from 'assets/icons/yelp-logo.svg';
import linkedinIcon from 'assets/icons/linkedin-logo.svg';
import googlePlusIcon from 'assets/icons/google-plus-logo.svg';
import babyfaceIcon from 'assets/icons/babyface-logo.svg';
import rssIcon from 'assets/icons/rss-logo.svg';

const styles = (theme) => ({
    socials: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 2rem',
        '@media(max-width: 500px)': {
            padding: 0,
        },
        '& img': {
            filter: 'grayscale(100%) contrast(0)',
            transition: 'all .2s ease'
        },
        '& img:hover': {
            cursor: 'pointer',
            filter: 'grayscale(0)'
        }
    }    
});

class SocialsBlock extends Component{
    
    render(){
        const {classes} = this.props;
        return(
            <Grid item xs={12} className={classes.socials}>
                <img src={facebookIcon} alt="facebook" />
                <img src={twitterIcon} alt="twitter" />
                <img src={yelpIcon} alt="yelp" />
                <img src={linkedinIcon} alt="linkedin" />
                <img src={googlePlusIcon} alt="googlePlus" />
                <img src={babyfaceIcon} alt="babyface" />
                <img src={rssIcon} alt="rss" />
            </Grid>
        )
    }

}

export default withStyles(styles)(SocialsBlock);