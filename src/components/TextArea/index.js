import { withStyles } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import React, { Component } from 'react';
import classNames from 'classnames';

const styles = (theme) => ({
    card: {
        boxShadow:'0 1px 3px 0 rgba(201, 203, 209, 0.24)',
        borderRadius:'5px',
        padding: '1.2rem'
    },
    textField: {
        border: '1px solid #bebfcc',
        borderRadius: '5px',
        display: 'block',
        padding: '1rem',
        background: '#fff',
        marginBottom: '1rem'
    },
    input: {
        fontSize: '0.75rem',
        width: '100%',
        '& > div': {
            minHeight: '7rem'
        }
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
      }
});

class TextArea extends Component {
    state = {
        text: ''
    };

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

    render() {
        const { placeholder, classes } = this.props;
        const { text } = this.state;
        return (
            <Grid container justify='center' className={classes.mediaContainer}>
                <Grid item xs={12} sm={9} md={12} >
                    <TextField
                        id="multiline-flexible"
                        placeholder={placeholder}
                        multiline
                        rowsMax="5"
                        value={text}
                        onChange={this.handleChange}
                        className={classes.textField}
                        InputProps={{
                            disableUnderline: true,
                            classes: {
                                root: classes.input
                            }
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={9} md={12} className={classes.actionContainer}>
                    <Grid container justify="flex-end">
                    <Button 
                        className={classNames(classes.button, classes.clearButton)}
                        onClick={this.onClearClick}>
                        Clear
                    </Button>
                    <Button 
                        className={classNames(classes.button, classes.submitButton)}
                        variant="raised"
                        onClick={this.onSubmitClick}>
                        Send
                    </Button>
                    </Grid>
                </Grid>
            </Grid>
            
        )
    }
}

export default withStyles(styles)(TextArea);