import React, { Component } from 'react'
import { withStyles } from "@material-ui/core/styles";
import { connect } from 'react-redux'
import styles from "assets/jss/textView.js";
import ChatBubble  from 'components/ChatBubble/ChatBubble';
import ChatInput  from 'components/ChatInput/ChatInput';
import { Grid } from '@material-ui/core';

const mapStateToProps = state => {
    return {
        messageHistory: state.message.messageHistory,
        loading: state.message.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

class TextView extends Component {

    componentDidUpdate = () => {
        const container = document.getElementById('chatViewContainer');
        if (container) {
            container.scrollTo(0, container.scrollHeight);
        }
    }

    render ()
    {
        const { classes, messageHistory, loading } = this.props;
        return (
        <Grid item className={classes.chatGrid} >
            <main id='chatViewContainer' className={classes.chatViewContainer}>
                {
                    messageHistory.map((_msg, _index) => 
                        <ChatBubble key={_index} msg={_msg}/>)
                }
                { loading ? <ChatBubble loading />: null }
            </main>
            <ChatInput />
        </Grid>
)
        
    }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(
    TextView));