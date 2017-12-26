import React, { Component } from 'react'
import {withStyles} from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Feed from './Feed'
const styles ={};
class CenterPane extends Component{
    render(){
        return(
            <Grid container direction="column">
                <Grid item>
                    <Feed/>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(CenterPane)