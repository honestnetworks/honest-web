import React from 'react';
import Highcharts from 'highcharts/highstock';
import Chart from 'components/Chart';


const options = {
    title: {
        text: 'Custom Support'
    },
    series: [{
        data: [1, 2, 3]
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