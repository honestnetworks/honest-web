import Highcharts from 'highcharts';

const categoryLabels = ['Jun 18', 'Jul 18', 'Aug 18', 'Sep 18', 'Oct 18'];
const categoryLabelsFull = ['June 2018', 'July 2018', 'August 2018', 'September 2018', 'October 2018'];

const config = {
    colors: ["#3b84ff", "#434348", "#90ed7d", "#f7a35c", "#8085e9", "#f15c80", "#e4d354", "#2b908f", "#f45b5b", "#91e8e1"],
    chart: {
        type: 'areaspline',
        backgroundColor: 'transparent',
        spacingLeft: 0,
        cropThreshold: 0,
        height: 450,
    },
    legend: {
        verticalAlign: 'top',
        layout: 'horizontal',
        itemMarginBottom: 40, 
        // itemMPaddingLeft: -140, 
        symbolHeight: 2,
        symbolWidth: 25,
        symbolRadius: 1,
        x: -10,
        squareSymbol: false,
        tickWidth: 0,
        itemStyle: {
            transform: 'translateY(5px)',
            fontSize: '14px'        
        }
    },
    title: {
        text: ''
    },
    tooltip: {
        borderRadius: 10,
        formatter: function () {
            return '<div>' + this.y + ' Mbps</div><br><small>' + categoryLabelsFull[this.x] + '</small>';
        },
        backgroundColor: '#000000',
        style: {
            color: "#a4a8b3"
        }
    },
    xAxis: {
        tickLength: 0,
        crosshair: true,
        labels: {
            style: {
                color: '#a0a6b5',
                fontSize: '14px'
            },
            formatter: function () {
                return categoryLabels[this.value];
            }
        }
    },

    yAxis: {
        labels: {
            style: {
                color: '#a0a6b5',
                fontSize: '14px'
            },
            formatter: function () {
                if (this.value > 0) {
                    return this.value;
                }
            }
        },
        tickAmount: 4,
        title: {
            text: ''
        }
    },
    series: [{
        marker: {
            enabled: false
        },
        fillColor: {
            linearGradient: [0, 0, 0, 300],
            stops: [
                [0, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0.5).get('rgba')],
                [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
            ]
        },
        name: 'Speed',

        data: [450, 550, 375, 600, 450],

    }, {
        marker: {
            enabled: false
        },
        fillColor: {
            linearGradient: [0, 0, 0, 300],
            stops: [
                [0, Highcharts.getOptions().colors[1]],
                [1, Highcharts.Color(Highcharts.getOptions().colors[1]).setOpacity(0).get('rgba')]
            ]
        },
        name: 'Label',
        visible: false,
        data: [600, 750, 800, 700, 500],

    }, {
        marker: {
            enabled: false
        },
        fillColor: {
            linearGradient: [0, 0, 0, 300],
            stops: [
                [0, Highcharts.getOptions().colors[2]],
                [1, Highcharts.Color(Highcharts.getOptions().colors[2]).setOpacity(0).get('rgba')]
            ]
        },
        name: 'Lorem',
        visible: false,
        data: [300, 200, 225, 250, 275],

    }]
};

export default config;  