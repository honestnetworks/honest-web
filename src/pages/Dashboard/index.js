import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import DropDownIcon from '@material-ui/icons/ArrowDropDown';
import gridIcon from 'assets/icons/grid.svg';
import listIcon from 'assets/icons/list.svg';
import { withStyles } from '@material-ui/core/styles';
import Layout from 'hoc/layout';
import ApartmentListView from 'components/ApartmentCard/ApartmentListView';
import ApartmentGridView from 'components/ApartmentCard/ApartmentGridView';
import HonestContainer from 'hoc/HonestContainer';
import ApartmentContactBlock from 'components/ApartmentCard/ApartmentContactBlock';
import classNames from 'classnames';

import flatImage1 from 'assets/images/flatImage-1.png';
import flatImage2 from 'assets/images/flatImage-2.png';
import flatImage3 from 'assets/images/flatImage-3.png';
import flatImage4 from 'assets/images/flatImage-4.png';
import { Hidden } from '../../../node_modules/@material-ui/core';

const Buildings = [
    {
        "id": 1,
        "imageUrl": flatImage1,
        "city": 'New York',
        "networkStatus": 'Active',
        "address": '222 Jersey City Blvd, Jersey City, NJ 07305, USA',
        "name": 'Jersey City'
    },
    {
        "id": 2,
        "imageUrl": flatImage2,
        "networkStatus": 'Inactive',
        "city": 'New York',
        "address": '63 Flushing Ave, Brooklyn, NY 11205, USA',
        "name": 'Flushing Ave'
    },
    {
        "id": 3,
        "imageUrl": flatImage3,
        "networkStatus": 'Active',
        "city": 'New York',
        "address": '182 NJ-10, East Hanover, NJ 07936, USA',
        "name": 'East Hanover'
    },
    {
        "id": 4,
        "imageUrl": flatImage4,
        "networkStatus": 'Active',
        "city": 'New York',
        "address": '182 NJ-10, East Hanover, NJ 07936, USA',
        "name": 'East Hanover'
    }
];

