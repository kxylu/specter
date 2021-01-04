import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";


import {
    Send
} from '@material-ui/icons';

import { connect } from 'react-redux'

// core components
import styles from "assets/jss/chatComponents/chatInput.js";
import {
    Grid,
    TextField,
    InputAdornment
 } from "@material-ui/core";

const useStyles = makeStyles(styles);

const mapDispatchToProps = dispatch => {
    return {
    }
}

const ChatInput = (props) => {
    const classes = useStyles();
    // const { left, botToggle } = props;
    // const botToggleClass = classNames(
    //     {
    //         [classes.buttonBox]: true,
    //         [classes.leftButton]: left,
    //         [classes.rightButton]: !left,
    //     })

    return (
        <Grid item className={classes.chatInputContainer}>

            <form noValidate autoComplete="off">
            <TextField
                className={classes.margin}
                multiline
                fullWidth
                InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <Send />
                    </InputAdornment>
                ),
                }}
            />
            </form>
        </Grid>

    )
}

export default connect(null, mapDispatchToProps)(ChatInput);