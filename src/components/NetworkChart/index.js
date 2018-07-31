import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import ReactHighcharts from 'react-highcharts';
import config from './chartConfig';

const styles = (theme) => ({
    root: {
        '& .highcharts-credits': {
            display: 'none !important'
        },
        '& .highcharts-container': {
            position: 'relative',
            bottom: '55px'
        },
        '& br':{
            [theme.breakpoints.up('md')]:{
                display: 'none'
            }
        }
    },
    header: {
        [theme.breakpoints.down('sm')]:{
            marginBottom: '2rem'
        }
        
    }
});

const NetworkChart = ({ classes }) => (
    <div className={classNames("NetworkChart", classes.root)}>
        <div className={classes.header}>Network</div><br />
        <ReactHighcharts config={config} />
    </div>
);

export default withStyles(styles)(NetworkChart);