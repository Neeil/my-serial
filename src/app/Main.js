import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import {deepOrange500, blue500, orange500 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import serialport from 'serialport'

const portnameItems = [];
serialport.list((err, ports)=>{
    ports.forEach((port)=>{
        var name = port.comName
        portnameItems.push(<MenuItem value={name} key={name} primaryText={`${name} ${port.manufacturer}`} />);
    })
})


const baudrateItems = [
    <MenuItem key={4800} value={4800} primaryText="4800"/>,
    <MenuItem key={9600} value={9600} primaryText="9600"/>,
    <MenuItem key={19200} value={19200} primaryText="19200"/>,
    <MenuItem key={38400} value={38400} primaryText="38400"/>,
    <MenuItem key={57600} value={57600} primaryText="57600"/>,
    <MenuItem key={115200} value={115200} primaryText="115200"/>
]

const styles = {
  container: {
    paddingTop: 5,
  },
  underlineStyle: {
    borderColor: orange500,
  },
  floatingLabelStyle: {
    color: orange500,
  },
  floatingLabelFocusStyle: {
    color: blue500,
  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value : null,
            port  : null}
    }

    handleChange = (event, index, value) => this.setState({value});
    handlePortNameChange = (event, index, port) => this.setState({port});
    
    // handleChange() {
    //      this.setState({
    //          value
    //         });
    // }

    render() {

        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div style={styles.container}>
                    <SelectField 
                        id="portname"
                        value={this.state.port} 
                        onChange={this.handlePortNameChange}
                        autoWidth={true}
                        floatingLabelText="COMx">
                        {portnameItems}
                    </SelectField>
                    <br />
                    <SelectField 
                        id="baudrate"
                        value={this.state.value} 
                        onChange={this.handleChange}
                        autoWidth={true}
                        floatingLabelText="Baud Rate">
                        {baudrateItems}
                    </SelectField>
                    <br />
                    <TextField
                        id="tx"
                        hintText="Send Text"
                        floatingLabelText="Send:"
                        underlineStyle={styles.underlineStyle}
                        floatingLabelStyle={styles.floatingLabelStyle}
                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                    /><br />
                    <TextField
                        id="rx"
                        hintText="Received Text"
                        floatingLabelText="Received:"
                        multiLine={true}
                        rows={4}
                        rowsMax={8}
                        underlineStyle={styles.underlineStyle}
                        floatingLabelStyle={styles.floatingLabelStyle}
                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                    />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default Main;

