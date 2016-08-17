import React, {Component} from 'react'
import SelectField  from 'material-ui/SelectField'
import MenuItem     from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton'
import IconButton from 'material-ui/IconButton';
import serialport   from 'serialport'

const portnameItems = [];
serialport.list((err, ports)=>{
    let portCount = 1;
    ports.forEach((port)=>{
        var name = port.comName;
        portnameItems.push(<MenuItem value={portCount} key={name} primaryText={`${name} ${port.manufacturer}`} />);
        portCount ++;
    })
    console.log(portnameItems)
});


const baudrateItems = [
    <MenuItem key={4800} value={4800} primaryText="4800"/>,
    <MenuItem key={9600} value={9600} primaryText="9600"/>,
    <MenuItem key={19200} value={19200} primaryText="19200"/>,
    <MenuItem key={38400} value={38400} primaryText="38400"/>,
    <MenuItem key={57600} value={57600} primaryText="57600"/>,
    <MenuItem key={115200} value={115200} primaryText="115200"/>
];

const stopbitItems = [
    <MenuItem key={1} value={1} primaryText="1"/>,
    <MenuItem key={1.5} value={1.5} primaryText="1.5"/>,
    <MenuItem key={2} value={2} primaryText="2"/>,
];

const styles = {
    container: {
        paddingTop: 5
    },
    raisedButton : {
        margin : 5
    },
    portNameSelectField:{
        float : 'left',
        width : "80%"
    },
    refreshButton:{
        float : 'right',
        width : "20%",
    },
    selectField:{
        width : "100%"
    }
};

class PortConfig extends Component {

    constructor(props) {
        super(props);
        this.state  = {
            port : 1,
            baud : 9600,
            stop : 1,
            status : 'start'
        }
    }

    handlePortChange = (event, index, port) => this.setState({port});
    handleBaudChange = (event, index, baud) => this.setState({baud});
    handleStopChange = (event, index, stop) => this.setState({stop});

    render() {
        return (
            <div>
                <div>
                    <SelectField
                        style = {styles.portNameSelectField}
                        id="portname"
                        value = {this.state.port}
                        autoWidth={true}
                        onChange={this.handlePortChange}
                        floatingLabelText="COMx">
                        {portnameItems}
                    </SelectField>
                    <IconButton style={styles.refreshButton} iconClassName="muidocs-icon-custom-github" />
                </div>
                <SelectField
                    style = {styles.selectField}
                    id="baudrate"
                    value = {this.state.baud}
                    onChange={this.handleBaudChange}
                    floatingLabelText="Baud Rate">
                    {baudrateItems}
                </SelectField>
                <SelectField
                    style = {styles.selectField}
                    id="stopbit"
                    value = {this.state.stop}
                    onChange={this.handleStopChange}
                    floatingLabelText="Stop Bit">
                    {stopbitItems}
                </SelectField>
                <RaisedButton label="Open Port" primary={true} />
            </div>
        )
    }
}

export default PortConfig
