import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import createStyles from '@material-ui/core/styles/createStyles';

const styles = theme => 
  createStyles({
  title: { 

  },
  subtitle: {

  },
  caption: {
    
  }
  });

const InfoHeader = ({
  title,
  subtitle,
  caption
}) => (
    <div className="InfoHeader">
        <Grid container>
          <Grid 
            item 
            xs={12} 
            className={classes.title}
          >
            {title}
          </Grid>
          <Grid 
            item 
            xs={12} 
            className={classes.subtitle}
          >
            {subtitle}
          </Grid>
          {caption && ( 
            <Grid 
              item 
              xs={12} 
              className={classes.caption}
            >
              {caption}
            </Grid>
          )}
        </Grid>
    </div>
);

export default withStyles(styles)(InfoHeader);
