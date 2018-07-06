import React, {Component} from 'react';
import BuildingItem from './BuildingItem';
import flatImage1 from '../../assets/images/flatImage-1.jpg';
import flatImage2 from '../../assets/images/flatImage-2.jpg';
import flatImage3 from '../../assets/images/flatImage-3.jpg';
import CustomSelect from '../Common/Select/Select';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Layout from '../../hoc/layout';
import Grid from '@material-ui/core/Grid';


const Buildings = [
    {
        "id":1,
        "imageUrl":flatImage1,
        "networkStatus":'Active',
        "address":'222 Jersey City Blvd, Jersey City, NJ 07305, USA',
        "name":'Jersey City'
    },
    {
        "id":2,
        "imageUrl":flatImage2,
        "networkStatus":'Inactive',
        "address":'63 Flushing Ave, Brooklyn, NY 11205, USA',
        "name":'Flushing Ave'
    },
    {
        "id":3,
        "imageUrl":flatImage3,
        "networkStatus":'Active',
        "address":'182 NJ-10, East Hanover, NJ 07936, USA',
        "name":'East Hanover'
    },
    {
        "id":4,
        "imageUrl":flatImage3,
        "networkStatus":'Active',
        "address":'182 NJ-10, East Hanover, NJ 07936, USA',
        "name":'East Hanover'
    }
];
const styles = theme => ({
    selectBlock:{

         marginBottom:'20px',
        [theme.breakpoints.down('sm')]: {
            marginLeft:'2vh'
        }
    },
    mainBlock:{
        backgroundColor: '#f1f3f8'
    },
    homeTitle:{
        [theme.breakpoints.down('sm')]: {
            marginLeft:'2vh'
        }
    },
    customSearch:{
        [theme.breakpoints.only('xs')]: {
            width:'78.5vw'
        }

    }

});

class Home extends Component {
    constructor(props) {
        super(props);
        this.state={
            buildings:Buildings,
            filteredBuildings:[]
        }
    }


    handleStreetView = (address) =>{
        console.log('New street view', address);
        window.open(`http://maps.google.com/maps?daddr=${address}&z=17`);
    };

    filterBuildings = (building) =>{
            let keyword = building.value;
            let filtered = this.state.buildings.filter((item)=>{
                return item.name.indexOf(keyword) > -1
            });
            this.setState({filteredBuildings: filtered});
    };

    render() {
        console.log('console log');
        const {classes} = this.props;
        let Buildings = this.state.filteredBuildings.length === 0 ? this.state.buildings : this.state.filteredBuildings;
        const buildBuildings = Buildings.map(item=>{
            return(
                <BuildingItem key={item.id}
                              building = {item}
                              handleStreetView={this.handleStreetView}
                              linkToDetails = {false}
                />
            )
        });
        return (
            <Layout>
            <div>
                <Typography variant="subheading" gutterBottom className={classes.homeTitle}>
                    Property Owner Name
                </Typography>
                {/*<div className={classes.selectBlock}>*/}
                    <Grid item xs={12} md={4} className={classes.selectBlock}>

                    <CustomSelect filterBuildings={this.filterBuildings} className={classes.customSearch}/>
                    </Grid>
                {/*</div>*/}
                {buildBuildings}
            </div>
            </Layout>

        );
    }
}

export default withStyles(styles)(Home);

