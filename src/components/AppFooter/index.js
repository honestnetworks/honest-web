import React from 'react';
import { withStyles } from "@material-ui/core/styles/index";
import Grid from '@material-ui/core/Grid';
import FooterStatisticsGrid from 'components/FooterStatisticsGrid';
import InfoHeader from 'components/InfoHeader';
import HonestContainer from 'hoc/HonestContainer';
import classNames from 'classnames';

import logoTitle from 'assets/images/login-title-image.png';
import GoogleLogo from 'assets/icons/google-logo.svg';
import YelpLogo from 'assets/icons/yelp-logo.svg';

const styles  = theme => ({
    root: {
        background: theme.honest.general.white, 
        height: '350px', 
        // width: '100vw',
        marginTop: '2rem',
    },
    logo: {
        width:'63px',
        paddingTop: '3rem'
    },
    extendedRoot: {
        background: '#dbe7ff',
        width: '363px',
        height: '125px',
        marginTop: '3rem',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '2.5rem',
        marginLeft: '6.5rem'
    },
    extended: {
        color: '#4c84ff'
    },
    yelpLogo: {
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: '1rem'
    },
    googleLogo: {
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: '1rem'
    }
});

const statistics = [
    {
        label: 'Buildings in New York use Honest Network!',
        value: 30,
        unit: '%'
    }
];

const AppFooter = ({
    classes
}) => (
    <footer>
        <div className={classNames("footer", classes.root)}>
            <HonestContainer>
                <Grid container>
                    <Grid item xs={3}>
                        <img 
                            src={logoTitle} 
                            className={classes.logo} 
                            alt="logo"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <FooterStatisticsGrid
                            classes={{
                                root: classes.extendedRoot,
                                extendedValue: classes.extended,
                                extendedUnit: classes.extended,
                                extendedLabel: classes.extended

                            }}
                            statistics={[...statistics]}
                        />
                    </Grid>
                    <Grid item xs={5} style={{ paddingTop: '4rem', paddingLeft: '5.5rem' }}>
                        <Grid container>
                            <Grid item xs={6}>
                                <Grid container>
                                    <Grid item xs={12} className={classes.yelpLogo}>
                                    <img 
                                        src={YelpLogo}  
                                        alt="yelp"
                                    />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <InfoHeader 
                                            title={'YELP RATING'}
                                            subtitle={'5/5'}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={6}>
                                <Grid container>
                                    <Grid item xs={12} className={classes.googleLogo}>
                                        <img 
                                            src={GoogleLogo}  
                                            alt="google"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <InfoHeader 
                                            title={'GOOGLE RATING'}
                                            subtitle={'5/5'}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </HonestContainer>
        </div>
    </footer>
);

export default withStyles(styles)(AppFooter);