import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
// import ArrowBack from '@material-ui/icons/ArrowBack';
import backIcon from 'assets/images/left-arrow.svg';


const styles = theme => ({
    linkWrapper: {
      display: 'flex',
      color: '#bebfcc',
      fontSize: '0.8rem',
      cursor: 'pointer',
      padding: '1rem 0'
    },
    link: {
      display: 'flex',
      alignItems: 'center'
    },
    icon: {
      paddingRight: '0.5rem'
    }
});

const BackLink = (props) => {
  const {
    link,
    backPageTitle,
    classes,
    history
  } = props;

  const handleOnclick = (link) => {
    return history.push(link);
  }

  return (
    <div className="BackLink">
      <div className={classes.linkWrapper}>
        <div className={classes.icon}>
          {/* <ArrowBack /> */}
          <img src={backIcon} />
        </div>
        <div 
          className={classes.link}
          onClick={() => handleOnclick(link)}
        >
          {`Back to the ${backPageTitle}`}
        </div>
      </div>
    </div>
  )
}

export default withStyles(styles)(withRouter(BackLink));