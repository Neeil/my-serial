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
        width : 50,
    },
    radioButton : {
        margin : 0
    },
    checkboxHex : {
        display : 'inline',
        float : 'left',
        width : 80,
        marginTop : 15,
    },
    checkbox : {
        display : 'inline',
        float : 'left',
        width : 135,
        marginTop : 15,
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

    constructor(props) {
        super(props);
        this.state = {
            period : 100
        }
    }

    periodOnChange = (event) =>{
        this.setState({
            period : event.target.value
        })
    }

    render() {
        return (
            <div>
                <Checkbox
                    label="HEX"
                    style={styles.checkboxHex}
                />
                <Checkbox
                    label="Re-Transmit"
                    style={styles.checkbox}
                />
                <div>
                    <TextField
                        id="period"
                        hintText="period"
                        type="number"
                        min = "0"
                        style={styles.textfield}
                        value={this.state.period}
                        onChange={this.periodOnChange}
                        underlineStyle={styles.underlineStyle}
                    >
                    </TextField>
                    <a style={{float: 'left', width: "10%", marginTop:15}}>mS</a>
                </div>

            </div>
        )
    }
}

export default SendControls