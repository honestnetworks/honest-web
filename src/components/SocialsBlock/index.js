import { withStyles } from '@material-ui/core';
import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import facebookIcon from 'assets/icons/facebook.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import yelpIcon from 'assets/icons/yelp.svg';
import linkedinIcon from 'assets/icons/linkedin.svg';
import googlePlusIcon from 'assets/icons/google-plus.svg';
import babyfaceIcon from 'assets/icons/babyface.svg';
import rssIcon from 'assets/icons/rss.svg';

const styles = (theme) => ({
    socials: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 2rem',
        '& img:hover': {
            cursor: 'pointer'
        }
    }    
});

class SocialsBlock extends Component{
    
    render(){
        const {classes} = this.props;
        return(
            <Grid xs={12} className={classes.socials}>
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