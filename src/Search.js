import React, { Component } from 'react'
import './App.css'
import {withStyles} from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import TopBar from './Search/TopBar'
import LeftGrid from './Search/LeftGrid'
import SearchData from './Search/SearchData'
const styles={
    root:{
        height:"10em"
    }
};
class Search extends Component {
    constructor(props){
        super(props);
        this.state={
            query:'aadhar'
        }
    }
    componentDidMount(){
        this.setState({query:this.props.location.state.string});
        console.log(this.props.location.state.string);
    }
    render() {
        const classes = this.props.classes;
        return (
            <Grid container justify="center" spacing={24}>
                <Grid item xs={12}>
                    <TopBar searchQuery={this.state.query}/>
                </Grid>
                <Grid item xs={10} >
                    <Grid container spacing={24} >
                        <Grid item xs={3} className={classes.root}>
                            <LeftGrid/>
                        </Grid>
                        <Grid item xs={6} className={classes.root} >
                            <SearchData />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(Search);