const styles = theme => ({
    selectBlock: {
        margin: '1.5rem 0',
        fontSize: '0.8rem',
        [theme.breakpoints.down('sm')]: {
            marginLeft: '2vh'
        }
    },
    mainBlock: {
        backgroundColor: '#f5f6fa'
    },
    homeTitle: {
        [theme.breakpoints.down('sm')]: {
            marginLeft: '1rem',
            marginBottom: '0rem',
            marginTop: '2rem',
            // marginRight: '2rem'
        },
        marginBottom: '20px',
        marginTop: '40px',
        fontWeight: 500,
        display: 'flex'
    },
    customSearch: {
        [theme.breakpoints.only('xs')]: {
            width: '78.5vw'
        },
        fontFamily: "Poppins, san-serif",
    },
    chip: {
        margin: theme.spacing.unit,
        color: '#4c84ff',
        width: '50px',
        background: '#dbe7ff'
    },
    listButton: {
        border: '1px solid #c2c6d1',
        borderRight: 'none',
        display: 'flex',
        height: '40px',
        width: '40px',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '4px 0px 0px 4px',
        '&:hover': {
            cursor: 'pointer'
        },
        '& svg': {
            color: '#c2c6d1',
            height: '16px',
            width: '16px'
        }
    },
    gridButton: {
        border: '1px solid #c2c6d1',
        display: 'flex',
        height: '40px',
        width: '40px',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '0px 4px 4px 0px',
        '&:hover': {
            cursor: 'pointer'
        },
        '& svg': {
            color: '#c2c6d1',
            height: '16px',
            width: '16px'
        }
    },
    navBlock: {
        paddingRight: '2rem',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        color: '#c2c6d1',
        fontSize: '0.85rem',
        '& .active>svg': {
            color: theme.honest.general.main
        },
        '& .active': {
            background: theme.honest.general.white
        },
        '& span': {
            color: '#171d33',
            paddingLeft: '5px'
        },
        [theme.breakpoints.down('sm')]: {
            paddingRight: 0,
            fontSize: '0.77rem'
        },
    },
    detailLink: {
        fontSize: '0.875rem',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        color: theme.honest.general.main
    },
    gridContactBlock: {
        marginTop: '1rem',
        marginBottom: '2rem'
    },
    viewWrapper: {
        [theme.breakpoints.only('xs')]: {
            margin: '1rem'
        },
        [theme.breakpoints.only('sm')]: {
            padding: '0px 1rem',
            '@media(max-width: 700px)': {
                padding: '0',
                '&:nth-child(even)':{
                    paddingLeft: '.5rem'
                }
            }
            
        },
        
    },
    countWrapper: {
        [theme.breakpoints.down('sm')]: {
            fontSize: '0.85rem'
        }
    }
});

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buildings: [...Buildings],
            filteredBuildings: [],
            isList: true
        }
    }

    handleViewMoreClick = (id) => {
        const { history } = this.props;
        if (id === '') {
            return;
        }
        history.push(`/details/${id}`);
    }


    handleStreetView = (address) => {
        window.open(`http://maps.google.com/maps?daddr=${address}&z=17`);
    };

    handleList = () => {
        this.setState({
            isList: true
        })
    };

    handleGrid = () => {
        this.setState({
            isList: false
        })
    };

    filterBuildings = (building) => {
        let keyword = building.value;
        let filtered = this.state.buildings.filter((item) => {
            return item.name.indexOf(keyword) > -1
        });
        this.setState({ filteredBuildings: filtered });
    };

    renderApartmentCards = () => {
        const { isList, buildings } = this.state;
        const { classes } = this.props;

        return (
            <Grid item xs={12} sm={11} lg={isList ? 8 : 8} style={{ margin: '0 auto' }}>
                <Grid container>
                    {isList ? (
                        buildings.map((item, index) => (
                            <Grid item xs={12} sm={6} md={12} key={index} className={classes.viewWrapper}>
                                <ApartmentListView
                                    key={item.id}
                                    building={item}
                                    linkToDetails={false}
                                />
                            </Grid>
                        )
                    )) : (
                        buildings.map((item, index) => (
                            <Grid item xs={6} key={index}>
                                <Grid container>
                                    <Grid item xs={12} lg={11}>
                                        <ApartmentGridView 
                                            key={item.id}
                                            building={item}
                                        />
                                    </Grid>
                                    <Grid item xs={12} lg={11} className={classes.gridContactBlock}>
                                        <Grid container>
                                            <Grid item xs={6}>
                                                <ApartmentContactBlock />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            )
                        ))}
                </Grid>
            </Grid>
        )
    };

    render() {
        const { classes } = this.props;
        //let Buildings = this.state.filteredBuildings.length === 0 ? this.state.buildings : this.state.filteredBuildings;
        const apartmentCards = this.renderApartmentCards();
        return (
            <Layout>
                <HonestContainer>
                    <Grid container justify="center">
                        <Grid item xs={12} sm={11} md={11} lg={8}>
                            <div  className={classes.homeTitle}>
                                <Grid container>
                                    <Grid item xs={7} lg={6} className={classes.countWrapper}>
                                        Your Properties <Chip label="4" className={classes.chip} />
                                    </Grid>
                                    <Grid item xs={5} lg={6} className={classes.navBlock}>
                                        Sort by:<span>Speed</span>
                                        <DropDownIcon style={{ padding: '0 0.5rem' }} />
                                        <Hidden smDown only={'xs'}>
                                            <div
                                                className={classNames(classes.listButton, {
                                                    'active': this.state.isList
                                                })}
                                                onClick={this.handleList}
                                            >
                                                <img src={listIcon} alt="list" />
                                            </div>
                                            <div
                                                className={classNames(classes.gridButton, {
                                                    'active': !this.state.isList
                                                })}
                                                onClick={this.handleGrid}
                                            >
                                                <img src={gridIcon} alt="grid" />
                                            </div>
                                        </Hidden>
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                    </Grid>
                    {apartmentCards}
                </HonestContainer>
            </Layout>
        );
    }
}

export default withStyles(styles)(withRouter(Home));

