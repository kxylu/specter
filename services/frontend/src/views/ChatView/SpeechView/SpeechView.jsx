import React, { Component } from 'react'
import { withStyles } from "@material-ui/core/styles";
import { connect } from 'react-redux'
import styles from "assets/jss/speechView.js";
import { Grid, Typography } from '@material-ui/core';
import SpeechSvg from 'components/SpeechSvg/SpeechSvg'

import {
    ThumbUpAlt
} from '@material-ui/icons'

const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

class SpeechView extends Component {

    stopChatButton = (classes) => 
    (
        <div className={classes.blockButton} onClick={this.props.stopChat}>
            <ThumbUpAlt className={classes.stopButton} />
            <Typography variant="h5">End Chat</Typography>
        </div>

    )

    render ()
    {
        const { classes } = this.props;
        const StopChatButton = () => this.stopChatButton(classes);
        return (
        <Grid className={classes.speechPageContainer} direction='column' alignContent='center' container>
            <Grid justify='center'>
                <SpeechSvg />
            </Grid>
            <Grid className={classes.speechContent} justify='center'>
                <StopChatButton />
            </Grid>
        </Grid>)
        
    }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(
    SpeechView));