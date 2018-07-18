import React, { Component } from 'react';
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'

const options = {
    title: {
        text: 'Custom Support'
    },
    series: [{
        data: [1, 2, 3]
    }]
};

class ChartDetails extends Component {
    render() {
        return (
            <div>
                ChartDetails
                <HighchartsReact
                    highcharts={Highcharts}
                    options={options}
                />
            </div>

        );
    }
}

export default ChartDetails;