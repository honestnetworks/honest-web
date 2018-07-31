import React, {Component} from 'react';
import Layout from 'hoc/layout';
import HonestContainer from 'hoc/HonestContainer';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core';
import TextArea from 'components/TextArea';
import ContactPerson from 'components/ContactPerson';
import SocialsBlock from 'components/SocialsBlock';
import SupportHistoty from 'components/SupportHistoty';

const styles = (theme) => ({
    root: {
        paddingTop: '3rem',
        [theme.breakpoints.down('sm')]: {
            paddingTop: '2rem',
            display: 'flex',
            justifyContent: 'center'
        }
    },
    blockTitle: {
        marginBottom: '1.5rem',
        marginTop: '0.5rem'
    },
    mainBlokcs:{
        marginBottom: '3rem'
    },
    rightBlock: {
        paddingLeft: '1rem',
        [theme.breakpoints.down('sm')]: {
            paddingLeft: 0
        }
    },
});

const listItems = [    
    {
        status: true,
        label: 'Ticket 34567'
    },
    {
        status: false,
        label: 'Ticket 34568'        
    }
];

class Contact extends Component {

    render() {
        const { classes } = this.props;
        return (
            <Layout>
                <div className="ContactPage">
                    <HonestContainer>
                        <Grid container className={classes.root}>

                            <Grid item xs={11} md={4} lg={4} className={classes.mainBlokcs}>
                                <h4 className={classes.blockTitle}>Relationship Managers</h4>
                                <Grid container spacing={16}>
                                    <Grid item xs={12} sm={6} md={11} lg={11}>
                                        <ContactPerson />                                        
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={11} lg={11}>
                                        <ContactPerson />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={11} md={8} lg={8} className={classes.rightBlock}>

                                
                                <Grid container>
                                    <h4 className={classes.blockTitle}>Support Request</h4>    
                                    <Grid item xs={12} md={12} className={classes.mainBlokcs}>
                                        <TextArea placeholder="Enter your request message ..."  />
                                    </Grid>
                                    
                                    <h4 className={classes.blockTitle}>Support History</h4>
                                    <Grid item xs={12} md={12} className={classes.mainBlokcs}>                                        
                                        <SupportHistoty list={[...listItems]} />
                                    </Grid>

                                    <h4 className={classes.blockTitle}>Social Media</h4>
                                    <Grid item xs={12} md={12} className={classes.mainBlokcs}>                                            
                                        <SocialsBlock />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </HonestContainer>
                </div>
            </Layout>

        );
    }
}

export default withStyles(styles)(Contact);

