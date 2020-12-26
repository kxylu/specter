import React, { Component } from 'react'
import { withStyles } from '@material-ui/cores/styles'
import { connect } from 'react-redux'
import styles from "assets/jss/textView.js";

const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

class TextView extends Component {

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
    TextView));