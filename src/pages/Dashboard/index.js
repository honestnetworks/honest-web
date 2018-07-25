import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import DropDownIcon from '@material-ui/icons/ArrowDropDown';
// import ListIcon from '@material-ui/icons/FormatListBulleted';
import gridIcon from 'assets/images/grid.svg';
import listIcon from 'assets/images/list.svg';
// import GridIcon from '@material-ui/icons/GridOn';
import { withStyles } from '@material-ui/core/styles';
import Layout from 'hoc/layout';
import ApartmentListView from 'components/ApartmentCard/ApartmentListView';
import ApartmentGridView from 'components/ApartmentCard/ApartmentGridView';
import HonestContainer from 'hoc/HonestContainer';
import ApartmentContactBlock from 'components/ApartmentCard/ApartmentContactBlock';
import classNames from 'classnames';

import flatImage1 from 'assets/images/flatImage-1.jpg';
import flatImage2 from 'assets/images/flatImage-2.jpg';
import flatImage3 from 'assets/images/flatImage-3.jpg';

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
        "imageUrl": flatImage3,
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
            marginLeft: '2vh'
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
        borderRight:'none',
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
        '& .active':{
            background: theme.honest.general.white
        },
        '& span': {
            color: '#171d33',
            paddingLeft:'5px'
        }
    },
    detailLink:{ 
        fontSize:'0.875rem', 
        display:'flex', 
        justifyContent:'flex-end', 
        alignItems:'center', 
        color:theme.honest.general.main 
    },
    gridContactBlock:{ 
        marginTop:'1rem',
        marginBottom: '2rem' 
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
        const {history} = this.props;
        if(id === ''){
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
        this.setState({filteredBuildings: filtered});
    };

    renderApartmentCards = () => {
        const {isList, buildings} = this.state;
        const {classes} = this.props;

        return (
            <Grid item xs={12} lg={isList? 8 : 8} style={{margin:'0 auto'}}>
                <Grid container>
                    {isList ? (
                        buildings.map((item, index) => (
                            <Grid item xs={12} key={index}>
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
                                            linkToDetails={false}
                                        />
                                    </Grid>
                                    <Grid item xs={12} lg={11} className={classes.gridContactBlock}>
                                        <Grid container>
                                            <Grid item xs={6}>
                                                <ApartmentContactBlock />
                                            </Grid>
                                            <Grid 
                                                item 
                                                xs={6} 
                                                className={classes.detailLink} 
                                                onClick={() => this.handleViewMoreClick(item.id)}
                                                style={{cursor: 'pointer'}}
                                            > 
                                                View more 
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
                        <Grid item xs={9} lg={8}>
                            <div className={classes.homeTitle}>
                                <Grid container>
                                    <Grid item xs={12} lg={6}>
                                        Your Properties <Chip label="4" className={classes.chip}/>
                                    </Grid>
                                    <Grid item xs={12} lg={6} className={classes.navBlock}>
                                        Sort by:<span>Speed</span>
                                        <DropDownIcon style={{padding: '0 0.5rem'}} />
                                        <div 
                                            className={classNames(classes.listButton, {
                                                'active': this.state.isList
                                            })}
                                            onClick={this.handleList}
                                        >
                                            {/* <ListIcon/> */}
                                            <img src={listIcon} />
                                        </div>
                                        <div 
                                            className={classNames(classes.gridButton, {
                                                'active': !this.state.isList
                                            })}
                                            onClick={this.handleGrid}
                                        >
                                            {/* <GridIcon/> */}
                                            <img src={gridIcon} />
                                        </div>
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

