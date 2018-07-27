import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import ReactHighcharts from 'react-highcharts';
import config from './chartConfig';

const styles = () => ({
    root: {
        '& .highcharts-credits': {
            display: 'none !important'
        },
        '& .highcharts-container': {
            position: 'relative',
            bottom: '55px'
        }

    }
});

const NetworkChart = ({ classes }) => (
    <div className={classNames("NetworkChart", classes.root)}>
        Network
        <ReactHighcharts config={config} />
    </div>
);

export default withStyles(styles)(NetworkChart);