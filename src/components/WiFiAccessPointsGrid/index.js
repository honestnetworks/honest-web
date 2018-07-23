import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import WiFiAccessPoint from '../WiFiAccessPoint';

const styles = theme => ({
});

const WiFiAccessPointsGrid = ({
  classes,
  wifiPoints
}) => (
    <div className="WiFiAccessPointsGrid">
      <Grid container>
      {
        wifiPoints.map((point, index) => (
          <Grid key={index} item xs={12}>
            <WiFiAccessPoint 
              name={point.name}
              uptime={point.uptime}
              users={point.users}
            />
          </Grid> 
        ))
      }
      </Grid>
    </div>
);

export default withStyles(styles)(WiFiAccessPointsGrid);