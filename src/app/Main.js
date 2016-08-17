import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import {deepOrange500, blue500, orange500,yellow200, blue200 } from 'material-ui/styles/colors';
import PortConfig from './PortConfig'
import RaisedButton from 'material-ui/RaisedButton'
import SendControls from './SendControls'
import CommandCollections from './CommandCollections'


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

    onSendClick = (e) =>{
        this.setState({
            rxText : this.state.rxText += this.state.txText
        })
    };

    onTxChanged = (event) =>{
        this.setState({
            txText : event.target.value,
        });
    };

    onClearClick =(event) =>{
        this.setState({
            rxText : ""
        })
    }

    constructor(props) {
        super(props);
        this.state = {
            txText : "",
            rxText : "",
        }
    }

    render() {
        return (
            <div>
                <div style={styles.configGroup}>
                    <PortConfig />
                </div>
                <div style={styles.trxGroup}>
                    <SendControls />
                    <div style={styles.container}>
                        <TextField
                            id="tx"
                            hintText="Send Text"
                            floatingLabelText="Send:"
                            style={{
                                width:"100%"
                            }}
                            value = {this.state.txText}
                            onChange={this.onTxChanged}
                            underlineStyle={styles.underlineStyle}
                            floatingLabelFixed={true}
                            floatingLabelStyle={styles.floatingLabelStyle}
                            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                        />
                        <RaisedButton label="Send" primary={true} style={{margin:'10 auto'}} onClick={this.onSendClick}/>
                        <TextField
                            id="rx"
                            hintText="Received Text"
                            floatingLabelText="Received:"
                            multiLine={true}
                            rows={4}
                            rowsMax={8}
                            style={{
                                width:"100%"
                            }}
                            value = {this.state.rxText}
                            floatingLabelFixed={true}
                            underlineStyle={styles.underlineStyle}
                            floatingLabelStyle={styles.floatingLabelStyle}
                            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                        />
                        <RaisedButton label="Clear RX" primary={true} style={{margin:'10 auto'}} onClick={this.onClearClick}/>
                    </div>
                </div>
                <CommandCollections />
            </div>
        );
    }
}

export default Main;

