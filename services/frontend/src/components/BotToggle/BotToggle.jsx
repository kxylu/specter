/**
 * Toggle Bot Selection.
 * Support Left Swipe, Right Swipe, Left Select, Right Select
 */

import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Button, Tooltip } from "@material-ui/core"
import {
    botToggle,
} from 'js/actions/botActions'

import {
    KeyboardArrowRight,
    KeyboardArrowLeft
} from '@material-ui/icons';

import { connect } from 'react-redux'

// core components
import styles from "assets/jss/chatComponents/botToggle.js";

const useStyles = makeStyles(styles);

const mapStateToProps = state => {
    return {
        hasPreviousBot: false,
        hasNextBot: false
    }
}

const mapDispatchToProps = dispatch => {
    return {
        botToggle: (left) => dispatch(botToggle(left)),
    }
}

const Arrow = (props) => (props.left ? <KeyboardArrowLeft {...props} /> : <KeyboardArrowRight {...props} />)

const BotToggle = (props) => {
    const classes = useStyles();
    const { left, botToggle, hasPreviousBot, hasNextBot } = props;
    const botToggleClass = classNames(
        {
            [classes.buttonBox]: true,
            [classes.leftButton]: left,
            [classes.rightButton]: !left,
        })

    let toggleDisabled = left ? !hasPreviousBot : !hasNextBot;
    let title = left ? "Get Previous Chatbot" : "Get Next Chatbot";
    return (
        toggleDisabled ? null:
        <Tooltip
            title={title}
            placement="bottom"
            classes={{
                tooltip: classes.tooltip
            }}
        >
            <Button
                onClick={() => botToggle(left)}
                className={botToggleClass}
                aria-label='toggle'>
                <Arrow fontSize='large' left={left} className={classes.arrow} />
            </Button>

        </Tooltip>

    )
}

export default connect(mapStateToProps, mapDispatchToProps)(BotToggle);