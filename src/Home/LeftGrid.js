import React, { Component } from 'react'
import {withStyles} from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import UserPanel from './UserPanel'
import Trends from './Trends'
const styles ={};
class LeftGrid extends Component {
    render() {
        return(
            <Grid container direction="column" spacing={24}>
                <Grid item>
                    <UserPanel/>
                </Grid>
                <Grid item>
                    <Trends/>
                </Grid>
            </Grid>
        )
    }
}
export default withStyles(styles)(LeftGrid)