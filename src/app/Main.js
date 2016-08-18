import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import {deepOrange500, blue500, orange500,yellow200, blue200 } from 'material-ui/styles/colors';
import PortConfig from './PortConfig'
import RaisedButton from 'material-ui/RaisedButton'
import SendControls from './SendControls'
import CommandCollections from './CommandCollections'
import uuid  from 'node-uuid'


const styles = {
    configGroup: {
        float: 'left',
        width: '20%',
        minWidth : 150,
        marginTop: '0px',
        padding: '0 10px',
        boxSizing: 'border-box'
    },
    trxGroup: {
        float: 'left',
        width: '80%',
        marginTop: '0px',
        padding: '0 10px',
        boxSizing: 'border-box'
    },
    commandCollectionGroup : {
        width: '99%',
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
        chipData : [
            {key : 0, label : 'AT+INFO?', type: 'ASCII', name: 'Get Info'},
            {key : 1, label : 'AT+BAUD?', type: 'ASCII', name: 'Get Ports'},
            {key : 2, label : 'AT+RFCH?', type: 'ASCII', name: 'Get Current RF Channel'}
        ],
    };

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
    };

    onSaveCommandClick = (event) => {
        this.chipData = this.state.chipData;
        console.log(this.chipData.map((chip)=>chip.label).indexOf(this.state.txText))
        if(this.chipData.map((chip)=>chip.label).indexOf(this.state.txText) === -1) {
            const chipToAdd = {
                key: uuid.v1(),
                label: this.state.txText,
                type: 'ASCII'
            };
            this.chipData.push(chipToAdd);
            this.setState({chipData: this.chipData})
        }
    };

    onSaveRxClick = (event) => {
        alert(this.state.rxText)
    }

    constructor(props) {
        super(props);
        this.state = {
            txText : "",
            rxText : "",
            chipData : this.props.chipData
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
                        <RaisedButton label="Send" primary={true} style={{margin: 5}} onClick={this.onSendClick}/>
                        <RaisedButton label="Save Command" primary={true} style={{margin:5}} onClick={this.onSaveCommandClick}/>
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
                        <RaisedButton label="Clear RX" primary={true} style={{margin:5}} onClick={this.onClearClick}/>
                        <RaisedButton label="Save RX Data"  primary={true} style={{margin:5}} onClick={this.onSaveRxClick}/>
                    </div>
                </div>
                <div style={styles.commandCollectionGroup} >
                    <div style={styles.container}>
                        <CommandCollections chipData={this.state.chipData} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;

