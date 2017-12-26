import React, { Component } from 'react'
import {withStyles} from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Suggestions from './Suggestions'
import About from './About'
const styles ={};
class RightGrid extends Component{
    render() {
        return (
            <Grid container direction="column" spacing={24}>
                <Grid item>
                    <Suggestions/>
                </Grid>
                <Grid item>
                    <About/>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(RightGrid)