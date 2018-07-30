import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
// import classNames from 'classnames';
import ContactBlock from 'components/ContactBlock';

const styles = (theme) => ({
    card: {
        boxShadow: '0 1px 3px 0 rgba(201, 203, 209, 0.24)',
        borderRadius: '5px',
        padding: '1.2rem'
    },
    avatarContainer: {
        display: 'flex'
    },
    avatar: {
        color: '#e9b461',
        background: '#ffedd4',
        width: '3rem',
        height: '3rem',
        fontSize: '0.9rem'
    },
    name: {
        fontSize: '0.85rem'
    },
    caption: {
        color: '#bebfcc',
        fontSize: '0.85rem'
    },
    avatarInfo: {
        fontSize: '0.75rem',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        marginLeft: '1rem'
    },
    separate: {
        background: '#e8ebf3',
        height: '1px',
        width: "100%" ,
        margin: '25px 0'
    },
    infoContainer: {
        '& a':{
            marginLeft: '1.5rem',
            '@media(max-width: 700px)': {
                marginLeft: 0,
            }
        },
        
    }
});

class ContactPerson extends Component {

    handleChange = event => {
        this.setState({
            text: event.target.value,
        });
    };

    render() {
        const { classes } = this.props;

        return (
            <Grid item xs={12} style={{ margin: '0 auto' }}>
                <Card className={classes.card}>
                    <Grid container spacing={8} className={classes.mainContent}>

                        <Grid item xs={12} className={classes.avatarContainer}>
                            <Avatar className={classes.avatar}>
                                RM
                            </Avatar>
                            <div item xs={10} className={classes.avatarInfo}>
                                <div className={classes.name}>
                                    Robert Muller
                                </div>
                                <div className={classes.caption}>
                                    CTO
                                </div>
                            </div>
                        </Grid>
                        <div className={classes.separate}></div>
                        <Grid item xs={12} className={classes.infoContainer}>
                            <Grid container>
                                <ContactBlock />
                            </Grid>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
        );
    }
}

export default withStyles(styles)(ContactPerson);