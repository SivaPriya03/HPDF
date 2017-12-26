import React, { Component } from 'react'
import {withStyles} from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Avatar from 'material-ui/Avatar'
import Tooltip from 'material-ui/Tooltip'
import Typography from 'material-ui/Typography'
import Profile from '../Resources/Profile.jpg'
import Gif from 'material-ui-icons/Gif'
const styles ={
    tweetBar:{
        display: "block",
        outline: 0,
        color:"#1DA1F2",
        width: "100%",
        height: "65%",
        backgroundColor: "#ffffff",
        border: "none",
        borderRadius: "5px",
        fontSize: "15px",
        fontFamily:"inherit",
        pUploadingTop: "8px",
        pUploadingLeft: "10px",
        transition: "border-color ease-in-out .15s, box-shadow ease-in-out .15s"
    }
};
class NewTweet extends Component{

    constructor(props){
        super(props);
        this.state={
            resize:"none",
            minHeight:"0px",
            tweetOptions:"none",
            tweetStatus:5,
        };
        this.expandArea = this.expandArea.bind(this);
        this.shrinkArea = this.shrinkArea.bind(this);
        setInterval(
              ()=>this.setState(
              {
                tweetStatus:this.state.tweetStatus+=1
              }),20000);
    };
    shrinkArea(){
        this.setState({resize:"none",tweetOptions:"none",minHeight:"0px"})
    }
    expandArea(){
        this.setState({resize:"vertical",tweetOptions:"block",minHeight:"4em"})
    };
    render(){
        const classes = this.props.classes;
        return(
            <Grid container direction="column">
                <Grid item>
                    <Grid container style={{backgroundColor:"#E8F5FD"}}>
                        <Grid item xs={1}>
                            <Avatar src={Profile}/>
                                
                        </Grid>
                        <Grid item xs={11} style={{display:"flex",alignItems:"center"}}>
                            <textarea className={classes.tweetBar} placeholder="What's Happening?" 
                                      spellCheck="false" 
                                      autoComplete="false"  
                                      style={{resize:this.state.resize,minHeight:this.state.minHeight}}
                                      onFocus={this.expandArea} 
                                      onBlur={this.shrinkArea}/>
                        </Grid>
                        <Grid item xs={1} style={{display:this.state.tweetOptions}}>
                        </Grid>
                        <Grid item xs={11} style={{display:this.state.tweetOptions,alignItems:"center"}}>
                            <Grid container>
                                <Grid item xs={1}>
                                </Grid>
                                    <Grid item xs={1}>
                                        <Tooltip title="Upload Photos or videos" placement="top">
                                            <i className="fa fa-picture-o" aria-hidden="true" style={{color:"#1DA1F2",cursor:"pointer"}}></i>
                                        </Tooltip>
                                    </Grid>
                                    <Grid item xs={1}>
                                        <Tooltip title="Upload GIF" placement="top">
                                            <Gif aria-hidden="true" style={{color:"1DA1F2",cursor:"pointer"}}/>
                                        </Tooltip>
                                    </Grid>
                                <Grid item xs={1}>
                                    <Tooltip title="Upload Poll" placement="top">
                                        <i className="fa fa-bar-chart" aria-hidden="true" style={{color:"#1DA1F2",cursor:"pointer"}}></i>
                                    </Tooltip>
                                </Grid>
                                <Grid item xs={1}>
                                    <Tooltip title="Upload Location" placement="top">
                                        <i className="fa fa-map-marker" aria-hidden="true" style={{color:"#1DA1F2",cursor:"pointer"}}></i>
                                    </Tooltip>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item style={{display:"flex",justifyContent:"center"}} className="refContainer">
                    <Typography className="refreshTweets">
                        See {this.state.tweetStatus} New Tweets
                    </Typography>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(NewTweet)