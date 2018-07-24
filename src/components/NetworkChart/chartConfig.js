import Highcharts from 'highcharts';

const categoryLabels = ['Jun18', 'Jul18', 'Aug18', 'Sep18', 'Oct18'];
const categoryLabelsFull = ['June 2018', 'July 2018', 'August 2018', 'September 2018', 'October 2018'];

const config = {
  chart: {
      type: 'areaspline',
      backgroundColor: 'transparent',
      spacingLeft: 0,
      cropThreshold: 0,
  },
  legend: {
      verticalAlign: 'top',
      layout: 'horizontal',
      symbolHeight: 2,
      symbolWidth: 25,
      symbolRadius: 0,
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
  xAxis: {
      tickLength: 0,
      labels: {
          formatter: function () {
              return categoryLabels[this.value];
          }
      }
  },
  tooltip: {
      formatter: function () {
          return '<div>' + this.y + ' Mbps</div><br> <small>' + categoryLabelsFull[this.x] + '</small>';
      },
      backgroundColor: '#000000',
      style: {
          color: "#ffffff",
      }
  },
  yAxis: {
      labels: {
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
              [0, Highcharts.getOptions().colors[0]],
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
      data: [450, 550, 375, 600, 450],

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
      data: [450, 550, 375, 600, 450],

  }]
};

export default config;