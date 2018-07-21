import React from 'react';
import HighchartsReact from 'highcharts-react-official'
import { createStyles } from '@material-ui/core/styles/createStyles';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => 
  createStyles({
    root: {},
    tchartTtle: {},
    chartBody: {}
  });

const Chart = ({
  classes,
  title,
  chart,
  options
}) => (
  <Grid container className={classes.root}>
      <Grid 
        item 
        xs={12} 
        className={classes.chartTitle}
      >
        {title}
      </Grid>
      <Grid 
        item 
        xs={12}
        className={classes.chartBody}
      >
        <HighchartsReact
            highcharts={chart}
            options={{...options}}
        />
      </Grid>
  </Grid>
);

export default withStyles(styles)(Chart);