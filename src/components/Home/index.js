import React, {Component} from 'react';
import BuildingItem from './BuildingItem';
import GridBuildingItem from './GridBuilding/GridBuildingItem';
import flatImage1 from 'assets/images/flatImage-1.jpg';
import flatImage2 from 'assets/images/flatImage-2.jpg';
import flatImage3 from 'assets/images/flatImage-3.jpg';
import {withStyles} from '@material-ui/core/styles';
import Layout from 'hoc/layout';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import DropDownIcon from '@material-ui/icons/ArrowDropDown';
import ListIcon from '@material-ui/icons/FormatListBulleted';
import GridIcon from '@material-ui/icons/GridOn';
import HonestContainer from 'hoc/HonestContainer'

const Buildings = [
    {
        "id": 1,
        "imageUrl": flatImage1,
        "networkStatus": 'Active',
        "address": '222 Jersey City Blvd, Jersey City, NJ 07305, USA',
        "name": 'Jersey City'
    },
    {
        "id": 2,
        "imageUrl": flatImage2,
        "networkStatus": 'Inactive',
        "address": '63 Flushing Ave, Brooklyn, NY 11205, USA',
        "name": 'Flushing Ave'
    },
    {
        "id": 3,
        "imageUrl": flatImage3,
        "networkStatus": 'Active',
        "address": '182 NJ-10, East Hanover, NJ 07936, USA',
        "name": 'East Hanover'
    },
    {
        "id": 4,
        "imageUrl": flatImage3,
        "networkStatus": 'Active',
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
        marginBottom: '40px',
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
            color: '#c2c6d1'
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
            color: '#c2c6d1'
        }
    },
    navBlock: {
        '& div.active>svg': {
            color: '#4c84ff'
        },
        '& div.active':{
            background:'white'
        },
        '& span': {
            color: '#171d33',
            paddingLeft:'5px'
        }
    }

});

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buildings: Buildings,
            filteredBuildings: [],
            isList: false
        }
    }


    handleStreetView = (address) => {
        console.log('New street view', address);
        window.open(`http://maps.google.com/maps?daddr=${address}&z=17`);
    };

    handleList = () => {
        console.log('List');
        this.setState({
            isList: true
        })
    };

    handleGrid = () => {
        console.log('Grid');
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

    renderListBuildings = (buildings) => {
        return buildings.map(item => {
            return (
                <BuildingItem key={item.id}
                              building={item}
                              linkToDetails={false}
                />
            )
        });
    };

    renderGridBuildings = (buildings) => {
        return buildings.map(item => {
            return (
                <GridBuildingItem key={item.id}
                                  building={item}
                                  linkToDetails={false}
                />
            )
        });
    };

    render() {
        const {classes} = this.props;
        //let Buildings = this.state.filteredBuildings.length === 0 ? this.state.buildings : this.state.filteredBuildings;

        return (
            <Layout>
                <HonestContainer>
                    <Grid container justify="center">
                        <Grid item xs={9}>
                            <div className={classes.homeTitle}>
                                <Grid container>
                                <Grid item xs={12} sm={6}>
                                    Your Properties <Chip label="4" className={classes.chip}/>
                                </Grid>
                                <Grid item xs={12} sm={6} className={classes.navBlock} style={{
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    alignItems: 'center',
                                    color: '#c2c6d1',
                                    fontSize: '0.85rem'
                                }}>
                                    Sort by:<span>Speed</span>
                                    <DropDownIcon/>
                                    <div className={`${classes.listButton} ${this.state.isList ? 'active' : null}`}
                                         onClick={this.handleList}>
                                        <ListIcon/>
                                    </div>
                                    <div className={`${classes.gridButton} ${this.state.isList ? null : 'active'}`}
                                         onClick={this.handleGrid}>
                                        <GridIcon/>
                                    </div>
                                </Grid>
                                </Grid>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={this.state.isList?12:9} style={{margin:'0 auto'}}>
                        <Grid container spacing={16} >
                            {this.state.isList ? this.renderListBuildings(Buildings) : this.renderGridBuildings(Buildings)}
                        </Grid>
                    </Grid>
                </HonestContainer>

            </Layout>
        );
    }
}

export default withStyles(styles)(Home);

