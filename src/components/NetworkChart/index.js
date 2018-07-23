import React from 'react';
import Highcharts from 'highcharts/highstock';
import Chart from 'components/Chart';
import './chart.scss';


const options = {
    title: {
        text: ''
    },

    xAxis: {
        categories: ['Jun18', 'Jul18', 'Aug18', 'Sep18', 'Oct18']
    },

    yAxis: {
        title: {
            text: ''
        }
    },

    defs: {
        gradient0: {
            tagName: 'linearGradient',
            id: 'gradient-0',
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1,
            children: [{
                tagName: 'stop',
                offset: 0
            }, {
                tagName: 'stop',
                offset: 1
            }]
        },
        gradient1: {
            tagName: 'linearGradient',
            id: 'gradient-1',
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1,
            children: [{
                tagName: 'stop',
                offset: 0
            }, {
                tagName: 'stop',
                offset: 1
            }]
        }
    },
    series: [{
        type: 'area',
        keys: ['y', 'selected'],
        data: [
            [176.0, false],
            [135.6, false],
            [148.5, false],
            [216.4, false],
            [194.1, false]
        ]
    }]
};

const NetworkDetails = () => (
    <div className="NetworkChart">
        <Chart
            header={'ChartDetails'}
            chart={Highcharts}
            options={{...options}}
        />
    </div>
);

export default NetworkDetails;