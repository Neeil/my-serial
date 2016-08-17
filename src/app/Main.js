import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import {deepOrange500, blue500, orange500,yellow200, blue200 } from 'material-ui/styles/colors';
import PortConfig from './PortConfig'
import RaisedButton from 'material-ui/RaisedButton'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Checkbox from 'material-ui/Checkbox';
import SendControls from './SendControls'


const styles = {
    configGroup: {
        float: 'left',
        width: '25%',
        marginTop: '0px',
        padding: '0 10px',
        boxSizing: 'border-box'
    },
    trxGroup: {
        float: 'left',
        width: '75%',
        marginTop: '0px',
        padding: '0 10px',
        boxSizing: 'border-box'
    },
    controlGroup : {
        float: 'left',
        width: "100%"
    },
    groupSlider: {
        marginTop: '0px',
        width: '100%',
    },
    container: {
        paddingTop: 5
    },
    underlineStyle: {
        borderColor: orange500
    },
    floatingLabelStyle: {
        color: orange500
    },
    floatingLabelFocusStyle: {
        color: blue500
    },
};


class Main extends Component {

    static defaultProps = {
        period : 100
    };

    static propTypes = {
        period : React.PropTypes.number.isRequired
    };

    onSendClick = (e) =>{
        this.setState({

        })
    };

    constructor(props) {
        super(props);
        this.state = {
            txText : "",
            rxText : "",
            peroid : this.props.period
        }
    }

    render() {
        return (
            <div>
                <div style={styles.configGroup}>
                    <PortConfig />
                </div>
                <div style={styles.trxGroup}>
                    <div>
                        <SendControls />
                    </div>
                    <div style={styles.container}>
                        <TextField
                            id="tx"
                            hintText="Send Text"
                            floatingLabelText="Send:"
                            value={this.state.txText}
                            style={{
                                width:"100%"
                            }}
                            underlineStyle={styles.underlineStyle}
                            floatingLabelFixed={true}
                            floatingLabelStyle={styles.floatingLabelStyle}
                            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                        />
                        <RaisedButton label="Send" primary={true} style={{width:"10%", margin:'10 auto'}} onClick={this.onSendClick}/>
                        <TextField
                            id="rx"
                            hintText="Received Text"
                            floatingLabelText="Received:"
                            value={this.state.rxText}
                            multiLine={true}
                            rows={4}
                            rowsMax={8}
                            style={{
                                width:"100%"
                            }}
                            floatingLabelFixed={true}
                            underlineStyle={styles.underlineStyle}
                            floatingLabelStyle={styles.floatingLabelStyle}
                            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;

