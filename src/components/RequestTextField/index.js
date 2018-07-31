import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
// import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import classNames from 'classnames';
import ContactBlock from 'components/ContactBlock';
import TextArea from 'components/TextArea';

const styles = (theme) => ({
    card: {
        boxShadow:'0 1px 3px 0 rgba(201, 203, 209, 0.24)',
        borderRadius:'5px',
        padding: '1.5rem'
    },
    textField: {
      border: '1px solid #bebfcc',
      borderRadius: '5px',
      width: '86%',
      padding: '1rem'
    },
    input: {
      fontSize: '0.75rem',
      '& > div': {
        minHeight: '7rem'
      }
    },
    avatar: {
      color: '#e9b461',
      background: '#ffedd4',
      width: '2rem',
      height: '2rem',
      fontSize: '0.75rem'
  },
  name: {
    fontSize: '0.85rem'
  },
  caption: {
    color: '#bebfcc',
    fontSize: '0.65rem'
  },
  avatarInfo: {
    fontSize: '0.75rem',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  button: {
    borderRadius: '50px',
    fontSize: '0.75rem',
    padding: '0 2rem',
    textTransform: 'none'
  },
  submitButton: {
    background: theme.honest.general.main,
    color: theme.honest.general.white,
    boxShadow: '0px 4px 12px 0px rgba(76, 132, 255, 0.16)',
    marginLeft: '0.5rem',
    '&:hover': {
      background: theme.honest.general.main,
      color: theme.honest.general.white,
      boxShadow: '0px 4px 12px 0px rgba(76, 132, 255, 0.16)'
    }
  },
  clearButton: {
    color: '#a0a6b5'
  },
  textareaSmall:  {
    width: '86%'
  }
});

class RequestTextField extends Component {
  state = {
    text: ''
  }

  onSubmitClick = () => {
    const { text } = this.state;
    if(text === '') {
      return;
    }
    console.log("reguest text is ", text)
  };

  onClearClick = () => {
    this.setState({
      text: ''
    })
  };

  handleChange = event => {
    this.setState({
      text: event.target.value,
    });
  };

  // renderTextField = () => {
  //   const { placeholder, classes } = this.props;
  //   const { text } = this.state;
  //   return (
  //     <TextField
  //       id="multiline-flexible"
  //       placeholder={placeholder}
  //       multiline
  //       rowsMax="5"
  //       value={text}
  //       onChange={this.handleChange}
  //       className={classes.textField}
  //       InputProps={{
  //         disableUnderline: true,
  //         classes: {
  //           root: classes.input
  //         }
  //       }}
  //       margin="normal"
  //     />
  //   )
  // }

  render() {
    const { classes } = this.props;
    // const textField = this.renderTextField();

    return (
      <Grid item xs={12} style={{margin:'0 auto'}}>
          <Card className={classes.card}>
              <Grid container className={classes.mainContent}>

                  <Grid item xs={12} style={{marginBottom:'1rem'}}>
                    <Grid container>
                      <Grid item xs={2}>
                        <Avatar className={classes.avatar}>
                            LT
                        </Avatar>
                      </Grid>
                      <Grid item xs={10} className={classes.avatarInfo}>
                        <div className={classes.caption}>
                          CONTACT
                        </div>
                        <div className={classes.name}>
                          Landon Tucker
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>

                  <TextArea placeholder="Enter your request message ..." />

                  <Grid item xs={12} className={classes.infoContainer}>
                      <Grid container>
                        <ContactBlock />  
                      </Grid>
                  </Grid>
              </Grid>
          </Card>
      </Grid>
    );
  }
}

RequestTextField.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RequestTextField);