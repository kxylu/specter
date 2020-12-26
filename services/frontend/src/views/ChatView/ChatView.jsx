import React, { Component } from 'react'
import { withStyles } from "@material-ui/core/styles";
import { connect } from 'react-redux'
import styles from "assets/jss/chatView.js";

const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

class ChatView extends Component {

    render = () =>
    {
        return 
            (<div>
                <div>
                    {/* HEADER */}
                    {/* MuiAlert */}
                    {/* Chat View */}
                    {/* Control Box */}
                </div>
            </div>)
        
    }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(
    ChatView));