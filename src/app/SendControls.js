/**
 * Created by Neil on 8/17/2016.
 */

import React, {Component} from 'react'
import TextField from 'material-ui/TextField'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton'
import Checkbox from 'material-ui/Checkbox';
import {deepOrange500, blue500, orange500,yellow200, blue200 } from 'material-ui/styles/colors';

const styles = {
    underlineStyle: {
        borderColor: orange500
    },

    textfield : {
        float : 'left',
        marginTop : 0,
        width : "80%",
    },
    radioButton : {
        margin : 0
    },
    checkbox : {
        marginTop : 0,
    },
    radioButtonGroup : {
        display : 'inline-block',
        marginTop : 5,
        float : 'left',
        width : "20%",
    },
    raisedButton : {
        marginTop : 0
    },
    retransmitGroup :{
        marginTop : 5,
        float : 'left',
        width : "20%",
    },
};


class SendControls extends Component{

    static defaultProps = {
        period : 100
    };

    static propTypes = {
        period : React.PropTypes.number.isRequired
    };


    constructor(props) {
        super(props);
        this.state = {
            peroid : this.props.period
        }
    }

    render() {
        return (
            <div>
                <RadioButtonGroup name="tx-type" defaultSelected="ascii" style={styles.radioButtonGroup} >
                    <RadioButton
                        value="ascii"
                        label="ASCII"
                        style={styles.radioButton}
                    />
                    <RadioButton
                        value="hex"
                        label="HEX"
                        style={styles.radioButton}
                    />
                    <RadioButton
                        value="dec"
                        label="DEC"
                        style={styles.radioButton}
                    />
                </RadioButtonGroup>
                <div style={styles.retransmitGroup}>
                    <Checkbox
                        label="Re-Transmit"
                        style={styles.checkbox}
                    />
                    <div>
                        <TextField
                            id="period"
                            hintText="period"
                            type="number"
                            style={styles.textfield}
                            value={this.state.period}
                            underlineStyle={styles.underlineStyle}
                        >
                        </TextField>
                        <a style={{float: 'left', width: "10%", marginTop:20}}>mS</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default SendControls