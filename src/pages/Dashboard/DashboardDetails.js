import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import HonestContainer from 'hoc/HonestContainer';
import Layout from 'hoc/layout';
import ApartmentGridView from 'components/ApartmentCard/ApartmentGridView';
import BackLink from 'components/BackLink';
import RequestTextField from 'components/RequestTextField';
import DetailsStatisticsGrid from 'components/DetailsStatisticsGrid';
import NetworkChart from 'components/NetworkChart';
import SpeedtestIndicator from 'components/SpeedtestIndicator';
import SpeedtestCard from 'components/SpeedtestCard';
import Button from '@material-ui/core/Button';
import WiFiAccessPointsGrid from 'components/WiFiAccessPointsGrid';

import flatImage1 from 'assets/images/flatImage-1.jpg';
import SpeedIcon from 'assets/icons/speed.svg';

const building = {
        "id": 1,
        "imageUrl": flatImage1,
        "city": 'New York',
        "networkStatus": 'Active',
        "address": '222 Jersey City Blvd, Jersey City, NJ 07305, USA',
        "name": '800 Sixth Ave'
};

const wifiPoints = [
    {
        name: 'Roof Storage',
        uptime: 99.99,
        users: 5
    },
    {
        name: 'Home Office',
        uptime: 99.99,
        users: 5
    },
    {
        name: `John's Room`,
        uptime: 99.99,
        users: 5
    },
    {
        name: 'My Bedroom',
        uptime: 99.99,
        users: 5
    }
]

const statistics = [
    {
        label: 'Tenant Satisfaction',
        value: 100,
        unit: '%'
    },
    {
        label: 'Ticket Response',
        value: 2.23,
        unit: 'min'
    }
];

const styles = (theme) => ({
    root: {
        paddingTop: '3rem'
    },
    statictics: {
        margin: '1rem 0'
    },
    rightBlock: {
        paddingTop: '1rem',
        paddingLeft: '1rem'
    },
    blockTitle: {
        paddingTop: '6rem',
    },
    speedCard: {
        padding: '0 4rem'
    },
    tryAgainButton: {
        borderRadius: '50px',
        fontSize: '0.75rem',
        padding: '0 2rem',
        textTransform: 'none',
        background: theme.honest.general.main,
        color: theme.honest.general.white,
        boxShadow: '0px 4px 12px 0px rgba(76, 132, 255, 0.16)',
            '&:hover': {
            background: theme.honest.general.main,
            color: theme.honest.general.white,
            boxShadow: '0px 4px 12px 0px rgba(76, 132, 255, 0.16)'
        }
    }
});

class DashboardDetails extends Component {

    onTryAgainClick = () => {
        console.log("Clicked on try again button")
    }

    render() {
        const { classes } = this.props;
        return (
            <Layout>
                <div className="DashboardDetails">
                    <HonestContainer>
                        <Grid 
                            container 
                            className={classes.root}
                        >
                            <Grid item xs={3} lg={4}>
                                <Grid item xs={12}>
                                    <BackLink 
                                        link={'/dashboard'}
                                        backPageTitle={'List'}
                                    />
                                </Grid>
                                <Grid container spacing={16}>
                                    <Grid item xs={12} lg={11}>
                                        <ApartmentGridView 
                                            building={{...building}}
                                        />
                                    </Grid>
                                    <Grid item xs={12} lg={11}>
                                        <RequestTextField 
                                            placeholder="Enter your request message ..." 
                                        />
                                    </Grid>
                                    <Grid item xs={12} lg={11} className={classes.statictics}>
                                        <DetailsStatisticsGrid
                                            statistics={[...statistics]}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={9} lg={8} className={classes.rightBlock}>
                                <Grid container>
                                    <Grid item xs={12}>
                                        <Grid container>
                                            <Grid item xs={3}>
                                                {'Network'}
                                            </Grid>
                                            <Grid item xs={12} style={{ paddingTop: '4rem' }}>
                                                <NetworkChart />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container>
                                            <Grid item xs={12}>
                                                <Grid container className={classes.blockTitle}>
                                                    <Grid item xs={6}>
                                                        {'Speedtest'}
                                                    </Grid>
                                                    <Grid 
                                                        style={{
                                                            display: 'flex',
                                                            justifyContent: 'flex-end'
                                                        }}
                                                        item 
                                                        xs={6}
                                                    >
                                                    <Button 
                                                        className={classes.tryAgainButton}
                                                        variant="raised"
                                                        onClick={this.onTryAgainClick}>
                                                            Try again
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={11}>
                                                <Grid container style={{paddingTop: '4rem'}}>
                                                    <Grid item xs={6} lg={7} className={classes.speedCard}>
                                                        <SpeedtestCard />
                                                    </Grid>
                                                    <Grid item xs={6} lg={5}>
                                                        <SpeedtestIndicator
                                                            imageUrl={SpeedIcon}
                                                        />
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container>
                                            <Grid item xs={12} className={classes.blockTitle}>
                                                {'WiFi Access Points'}
                                            </Grid>
                                            <Grid item xs={12} style={{padding: '2rem 0'}}>
                                                <WiFiAccessPointsGrid 
                                                    wifiPoints={[...wifiPoints]}
                                                />
                                            </Grid>
                                        </Grid>
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

DashboardDetails.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user
});

export default withStyles(styles)(connect(mapStateToProps)(DashboardDetails));
