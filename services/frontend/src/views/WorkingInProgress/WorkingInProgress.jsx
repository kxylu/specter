import React, { Component } from 'react'
import { connect } from 'react-redux'

import 'assets/scss/workingInProgress.css';

import { Button, IconButton, Grid, Typography, Toolbar } from '@material-ui/core'
import ModeToggle from 'components/ModeToggle/ModeToggle'
import {
    Menu
} from '@material-ui/icons'
const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

class WorkingInProgress extends Component {

    toggleSpeech = () => {

    }
    
    toggleSpeech = () => {
        
    }
    render() {
        return (
            <Grid container justify='center' direction='column'>
                <Toolbar>

                <IconButton
                    aria-label="toggle-drawer"
                    onClick={console.log("Enter Chat View")}
                >
                    <Menu/>
                </IconButton>

                </Toolbar>
                <Grid container alignItems='center' justify='center' direction='column'>
                    <Grid item>
                        <Typography variant='h2'>FrontPage</Typography>
                    </Grid>
                    <Grid item>
                    <Typography variant='h4'>Working In Progress</Typography>
                    </Grid>
                </Grid>
                <Grid container justify='center'>
                    <Button onClick={() => this.props.history.push('/chat')}>Go to Interface</Button>
                    <ModeToggle/>
                </Grid> 
                <div className="gears container">
                    <div className="gear one">
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                    <div className="gear two">
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                    <div className="gear three">
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                </div>

            </Grid>
        )

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(
    WorkingInProgress);