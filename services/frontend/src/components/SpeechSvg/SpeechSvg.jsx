/**
 * Toggle Bot Selection.
 * Support Left Swipe, Right Swipe, Left Select, Right Select
 */

import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import SpeechCycle from 'assets/svg/speechCycle.js'
import {

} from 'js/actions/messageActions'

import { connect } from 'react-redux'

import {
    Grid
} from '@material-ui/core'
// core components
import styles from "assets/jss/chatComponents/SpeechSvg.js";

const useStyles = makeStyles(styles);

const mapDispatchToProps = dispatch => {
    return {
    }
}

const mapStateToProps = state => {
    return {
        speaking: true
    }
}

const SpeechSvg = (props) => {
    const classes = useStyles();
    const { speaking } = props;
    const speakingClasses = (left) => (classNames(
        {
            [classes.speaking] : speaking,
            [classes.leftRing] : left,
            [classes.rightRing] : !left,
        }))

    return (
        <Grid className={classes.svgContainer}>
            <div className={classes.widgetLoading}>
                <div className={classes.widgetRing}>
                    <SpeechCycle className={speakingClasses(true)}/>
                    <SpeechCycle className={speakingClasses(false)}/>

                </div>
                <div className={classes.widgetRing}>
                    <SpeechCycle className={speakingClasses(false)}/>

                </div>
            </div>
        </Grid>

    )
}

export default connect(mapStateToProps, mapDispatchToProps)(SpeechSvg);