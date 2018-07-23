import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import StatisticsBlock from 'components/StatisticsBlock';

const styles = theme => ({
});

const DetailsStatisticsGrid = ({
  classes,
  statistics
}) => (
    <div className="DetailsStatisticsGrid">
      <Grid container>
        {
          statistics.map((statistic, index) => (
            <Grid key={index} item xs={6}>
              <StatisticsBlock
                classes={classes}
                value={statistic.value}
                unit={statistic.unit}
                label={statistic.label}
              />
            </Grid>
          ))
        }
      </Grid>
    </div>
);

export default withStyles(styles)(DetailsStatisticsGrid);