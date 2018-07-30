import React, {Component} from 'react';
import Layout from 'hoc/layout';
import HonestContainer from 'hoc/HonestContainer';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core';
import TextArea from 'components/TextArea';
import ContactPerson from 'components/ContactPerson';
import FlexibleList from 'components/FlexibleList';
// import WiFiAccessPointsGrid from 'components/WiFiAccessPointsGrid';
import SocialsBlock from 'components/SocialsBlock';

const styles = (theme) => ({
    root: {
        paddingTop: '3rem',
        [theme.breakpoints.down('sm')]: {
            paddingTop: '1.5rem',
            display: 'flex',
            justifyContent: 'center'
        }
    },
    blockTitle: {
        marginBottom: '1.5rem',
        marginTop: 0
    },
    mainBlokcs:{
        marginBottom: '3rem'
    }
});

const listItems = [    
    [
        { label: 'Ticket 83257', additional: {img: "assets/icons/wifi.svg", link: false} },
        { label: 'Open', additional: {img: false, link: false} },
        { label: 'Read More', additional: {img: false, link: "#"} }
    ],
    [
        { label: 'Ticket 34567', additional: {img: "assets/icons/wifi.svg", link: false} },
        { label: 'Closed', additional: {img: false, link: false, status: true} },
        { label: 'Read More', additional: {img: false, link: "#"} }
    ]
];

class Contact extends Component {

    render() {
        const { classes } = this.props;
        return (
            <Layout>
                <div className="ContactPage">
                    <HonestContainer>
                        <Grid container className={classes.root}>

                            <Grid item xs={11} md={3} lg={4} className={classes.mainBlokcs}>
                                <Grid container spacing={16}>
                                    <Grid item xs={12} lg={11}>
                                        <h4 className={classes.blockTitle}>Relationship Managers</h4>
                                        <ContactPerson />                                        
                                    </Grid>
                                    <Grid item xs={12} lg={11}>
                                        <ContactPerson />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={11} md={9} lg={8} className={classes.rightBlock}>
                                <Grid container>
                                    
                                    <Grid item xs={12} md={12} className={classes.mainBlokcs}>
                                        <h4 className={classes.blockTitle}>Support Request</h4>
                                        <TextArea placeholder="Enter your request message ..."  />
                                    </Grid>
                                    
                                    <Grid item xs={12} md={12} className={classes.mainBlokcs}>                                        
                                        <h4 className={classes.blockTitle}>Support History</h4>
                                        <FlexibleList list={[...listItems]} />
                                    </Grid>

                                    <Grid item xs={12} md={12} className={classes.mainBlokcs}>                                        
                                        <h4 className={classes.blockTitle}>Social Media</h4>
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

