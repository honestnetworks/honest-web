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
import StatisticsBlock from 'components/StatisticsBlock';


import flatImage1 from 'assets/images/flatImage-1.jpg';

const building = {
        "id": 1,
        "imageUrl": flatImage1,
        "city": 'New York',
        "networkStatus": 'Active',
        "address": '222 Jersey City Blvd, Jersey City, NJ 07305, USA',
        "name": 'Jersey City'
};

const styles = (theme) => ({
    root: {
        paddingTop: '2rem'
    },
    statictics: {
        margin: '1rem 0'
    }
});

class DashboardDetails extends Component {

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
                            <Grid item xs={12}>
                                <BackLink 
                                    link={'/dashboard'}
                                    backPageTitle={'List'}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <Grid container spacing={16}>
                                    <Grid item xs={12}>
                                        <ApartmentGridView 
                                            building={{...building}}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <RequestTextField 
                                            placeholder="Enter your request message ..." 
                                        />
                                    </Grid>
                                    <Grid item xs={12} className={classes.statictics}>
                                        <StatisticsBlock
                                            tenantSatisfactionPercent={100}
                                            ticketResponseTime={2.23}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={9}>
                            
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
