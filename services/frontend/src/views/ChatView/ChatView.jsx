import React, { Component } from 'react'
import { withStyles } from "@material-ui/core/styles";
import { connect } from 'react-redux'
import styles from "assets/jss/chatView.js";
import MuiAlert from '@material-ui/lab/Alert';
import classNames from "classnames";
import {
    Toolbar,
    IconButton,
    LinearProgress,
    Grid,
    Typography
} from '@material-ui/core'

import {
    Menu
} from '@material-ui/icons'

import {
    STATUS_LOADING,
    STATUS_SUCCESS,
    STATUS_FAILED
} from 'js/constants'

import SpeechView from 'views/ChatView/SpeechView/SpeechView'
import TextView from 'views/ChatView/TextView/TextView'

const mapStateToProps = state => {
    return {
        isSpeech: state.botInfo.isSpeech,
        botStatus: state.message.status
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

class ChatView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            botStatus: STATUS_LOADING,
            i: 0
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            children: nextProps.children
        });
    }

    // mapStatusToColor = () =>
    // {
    //     if (this.state.botStatus === STATUS_ERROR)

    // }

    toggleStatus = () => {
        // Temporary Toggle Button to display the three statuses
        const statuses = [STATUS_LOADING, STATUS_SUCCESS, STATUS_FAILED];
        let i = this.state.i;
        this.setState({
            botStatus: statuses[this.state.i],
            i: i + 1 > 2 ? 0 : i + 1

        }
        )
    }

    render() {
        const { classes, isSpeech } = this.props;
        const backGroundClass = classNames({
            [classes.speechImage]: isSpeech,
            [classes.textImage]: !isSpeech
        })

        const iconColorClass = classNames({
            [classes.speechIcon]: isSpeech,
            [classes.textIcon]: !isSpeech
        })

        return (<div className={backGroundClass}>
            <Toolbar>

                <IconButton
                    aria-label="toggle-drawer"
                    onClick={this.toggleStatus}
                >
                    <Menu className={iconColorClass}/>
                </IconButton>

            </Toolbar>
            <MuiAlert  severity={this.state.botStatus.status}>
                <Grid container alignContent='center'>
                <Typography variant="body1">{this.state.botStatus.message}</Typography>
                    {this.state.botStatus.loading ? <LinearProgress/>:undefined}
                </Grid>
            </MuiAlert>
            {
                isSpeech?
                <SpeechView />:
                <TextView />

            }

        </div>)

    }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(
    ChatView));