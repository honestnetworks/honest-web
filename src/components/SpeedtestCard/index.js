import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import InfoHeader from 'components/InfoHeader';
import Card from '@material-ui/core/Card';

import fireImage1 from 'assets/icons/fire@3x.png';

const styles = theme => ({
  card: {
    boxShadow:'none',
    borderRadius:'5px',
    padding: '1.2rem',
    paddingTop: '2rem',
    position: 'relative',
    overflow: 'visible',
  },
  caption: {
    marginTop: '1rem'
  },
  icon: {
    width: '18px',
    height: '20px'
  },
  iconWrapper: {
    background: theme.honest.general.white,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '48px',
    height: '48px',
    position: 'absolute',
    left: '50%',
    top: '-23%',
    transform: 'translateX(-50%)',
    borderRadius: '50px',
    border: '6px solid #f5f6fa'
  }
});

const SpeedtestCard = ({
  classes
}) => (
  <div className="SpeedtestCard">
      <Grid container>
        <Grid item xs={12}>
          <Card classes={{ root: classes.card }}>
            <Grid container>
              <Grid item xs={12} className={classes.iconWrapper}>
                <img 
                  src={fireImage1}
                  alt="fire-image"
                  className={classes.icon}
                />
              </Grid>
              <Grid item xs={12} className>
                <InfoHeader 
                  title={'Speed'}
                  subtitle={'980 Mbps'}
                  caption={'Average: 650 Mbps'}
                  classes={{
                    extendedCaption: classes.caption
                  }}
                />
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
  </div>
);

export default withStyles(styles)(SpeedtestCard);
