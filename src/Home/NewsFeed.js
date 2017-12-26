import React, { Component } from 'react'
import {withStyles} from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import NewTweet from './NewTweet'
import FeedData from './FeedData'
const styles ={};
class NewsFeed extends Component{
    render(){
        return(
            <Grid container direction="column">
                <Grid item>
                    <NewTweet/>
                </Grid>
                <Grid item>
                    <FeedData/>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(NewsFeed)