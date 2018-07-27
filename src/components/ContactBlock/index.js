import React from 'react';
import { withStyles } from "@material-ui/core/styles/index";
import Grid from '@material-ui/core/Grid';
import phoneIcon from 'assets/images/phone.svg';
import mailIcon from 'assets/images/mail-blue.svg';
import classNames from 'classnames';

const styles = theme => ({
    root: {
    },
    logo: {
        width: '63px',
        paddingLeft: '4rem',
        paddingTop: '3rem'
    },
    contactInfo: {
        display: 'flex',
        alignItems: 'center',
        fontSize: '0.75rem',
        '&.mail': {
            color: theme.honest.general.main
        }
    },
    mailIcon: {
        fontSize: '1rem',
        color: theme.honest.general.main
    },
    mailWrapper: {
        borderRadius: '1rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '2rem',
        height: '2rem',
        background: '#dbe7ff',
        marginRight: '0.5rem'
    },
    phoneIcon: {
        fontSize: '1rem',
        color: '#a0a6b5'
    },
    phoneWrapper: {
        borderRadius: '1rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '2rem',
        height: '2rem',
        background: '#e8ebf3',
        marginRight: '0.5rem'
    }
})

const ContactBlock = ({
    classes
}) => (
        <div className="ContactBlock">
            <Grid
                container
                spacing={16}
                className={classes.root}
            >
                <Grid item xs={12} className={classNames(classes.contactInfo, 'phone')}>
                    <div className={classes.phoneWrapper}>
                        <img src={phoneIcon} alt="phone" />
                    </div>
                    <span>
                        {'+456 789 9800'}
                    </span>
                </Grid>
                <Grid item xs={12} className={classNames(classes.contactInfo, 'mail')}>
                    <div className={classes.mailWrapper}>
                        <img src={mailIcon} alt="mail" />
                    </div>
                    <span>
                        {'landon.tucker@honestnetwork.org'}
                    </span>
                </Grid>
            </Grid>
        </div>
    );

export default withStyles(styles)(ContactBlock);