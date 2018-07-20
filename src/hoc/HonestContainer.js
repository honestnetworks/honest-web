import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';

const styles = (theme) =>
  createStyles({
    root: {
    },
    container: {
      ...theme.honest.globalContainer
    }
  });

const HonestContainer = (props) => {
    const { 
        classes,
        children,
        xs, 
        sm, 
        md, 
        lg,
        xl,
        spacing, 
        justify 
    } = props;
  return (
    <div className={classNames('HonestContainer', classes.root)}>
      <Grid 
        container 
        justify={justify} 
        spacing={spacing}
        >
        <Grid
          item
          xs={xs}
          className={classes.container}
        >
          {children}
        </Grid>
      </Grid>
    </div>
  );
};

// HonestContainer.propTypes = {
//     classes: PropTypes.object.isRequired,
//     children: PropTypes.object.isRequired,
//     xs: PropTypes.number,
//     sm: PropTypes.number,
//     md: PropTypes.number,
//     lg: PropTypes.number,
//     xl: PropTypes.number,
//     spacing: PropTypes.string,
//     justify: PropTypes.string,
// };

HonestContainer.defaultProps = {
  xs: 12,
  spacing: 0,
  justify: 'center'
};

export default withStyles(styles)(HonestContainer);