import React, { Component } from 'react'
import {withStyles} from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'
import 'font-awesome/css/font-awesome.min.css'
import Profile from '../Resources/Profile.jpg'
import Cover from '../Resources/Cover.jpg'
import Avatar from "material-ui/Avatar"
const styles ={
};

class UserPanel extends Component{
    render(){
        return(
            <Grid container direction="column">
                <Grid item style={{backgroundImage:`url(${Cover})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",height:"6em"}}>
                        <Avatar src={Profile} style={{marginTop:"3em","border": "3px solid white",boxShadow:"none",width:"70px",height:"70px",backgroundColor:"rgb(29, 161, 242)"}}/>
                    
                </Grid>
                <Grid item style={{backgroundColor:"#ffffff"}}>
                    <Grid container>
                        <Grid item xs={4}>
                        </Grid>
                        <Grid item style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <Grid container direction="column">
                                <Grid item style={{padding: "8px 8px 0px 8px"}}>
                                    <Typography type="title" style={{fontFamily: "\"Segoe UI\",  \"Arial\", sans-serif",fontWeight:"bold",}}>
                                       <a href="/heyiamsiva"> Siva Priya</a>
                                    </Typography>
                                </Grid>
                                <Grid item style={{padding:0,paddingLeft:"6px"}}>
                                    <Typography type="caption" style={{fontFamily: "\"Segoe UI\",  \"Arial\", sans-serif",color:"#657786"}}>
                                        <a href="/heyiamsiva">@heyiamsiva</a>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={10}>
                            <Grid container justify="center">
                                <Grid item>
                                    <Grid container direction="column">
                                        <Grid item style={{paddingBottom:0}}>
                                            <Typography type="body2" style={{color:"#657786",fontFamily: "\"Segoe UI\",  \"Arial\", sans-serif",fontWeight:"bold",}}
                                                        className="tweetStats">
                                                Tweets
                                            </Typography>
                                        </Grid>
                                        <Grid item style={{paddingTop:0}}>
                                            <Typography type="body1"  className="tweetStats" style={{fontFamily: "\"Segoe UI\",  \"Arial\", sans-serif",fontWeight:"bold",fontSize:"20px",color:"#1da1f2"}}>
                                                0
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Grid container direction="column">
                                        <Grid item style={{paddingBottom:0}}>
                                            <Typography type="body2" style={{color:"#657786",fontFamily: "\"Segoe UI\",  \"Arial\", sans-serif",fontWeight:"bold"}}
                                                        className="tweetStats">
                                                Following
                                            </Typography>
                                        </Grid>
                                        <Grid item style={{paddingTop:0}}>
                                            <Typography type="body1" className="tweetStats" style={{fontFamily: "\"Segoe UI\",  \"Arial\", sans-serif",fontWeight:"bold",fontSize:"20px",color:"#1da1f2"}}>
                                                40
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Grid container direction="column">
                                        <Grid item style={{paddingBottom:0}}>
                                            <Typography type="body2" style={{fontWeight:"bold",fontFamily: "\"Segoe UI\",  \"Arial\", sans-serif",color:"#657786",}}
                                                        className="tweetStats">
                                                Followers
                                            </Typography>
                                        </Grid>
                                        <Grid item style={{paddingTop:0}}>
                                            <Typography type="body1" className="tweetStats" style={{fontWeight:"bold",fontFamily: "\"Segoe UI\",  \"Arial\", sans-serif",fontSize:"20px",color:"#1da1f2"}}>
                                                6
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}
export default withStyles(styles)(UserPanel)