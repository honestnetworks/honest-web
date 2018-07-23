import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';

const styles = theme => ({
  title: {
    textTransform:'uppercase',
    textAlign:'center',
    fontSize:'0.625rem',
    color:'#bebfcc'
  },
  subtitle: {
    marginBottom: 16,
    fontSize: '18px',
    color:'#171d33',
    fontWeight:'500',
    textAlign:'center'
  },
  caption: {
    color: '#a0a6b5',
    textAlign:'center',
    fontSize:'0.625rem',
  },
  extendedCaption: {}
});

const InfoHeader = ({
  classes,
  title,
  subtitle,
  caption
}) => (
    <div className="InfoHeader">
        <Grid container>
          <Grid item xs={12}>
              <Typography variant="caption" className={classes.title}>
                {title}
              </Typography>
              <Typography  variant="caption" className={classes.subtitle}>
                  {subtitle}
              </Typography>
              {
                caption && (
                  <Typography  
                    variant="caption" 
                    className={classNames(classes.caption, classes.extendedCaption)}
                  >
                    {caption}
                  </Typography>
                )
              }
          </Grid>
        </Grid>
    </div>
);

export default withStyles(styles)(InfoHeader);
