import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import WifiIcon from 'assets/icons/wifi.svg';
import personIcon from 'assets/icons/person.png';


const styles = theme => ({
  root: {
    backgroundColor: theme.honest.general.white,
    margin: '0.15rem 0',
    borderRadius: '3px',
    fontSize: '0.875rem'
  },
  iconWrapper: {
    color: '#a0a6b5',
    display: 'flex',
    alignItems: 'center'
  },
  icon: {
    margin: '0.4rem 1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    height: '2rem',
    width: '2rem',
    backgroundColor: '#dbe7ff',
    borderRadius: '20px'
  },
  uptime: {
    color: theme.honest.general.main,
    display: 'flex',
    alignItems: 'center',
  },
  users: {
    display: 'flex',
    alignItems: 'center',
    '& img': {
      height: '11px',
      width: '10px',
      paddingRight: '0.5rem'
    }
  }
});

const WiFiAccessPoint = ({
  classes,
  name,
  uptime,
  users
}) => (
    <div className="WiFiAccessPoint">
      <Grid container className={classes.root}>
        <Grid item xs={5} className={classes.iconWrapper}>
          <div className={classes.icon}>
            <img 
              src={WifiIcon}
              alt="wifi-router-point"
            />
          </div>
          {name}
        </Grid>
        <Grid item xs={4} className={classes.uptime}>
          {`${uptime} %`}
        </Grid>
        <Grid item xs={3} className={classes.users}>
          <img 
              src={personIcon}
              alt="wifi-user-point"
          />
          {users}
        </Grid>
      </Grid>
    </div>
);

export default withStyles(styles)(WiFiAccessPoint);