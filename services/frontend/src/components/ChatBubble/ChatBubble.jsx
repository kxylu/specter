/**
 * Toggle Bot Selection.
 * Support Left Swipe, Right Swipe, Left Select, Right Select
 */

import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import {
    botToggle,
} from 'js/actions/botActions'

import {
    Face,
    Language
} from '@material-ui/icons';

import { connect } from 'react-redux'

// core components
import styles from "assets/jss/chatComponents/chatBubble.js";

const useStyles = makeStyles(styles);

const mapDispatchToProps = dispatch => {
    return {
        botToggle: (left) => dispatch(botToggle(left)),
    }
}

const ChatContains = (props) => {
    const classes = useStyles();
    const { msg } = props;
    const chatContainerClass = 
        {
            [classes.botBubble]: !msg.isUser,
            [classes.userBubble]: msg.isUser,
        }
    const chatBoxClass = 
    {
        [classes.botBubble]: !msg.isUser,
        [classes.userBubble]: msg.isUser,
    }
    return (
        <div className={classNames(classes.chatContainer,chatContainerClass)}>
            <div className={classNames(classes.chatIdentity, chatContainerClass)} >
                {msg.isUser ? <Face className={classes.chatIcon}/>: <Language className={classes.chatIcon}/>}
                <div className={classes.bubbleName}>
                    {msg.senderName}
                </div>
            </div>
            <div className={classNames(classes.chatBox,chatBoxClass)} >
                {msg.message}
            </div>
        </div>

    )
}

const ChatLoading = (props) => {
    const classes = useStyles();

    return (
        <div className={classNames(classes.chatContainer,classes.botBubble)}>
            <div className={classNames(classes.chatIdentity)} >
                <Language className={classes.chatIcon}/>
            </div>
            <div className={classNames(classes.chatBox,classes.botBubble, classes.loadingContainer)} >
                <div className={classes.first}/>
                <div className={classes.second}/>
                <div className={classes.third}/>

            </div>
        </div>

    )
}
const ChatBubble = (props) => {
    const { loading } = props;

    return (
        loading ? <ChatLoading/> : <ChatContains {...props} />

    )
}

export default connect(null, mapDispatchToProps)(ChatBubble);