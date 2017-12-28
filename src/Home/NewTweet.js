import React, { Component } from 'react'
import {withStyles} from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Button from 'material-ui/Button'
import {blue} from 'material-ui/colors';
import {createMuiTheme} from 'material-ui/styles';
import Avatar from 'material-ui/Avatar'
import Tooltip from 'material-ui/Tooltip'
import Typography from 'material-ui/Typography'
import Profile from '../Resources/Profile.jpg'
import Gif from 'material-ui-icons/Gif'
import 'font-awesome/css/font-awesome.min.css'
const theme=createMuiTheme({
    palette:{
        primary:blue,
    }
});
const styles ={
    tweetBar:{
        display: "block",
        outline: 0,
        width: "100%",
        height: "65%",
        backgroundColor: "#ffffff",
        border: "none",
        borderRadius: "8px",
        fontSize: "14px",
        fontFamily:"inherit",
        paddingTop: "8px",
        paddingLeft: "10px",
        transition: "border-color ease-in-out .15s, box-shadow ease-in-out .15s",
        color:"black",
        
        '&:focus':{
            border:"solid 2px #BBDEFB",
            borderRadius: "10px",
        
        },
    },
    tweetBtn:{
        backgroundColor: "#4AB3F4",
        color:"#ffffff",
        padding:0,
        border: "1px solid",
        top:"-8px",
        left:"17px",
        borderRadius: "20px",
        textTransform:"none",
        fontSize:"13px",
        fontFamily: "\"Segoe UI\",  \"Arial\", sans-serif",
        fontWeight:"900",
        '&:hover':{
            backgroundColor:"#2196f3",
        },
    },
    icon:{
        fontSize:"1.5em",
        width:"25px",
        color:"#64C5F6",
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
            icon:"fa fa-picture-o",
            tooltipText:"Add Photos or Videos",
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
        this.setState({resize:"none",tweetOptions:"none",minHeight:"0px",icon:"fa fa-picture-o",tooltipText:"Add Photos or Videos"})
    }
    expandArea(){
        this.setState({resize:"vertical",tweetOptions:"block",minHeight:"4em",icon:"fa fa-smile-o",tooltipText:"Add emoji"})
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
                        <Grid item xs={11} className="tweetInput" style={{display:"flex",alignItems:"center"}}>
                            <textarea className={classes.tweetBar} id="pl" placeholder="What's Happening?" 
                                      spellCheck="false" 
                                      autoComplete="false"  
                                      style={{resize:this.state.resize,minHeight:this.state.minHeight}}
                                      onFocus={this.expandArea} 
                                      onBlur={this.shrinkArea}/>

                             <span className={this.state.icon} id="tooltip" style={{fontSize:"1.2em",width:"25px"}} 
                                    aria-hidden="true">
                                    <span className="tooltiptext">{this.state.tooltipText}</span>
                             </span>
                        </Grid>
                        <Grid item xs={11} style={{display:this.state.tweetOptions,alignItems:"center"}}>
                            <Grid container>
                                <Grid item xs={1}>
                                </Grid>
                                    <Grid item xs={1}>
                                        <Tooltip title="Add Photos or videos" placement="top" className={classes.icon}>
                                            <i className="fa fa-picture-o" aria-hidden="true" 
                                                    style={{paddingLeft:"5px",cursor:"pointer"}}></i>
                                        </Tooltip>
                                    </Grid>
                                    <Grid item xs={1}>
                                        <Tooltip title="Add GIF" placement="top" className={classes.icon}>
                                            <Gif aria-hidden="true" style={{cursor:"pointer"}}/>
                                        </Tooltip>
                                    </Grid>
                                <Grid item xs={1}>
                                    <Tooltip title="Add Poll" placement="top" className={classes.icon}>
                                        <i className="fa fa-bar-chart" aria-hidden="true" style={{cursor:"pointer"}}></i>
                                    </Tooltip>
                                </Grid>
                                <Grid item xs={4}>
                                    <Tooltip title="Add Location" placement="top" className={classes.icon}>
                                        <i className="fa fa-map-marker" aria-hidden="true" style={{cursor:"pointer"}}></i>
                                    </Tooltip>
                                </Grid>

                                <Grid item  >
                                    <Tooltip title="Add another tweet" placement="top" className={classes.icon}>
                                        <i className="fa fa-plus-circle" aria-hidden="true" style={{left:"100px",cursor:"pointer"}}></i>
                                    </Tooltip>
                                </Grid>
                                <Grid item xs={3} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                    <Button  color="primary" style={{margin: theme.spacing.unit,}} className={classes.tweetBtn}>
                                        Tweet
                                    </Button>
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