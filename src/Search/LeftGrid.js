import React, { Component } from 'react'
import {withStyles} from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Customisation from './Customisation'
import About from './About'

import Suggestions from '../Home/Suggestions'
import Trends from '../Home/Trends'
const styles ={};
class LeftGrid extends Component {
    render() {
        return(
            <Grid container direction="column" spacing={24}>
                <Grid item>
                    <Customisation/>
                </Grid>
                <Grid item>
                    <Suggestions/>
                </Grid>

                <Grid item>
                    <Trends/>
                </Grid>
                <Grid item>
                    <About/>
                </Grid>
                
            </Grid>
        )
    }
}
export default withStyles(styles)(LeftGrid)