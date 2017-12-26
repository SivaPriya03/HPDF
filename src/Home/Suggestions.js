import React, { Component } from 'react'
import {withStyles} from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Avatar from 'material-ui/Avatar'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import Follower1 from '../Resources/Follower1.jpg'
import Follower2 from '../Resources/Follower2.JPG'
import Follower3 from '../Resources/Follower3.jpg'

const styles ={
    followButton:{
        color: "#1da1f2",
        padding: 0,
        minHeight: "32px",
        border: "1px solid",
        borderRadius: "20px",
        textTransform:"none",
        fontSize:"13px",
        fontFamily: "\"Segoe UI\",  \"Arial\", sans-serif",
        fontWeight:"bold",
        
    },
    text:{
      fontFamily: "\"Segoe UI\",  \"Arial\", sans-serif",
        
    }

};
class Suggestions extends Component{
    render(){
        const classes = this.props.classes;
        return(
            <Grid container style={{backgroundColor:"#ffffff"}} direction="column">
                <Grid item>
                    <Grid container>
                        <Grid item>
                            <Typography type="title" style={{fontSize:"18px",fontFamily: "\"Segoe UI\",  \"Arial\", sans-serif",fontWeight:"bold",}}>
                                Who to follow
                            </Typography>
                        </Grid>
                        <Grid item style={{display:"flex",alignItems:"flex-end",paddingLeft:0}}>
                            <Typography type="caption" className={classes.text} style={{color:"#1DA1F2"}}>
                                <a>. Refresh </a>. <a>View all</a>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                  <Grid container>
                      <Grid item style={{borderBottom:"1px solid #efe6e6"}}>
                          <Grid container>
                              <Grid item>
                                  <Avatar src={Follower1}/>
                              </Grid>
                              <Grid item>
                                  <Grid container direction="column">
                                      <Grid item style={{paddingBottom:0}}>
                                          <Grid container>
                                              <Grid item>
                                                  <Typography type="body2" className="followMe" style={{fontFamily: "\"Segoe UI\",  \"Arial\", sans-serif",}}>
                                                      SivaKarthikeyan
                                                  </Typography>
                                              </Grid>
                                              <Grid item style={{display:"flex",alignItems:"center",paddingLeft:0}}>
                                                  <Typography type="caption" className={classes.text}>
                                                      @sivakartikeyan
                                                  </Typography>
                                              </Grid>
                                          </Grid>
                                      </Grid>
                                      <Grid item style={{paddingTop:0,paddingLeft:0}}>
                                          <Button color="primary" className={classes.followButton}>
                                              Follow
                                          </Button>
                                      </Grid>
                                  </Grid>
                              </Grid>
                          </Grid>
                      </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                    <Grid container>
                        <Grid item style={{borderBottom:"1px solid #efe6e6"}}>
                            <Grid container>
                                <Grid item>
                                    <Avatar src={Follower2}/>
                                </Grid>
                                <Grid item>
                                    <Grid container direction="column">
                                        <Grid item style={{paddingBottom:0}}>
                                            <Grid container>
                                                <Grid item>
                                                     <Typography type="body2" className="followMe" style={{fontFamily: "\"Segoe UI\",  \"Arial\", sans-serif",}}>
                                                        Geeks for Geeks
                                                    </Typography>
                                                </Grid>
                                                <Grid item style={{display:"flex",alignItems:"center",paddingLeft:0}}>
                                                    <Typography type="caption" className={classes.text}>
                                                        @geeksforgeeks
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item style={{paddingTop:0,paddingLeft:0}}>
                                            <Button color="primary" className={classes.followButton}>
                                                Follow
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container>
                        <Grid item style={{borderBottom:"1px solid #efe6e6"}}>
                            <Grid container>
                                <Grid item>
                                    <Avatar src={Follower3}/>
                                </Grid>
                                <Grid item>
                                    <Grid container direction="column">
                                        <Grid item style={{paddingBottom:0}}>
                                            <Grid container>
                                                <Grid item>
                                                     <Typography type="body2" className="followMe" style={{fontFamily: "\"Segoe UI\",  \"Arial\", sans-serif",}}>
                                                        IMDb
                                                    </Typography>
                                                </Grid>
                                                <Grid item style={{display:"flex",alignItems:"center",paddingLeft:0}}>
                                                    <Typography type="caption" className={classes.text}>
                                                        @imdb
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item style={{paddingTop:0,paddingLeft:0}}>
                                            <Button color="primary" className={classes.followButton}>
                                                Follow
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item style={{padding:"20px"}}>
                    <Typography type="caption" className="advertiseLink" style={{fontFamily: "\"Segoe UI\",  \"Arial\", sans-serif",color:"#1da1f2"}}>
                          <i className="fa fa-user" style={{paddingRight:"3px"}}/>
                        
                       &nbsp;Find people you know
                    </Typography>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(Suggestions)