import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  image: {
    width: '168px',
    height: '168px'
  },
  imageWrapper: {
    display: 'flex',
    justifyContent: 'center'
  }
});

const SpeedtestIndicator = ({
  classes,
  imageUrl
}) => (
    <div className="SpeedtestIndicator">
        <Grid container>
          <Grid item xs={12} className={classes.imageWrapper}>
            <img 
              className={classes.image}
              src={imageUrl} 
              alt="speedtest-image" 
            />
          </Grid>
        </Grid>
    </div>
);

export default withStyles(styles)(SpeedtestIndicator);
