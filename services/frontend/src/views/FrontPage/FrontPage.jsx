import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import { connect } from 'react-redux'
import styles from "assets/jss/frontPage.js";

import BotToggle from 'components/BotToggle/BotToggle'
import ModeToggle from 'components/ModeToggle/ModeToggle'

import {
    Face
} from '@material-ui/icons'

import {
    Grid,
} from '@material-ui/core'

import {
    startChat,
  } from 'js/actions/messageActions'

const mapStateToProps = state => {
    return {
        currBot: state.botInfo.currBot
    }
}

const mapDispatchToProps = dispatch => {
    return {
        startChat: () => dispatch(startChat()),
    }
}



class FrontPage extends Component {

    startChatButton = (startChatClass) => (
        <Grid  alignContent='center' item>
            <div
                onClick={this.props.startChat}>
                <Face/>
            </div>
        </Grid>
    )
    render() {
        const { classes, currBot } = this.props;
        const StartChatButton = this.startChatButton(classes)
        return (
            <div
                className={classes.frontPageContainer}>
                <BotToggle left botId={currBot.botId}/>
                    {/* <Row >
                        
                    </Row> */}
                    <Grid 
                      className={classes.internalContainer}
                      container>
                        {/* <ModeToggle /> */}
                        <Grid alignContent='center' item>
                            <div >{currBot.botName}</div>
                        </Grid>
                        {/* <StartChatButton /> */}
                    </Grid>

                    {/* <Row >
                        <div >{currBot.botDescription}</div>
                    </Row>
                    <Row >
                        
                    </Row> */}
                <BotToggle botId={currBot.botId}/>
            </div>

        )
    }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(
    FrontPage));