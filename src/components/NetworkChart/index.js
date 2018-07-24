import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import ReactHighcharts from 'react-highcharts';
import config from './chartConfig';

const styles = () => ({
    root: {
        '& .highcharts-credits': {
            display: 'none !important'
        }
    }
});

const NetworkChart = ({ classes }) => (
    <div className={classNames("NetworkChart", classes.root)}>
        <ReactHighcharts config={config} />
    </div>
);

export default withStyles(styles)(NetworkChart);