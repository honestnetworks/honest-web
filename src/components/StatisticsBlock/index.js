import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  value: {
    fontSize: '2rem',
  },
  label: {
    fontSize: '0.75rem',
    color: '#a0a6b5',
    display: 'block'
  },
  blockItem: {
    display: 'inline',
    '& div': {
      display: 'inline'
    }
  },
  unitWrapper: {
    position: 'relative'
  },
  unit: {
    position: 'absolute',
    top: '0.2rem',
    left: '0.2rem',
    fontSize: '1.2rem',
    color: '#a0a6b5'
  }
});

const StatisticsBlock = ({
  classes,
  tenantSatisfactionPercent,
  ticketResponseTime
}) => (
    <div className="StatisticsBlock">
      <Grid container>
        <Grid item xs={6}>
          <div className={classes.blockItem}>
            <div className={classes.value}>
              <div>{tenantSatisfactionPercent}</div>
              <div className={classes.unitWrapper}>
                <div className={classes.unit}>
                  %
                </div>
              </div>
            </div>
          </div>
          <div className={classes.label}>
            {'Tenant Satisfaction'}
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.blockItem}>
            <div className={classes.value}>
              <div>{ticketResponseTime}</div>
              <div className={classes.unitWrapper}>
                <div className={classes.unit}>
                  min
                </div>
              </div>
            </div>
          </div>
          <div className={classes.label}>
            {'Ticket Response'}
          </div>
        </Grid>
      </Grid>
    </div>
);

export default withStyles(styles)(StatisticsBlock);