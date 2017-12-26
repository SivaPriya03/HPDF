import React, { Component } from 'react';
import './App.css';
import {withStyles} from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import TopBar from './Home/TopBar'
import LeftGrid from './Home/LeftGrid'
import NewsFeed from './Home/NewsFeed'
import RightGrid from './Home/RightGrid'
const styles={
  root:{
      height:"10em"
  }
};

class App extends Component {
  render() {
      const classes = this.props.classes;
    return (
        <Grid container justify="center" spacing={24}>
            <Grid item xs={12}>
                <TopBar/>
            </Grid>
            <Grid item xs={10} style={{marginTop:"45px"}} >
                <Grid container spacing={24}>
                    <Grid item xs={3} className={classes.root}>
                        <LeftGrid/>
                    </Grid>
                    <Grid item xs={6} className={classes.root} >
                        <NewsFeed/>
                    </Grid>
                    <Grid item xs={3} className={classes.root}>
                        <RightGrid/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        
    );
  }
}

export default withStyles(styles)(App);
