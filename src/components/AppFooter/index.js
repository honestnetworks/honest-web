import React from 'react';
import { withStyles } from "@material-ui/core/styles/index";
import Grid from '@material-ui/core/Grid';
import logoTitle from 'assets/images/login-title-image.png';

const styles  = theme => ({
    root: {
        background: theme.honest.general.white, 
        height: '350px', 
        width: '100vw',
        marginTop: '2rem',
    },
    logo: {
        width:'63px',
        paddingLeft: '4rem',
        paddingTop: '3rem'
    }
})
const AppFooter = ({
    classes
}) => (
    <footer>
        <div className="footer">
            <Grid container className={classes.root}>
                <Grid item xs={4}>
                    <img 
                        src={logoTitle} 
                        className={classes.logo} 
                        alt="logo"
                    />
                </Grid>
                <Grid item xs={4}>
                </Grid>
                <Grid item xs={4}>
                </Grid>
            </Grid>
        </div>
    </footer>
);

export default withStyles(styles)(AppFooter);