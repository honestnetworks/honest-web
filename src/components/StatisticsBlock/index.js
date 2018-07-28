import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

const styles = theme => ({
  root: {
  },
  extendedValue: {},
  extendedUnit: {},
  extendedLabel: {},
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
  value,
  unit,
  label
}) => (
    <div className="StatisticsBlock">
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <div className={classes.blockItem}>
            <div className={classNames(classes.value, classes.extendedValue)}>
              <div>{value}</div>
              <div className={classes.unitWrapper}>
                <div className={classNames(classes.unit, classes.extendedUnit)}>
                  {unit}
                </div>
              </div>
            </div>
          </div>
          <div className={classNames(classes.label, classes.extendedLabel)}>
            {label}
          </div>
        </Grid>
      </Grid>
    </div>
);

export default withStyles(styles)(StatisticsBlock);