import React, {Component} from 'react';
import BuildingItem from '../Home/BuildingItem';
import ChartDetails from "./ChartDetails";
import ExpansionBlock from "./ExpansionBlock";
import speedTestImage from '../../assets/images/speedtest.png';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(21),
        fontWeight: theme.typography.fontWeightRegular,
    },
});

class Details extends Component {
    handleStreetView = (address) =>{
        console.log('New street view', address);
        window.open(`http://maps.google.com/maps?daddr=${address}&z=17`);
    };

    render() {
        console.log('Building', this.props);
        const {building} = this.props.location.state?this.props.location.state:false;
        console.log('Building', building);
        const {classes} = this.props;
        return (
            <div>
            { building ?
                <div>
                Details Component
                <BuildingItem building={building} handleStreetView={this.handleStreetView}/>
                <ExpansionBlock title={"Network"}>
                    <ChartDetails/>
                </ExpansionBlock>
                <ExpansionBlock title={"Customer Support"}>
                    <div>test message</div>
                </ExpansionBlock>
                <ExpansionBlock title={"Speedtest"}>
                    <div style={{display:'flex'}}>
                        <div style={{width:'50%'}}>
                            <Typography className={classes.heading} gutterBottom>Building Speedtest:1000Mbps</Typography>
                            <Typography className={classes.heading} gutterBottom>Average User Speedtest is 930Mb/s</Typography>
                            <Typography className={classes.heading} gutterBottom>Average latency is 1ms</Typography>
                            <Typography className={classes.heading} gutterBottom>How we compare</Typography>
                        </div>
                        <div style={{width:'50%'}}>
                            <img src={speedTestImage} alt="" style={{width:'75%'}}/>
                        </div>
                    </div>
                </ExpansionBlock>
                <ExpansionBlock title={"Contact Details"}>
                    <div>
                        <Typography className={classes.heading} gutterBottom>Your Relationship Manager:</Typography>
                        <Typography className={classes.heading} gutterBottom>Robert Muller <span>t. 646.530.4921</span> <span>o. 646.530.4921</span> <span>robert@honest.net</span></Typography>
                        <Typography className={classes.heading} gutterBottom>Support Request</Typography>
                        <TextField/>

                    </div>
                </ExpansionBlock>
                <ExpansionBlock title={"Wifi Access Points"}>
                    <div>test message</div>
                </ExpansionBlock>
            </div>:
                null}
            </div>
        );
    }
}

export default withStyles(styles)(Details);