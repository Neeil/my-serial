/**
 * Created by Neil on 8/17/2016.
 */
import React, {Component} from 'react'
import Paper from 'material-ui/Paper'
import {Card, CardHeader, CardText, CardTitle} from 'material-ui/Card'
import Chip from 'material-ui/Chip'
import Avatar from 'material-ui/Avatar'
import { blue500, orange500 } from 'material-ui/styles/colors'

const styles={
    card: {
        width: "100%",
        margin: 10,
        display: 'inline-block',
    },
    chip : {
        margin : 4
    },
    wrapper : {
        display : 'flex',
        flexWrap : 'wrap'
    }
};

export default class CommandCollections extends Component{

    static defaultProps = {
        chipData : [
            {key : 0, label : 'AT+INFO?', type: 'ASCII', name: 'Get Info'},
            {key : 1, label : 'AT+BAUD?', type: 'ASCII', name: 'Get Ports'}
        ],
    };

    static propTypes = {
        chipData : React.PropTypes.array
    };

    constructor(props) {
        super(props);
        this.state={
            chipData : this.props.chipData
        };
    }

    onTouchTapHandler = (label) =>{
        // console.log(event.target)
        // alert(event.target.innerHTML)
        alert(label)
    };

    onRequestDeleteHandler = (key) => {
        this.chipData = this.state.chipData;
        const chipToDelete = this.chipData.map((chip)=> chip.key).indexOf(key);
        this.chipData.splice(chipToDelete, 1)
        this.setState({chipData : this.chipData})
    }

    renderChip(data) {
        return (
            <Chip
                key={data.key}
                onTouchTap = { () =>this.onTouchTapHandler(data.label)}
                onRequestDelete={() => this.onRequestDeleteHandler(data.key)}
                style={styles.chip}
            >
                <Avatar color={data.type === 'ASCII' ? blue500 : orange500 }>
                    {data.type ===  'ASCII' ? 'A' : 'H'}
                </Avatar>
                {data.label}
            </Chip>
        )
    }

    render() {
        return (
            <Card expanded={true} style={styles.card}>
                <CardTitle
                    title="Commands"
                />
                <CardText expandable={true}>
                    <div style={styles.wrapper}>
                            {this.props.chipData.map(this.renderChip, this)}
                    </div>
                </CardText>
            </Card>
        )
    }

}