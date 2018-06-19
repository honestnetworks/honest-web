import React, { Component } from 'react';
import {withStyles} from "@material-ui/core/styles/index";
const styles = {
    root: {
        width: '100%',
    },
    inputDecoration: {
        width: '70%',
        border: '1px solid #E6EEF2',
        fontSize: '14px',
        padding: '11px 16px 8px 21px'
    },
    inputDecorationWithoutLabel: {
        width: '100%',
        border: '1px solid #E6EEF2',
        fontSize: '14px',
        padding: '11px 16px 8px 21px'
    },
    labelDecoration: {
        width: '30%',
        textAlign: 'left',
        color: '#7C8D9C',
        fontSize:'14px',
        alignSelf:'center'
    },
    disableLabelDecoration: {
        display:'none'
    },
    inputWrapper: {
        width: '100%',
        display:'flex',
        marginBottom: '30px',
    }
};
class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVal: ""
        };
        this.changeHandler = this.changeHandler.bind(this)
    }

    changeHandler(e) {
        this.props.parentFunction(e.target.value, e)
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.inputWrapper}>
                <label className={this.props.notLabel ? classes.disableLabelDecoration : classes.labelDecoration}>{this.props.labelName}</label>
                <input className={this.props.notLabel ? classes.inputDecorationWithoutLabel : classes.inputDecoration}
                       type={this.props.inputType}
                       id={this.props.id}
                       placeholder={this.props.placeHolder}
                       onChange={this.changeHandler}
                       defaultValue={this.props.defaultValue}
                       style={this.props.style ? this.props.style : {}}
                       accept={this.props.accept}
                />
            </div>
        )
    }
}
export default withStyles(styles)(Input);