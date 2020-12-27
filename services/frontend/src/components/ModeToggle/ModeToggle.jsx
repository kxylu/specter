/**
 * Toggle Mode Selection.
 * 
 */

import React, { useState } from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import {
    Grid,
} from '@material-ui/core'

import {
    modeToggle,
} from 'js/actions/botActions'

import {
    SPEECH_MODE,
    TEXT_MODE
} from 'js/constants'


import { connect } from 'react-redux'

// core components
import styles from "assets/jss/chatComponents/modeToggle.js";

const useStyles = makeStyles(styles);

const mapStateToProps = state => {
    return {
        isSpeech: state.botInfo.isSpeech
    }
}


const mapDispatchToProps = dispatch => {
    return {
        modeToggle: () => dispatch(modeToggle()),
    }
}


const ModeToggle = (props) => {
    const classes = useStyles();
    const { modeToggle, isSpeech } = props;

    const toggleClass = classNames({
        [classes.handleAll]: true,
        [classes.handleLeft]: isSpeech,
        [classes.handleRight]: !isSpeech,
    })

    const labelClass = {
        speech: classNames({
            [classes.labelLeft]: true,
            [classes.highlight]: isSpeech,
        }),
        text: classNames({
            [classes.labelRight]: true,
            [classes.highlight]: !isSpeech,

        })

    }
    return (
        <Grid className={classes.modeToggle} alignContent='center' container>
            <div
                className={classes.modeToggleGroup}
            >
                <div className={toggleClass} onClick={() => modeToggle(!isSpeech)} />

            </div>
            <div
                className={classes.label}
            >
                <div className={labelClass.speech}>
                    {SPEECH_MODE}
                </div>
                <div className={labelClass.text}>
                    {TEXT_MODE}
                </div>
            </div>
        </Grid >
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ModeToggle);