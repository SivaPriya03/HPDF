import React, { Component } from 'react'
import {withStyles} from 'material-ui/styles'
import Tw4 from '../Resources/Tw1.jpeg'
import Tw1 from '../Resources/Tw2.jpg'
import Tw3 from '../Resources/Tw3.jpg'
import Tw2 from '../Resources/Tw4.jpg'
import Feeder from '../Resources/Feeder.jpg'
import Marvel from '../Resources/Marvel.png'

import 'font-awesome/css/font-awesome.min.css'
import Card, { CardActions, CardMedia } from 'material-ui/Card';
import Grid from 'material-ui/Grid'
import Tooltip from 'material-ui/Tooltip'
import Avatar from 'material-ui/Avatar'
import Typography from 'material-ui/Typography'

const styles ={
    text:{
        fontFamily: "\"Segoe UI\",  \"Arial\", sans-serif",
    },
    media:{
        height:200,
    }
};

class FeedData extends Component{
    render(){
        const classes = this.props.classes;
        return(
            <Grid container direction="column" style={{backgroundColor:"#ffffff"}}>
                <Grid item style={{borderBottom:"1px solid #efe6e6"}}>
                    <Grid container className="feedGrid">
                        <Grid item>
                            <Avatar src={Feeder}/>
                               
                        </Grid>
                        <Grid item xs={10}>
                            <Grid container direction="column">
                                <Grid item style={{paddingBottom:0}}>
                                    <Grid container>
                                        <Grid item>
                                            <Typography type="body2" className="feedAuthor" style={{fontWeight:"bold"}}>
                                                Google Cloud
                                            </Typography>
                                        </Grid>
                                        <Grid item style={{display:"flex",alignItems:"center",paddingLeft:0}}>
                                            <Typography type="caption" className={classes.text}>
                                                @googlecloud &nbsp;.December 20
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item style={{paddingTop:0}}>
                                    <Typography type="body1" className={classes.text}>
                                        Start your first VM with Google Compute Engine
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Card className="feedCard" style={{maxWidth:"345 ",boxShadow:"none",width:"490px"}}>
                                        <CardMedia image={Tw1} className={classes.media} style={{height:"400px"}}/>
                                        <CardActions>
                                            <Grid container>
                                                <Grid item xs={2} className="cardHover">
                                                    <Tooltip title="Reply" placement="top" style={{fontFamily: "\"Segoe UI\",  \"Arial\", sans-serif",}}>
                                                        <i className="fa fa-comment-o " aria-hidden="true">
                                                        </i>
                                                    </Tooltip>
                                                     <span  style={{fontSize:"12px",color:"grey",fontWeight:600}} className="cardAction">
                                                        &nbsp;&nbsp;2.2k
                                                    </span>
                                                </Grid>
                                                <Grid item xs={2} className="cardHover">
                                                    <Tooltip title="Retweet" placement="top" style={{fontFamily: "\"Segoe UI\",  \"Arial\", sans-serif",}}>
                                                        <i className="fa fa-retweet " aria-hidden="true">
                                                        </i>
                                                    </Tooltip>
                                                    <span style={{fontSize:"12px",color:"grey",fontWeight:600}} className="cardAction">
                                                        &nbsp;&nbsp;2.2k
                                                    </span>
                                                </Grid>
                                                <Grid item xs={2} className="cardHover">
                                                    <Tooltip title="Like" placement="top" >
                                                        <i className="fa fa-heart-o " aria-hidden="true">
                                                        </i>
                                                    </Tooltip>
                                                    <span style={{fontSize:"12px",color:"grey",fontWeight:600}} className="cardAction">
                                                        &nbsp;&nbsp;2.2k
                                                    </span>
                                                </Grid>
                                                <Grid item xs={2} className="cardHover">
                                                    <Tooltip title="Direct Message" placement="top">
                                                        <i className="fa fa-envelope-o " aria-hidden="true">
                                                    </i>
                                                    </Tooltip>
                                                    <span style={{fontSize:"12px",color:"grey",fontWeight:600}} className="cardAction">
                                                        &nbsp;&nbsp;2.2k
                                                    </span>
                                                </Grid>
                                            </Grid>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <i className="fa fa-chevron-down" aria-hidden="true">
                            </i>
                        </Grid>
                    </Grid>
                    <Grid container className="feedGrid">
                        <Grid item>
                                <Avatar src={Feeder}/>
                        </Grid>
                        <Grid item xs={10}>
                            <Grid container direction="column">
                                <Grid item style={{paddingBottom:0}}>
                                    <Grid container>
                                        <Grid item>
                                            
                                            <Typography type="body2" className="feedAuthor" style={{fontWeight:"bold"}}>
                                                Google Cloud
                                            </Typography>
                                        </Grid>
                                        <Grid item style={{display:"flex",alignItems:"center",paddingLeft:0}}>
                                            <Typography type="caption" className={classes.text}>
                                                @googlecloud &nbsp;.December 20
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item style={{paddingTop:0}}>
                                     <Typography type="body1" className={classes.text}>
                                        Take advantage of distributed training on your own cluster by converting a Keras model to an Estimator 
                                    </Typography>
                               </Grid>
                                <Grid item>
                                    <Card className="feedCard" style={{boxShadow:"none",width:"490px"}}>
                                        <CardMedia image={Tw2} style={{height:"400px"}}/>
                                        <CardActions>
                                            <Grid container>
                                                <Grid item xs={2} className="cardHover">
                                                    <Tooltip title="Reply" placement="top">
                                                        <i className="fa fa-comment-o " aria-hidden="true">
                                                        </i>
                                                    </Tooltip>
                                                    <span style={{fontSize:"12px",color:"grey",fontWeight:600}} className="cardAction">
                                                        &nbsp;&nbsp;2.2k
                                                    </span>
                                                </Grid> 
                                                <Grid item xs={2} className="cardHover">
                                                    <Tooltip title="Retweet" placement="top">
                                                        <i className="fa fa-retweet " aria-hidden="true">
                                                        </i>
                                                    </Tooltip>
                                                    <span style={{fontSize:"12px",color:"grey",fontWeight:600}} className="cardAction">
                                                        &nbsp;&nbsp;2.2k
                                                    </span>
                                                </Grid>
                                                <Grid item xs={2} className="cardHover">
                                                    <Tooltip title="Like" placement="top" >
                                                        <i className="fa fa-heart-o " aria-hidden="true">
                                                        </i>
                                                    </Tooltip>
                                                    <span style={{fontSize:"12px",color:"grey",fontWeight:600}} className="cardAction">
                                                        &nbsp;&nbsp;2.2k
                                                    </span>
                                                </Grid>
                                                <Grid item xs={2} className="cardHover">
                                                    <Tooltip title="Direct Message" placement="top">
                                                        <i className="fa fa-envelope-o " aria-hidden="true">
                                                    </i>
                                                    </Tooltip>
                                                    <span style={{fontSize:"12px",color:"grey",fontWeight:600}} className="cardAction">
                                                        &nbsp;&nbsp;2.2k
                                                    </span>
                                                </Grid>
                                                 </Grid>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <i className="fa fa-chevron-down" aria-hidden="true">
                            </i>
                        </Grid>
                    </Grid>
                    <Grid container className="feedGrid">
                        <Grid item>
                                <Avatar src={Feeder}/>
                        </Grid>
                        <Grid item xs={10}>
                            <Grid container direction="column">
                                <Grid item style={{paddingBottom:0}}>
                                    <Grid container>
                                        <Grid item>
                                            
                                            <Typography type="body2" className="feedAuthor" style={{fontWeight:"bold"}}>
                                                Google Cloud
                                            </Typography>
                                        </Grid>
                                        <Grid item style={{display:"flex",alignItems:"center",paddingLeft:0}}>
                                            <Typography type="caption" className={classes.text}>
                                                @googlecloud &nbsp;.December 20
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item style={{paddingTop:0}}>
                                     <Typography type="body1" className={classes.text}>
                                        Take advantage of distributed training on your own cluster by converting a Keras model to an Estimator 
                                    </Typography>
                               </Grid>
                                <Grid item>
                                    <Card className="feedCard" style={{boxShadow:"none",width:"490px"}}>
                                        <CardMedia image={Tw3} style={{height:"400px"}}/>
                                        <CardActions>
                                            <Grid container>
                                                <Grid item xs={2} className="cardHover">
                                                    <Tooltip title="Reply" placement="top">
                                                        <i className="fa fa-comment-o " aria-hidden="true">
                                                        </i>
                                                    </Tooltip>
                                                    <span  style={{fontSize:"12px",color:"grey",fontWeight:600}} className="cardAction">
                                                        &nbsp;&nbsp;2.2k
                                                    </span>
                                                </Grid>
                                                <Grid item xs={2} className="cardHover">
                                                    <Tooltip title="Retweet" placement="top">
                                                        <i className="fa fa-retweet " aria-hidden="true">
                                                        </i>
                                                    </Tooltip>
                                                    <span style={{fontSize:"12px",color:"grey",fontWeight:600}} className="cardAction">
                                                        &nbsp;&nbsp;2.2k
                                                    </span>
                                                </Grid>
                                                <Grid item xs={2} className="cardHover">
                                                    <Tooltip title="Like" placement="top">
                                                        <i className="fa fa-heart-o " aria-hidden="true">
                                                        </i>
                                                    </Tooltip>
                                                    <span style={{fontSize:"12px",color:"grey",fontWeight:600}} className="cardAction">
                                                        &nbsp;&nbsp;2.2k
                                                    </span>
                                                </Grid>
                                                <Grid item xs={2} className="cardHover">
                                                    <Tooltip title="Direct Message" placement="top">
                                                        <i className="fa fa-envelope-o " aria-hidden="true">
                                                    </i>
                                                    </Tooltip>
                                                    <span style={{fontSize:"12px",color:"grey",fontWeight:600}} className="cardAction">
                                                        &nbsp;&nbsp;2.2k
                                                    </span>
                                                </Grid>
                                                 </Grid>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <i className="fa fa-chevron-down" aria-hidden="true">
                            </i>
                        </Grid>
                    </Grid>
                    <Grid container className="feedGrid">
                        <Grid item>
                                <Avatar src={Marvel}/>
                        </Grid>
                        <Grid item xs={10}>
                            <Grid container direction="column">
                                <Grid item style={{paddingBottom:0}}>
                                    <Grid container>
                                        <Grid item>
                                            
                                            <Typography type="body2" className="feedAuthor" style={{fontWeight:"bold"}}>
                                                Marvel Entertainment
                                            </Typography>
                                        </Grid>
                                        <Grid item style={{display:"flex",alignItems:"center",paddingLeft:0}}>
                                            <Typography type="caption" className={classes.text}>
                                                @marvel &nbsp;.December 10
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item style={{paddingTop:0}}>
                                     <Typography type="body1" className={classes.text}>
                                        New Avengers INFINITY WAR POSTER
                                    </Typography>
                               </Grid>
                                <Grid item>
                                    <Card className="feedCard" style={{boxShadow:"none",width:"490px"}}>
                                        <CardMedia image={Tw4} style={{height:"400px"}}/>
                                        <CardActions>
                                            <Grid container>
                                                <Grid item xs={2} className="cardHover">
                                                    <Tooltip title="Reply" placement="top">
                                                        <i className="fa fa-comment-o " aria-hidden="true">
                                                        </i>
                                                    </Tooltip>
                                                    <span style={{fontSize:"12px",color:"grey",fontWeight:600}} className="cardAction">
                                                        &nbsp;&nbsp;2.2k
                                                    </span>
                                                </Grid>
                                                <Grid item xs={2} className="cardHover">
                                                    <Tooltip title="Retweet" placement="top">
                                                        <i className="fa fa-retweet " aria-hidden="true">
                                                        </i>
                                                    </Tooltip>
                                                    <span style={{fontSize:"12px",color:"grey",fontWeight:600}} className="cardAction">
                                                        &nbsp;&nbsp;2.2k
                                                    </span>
                                                </Grid>
                                                <Grid item xs={2} className="cardHover">
                                                    <Tooltip title="Like" placement="top">
                                                        <i className="fa fa-heart-o " aria-hidden="true">
                                                        </i>
                                                    </Tooltip>
                                                    <span style={{fontSize:"12px",color:"grey",fontWeight:600}} className="cardAction">
                                                        &nbsp;&nbsp;2.2k
                                                    </span>
                                                </Grid>
                                                <Grid item xs={2} className="cardHover">
                                                    <Tooltip title="Direct Message" placement="top">
                                                        <i className="fa fa-envelope-o " aria-hidden="true">
                                                    </i>
                                                    </Tooltip>
                                                    <span style={{fontSize:"12px",color:"grey",fontWeight:600}} className="cardAction">
                                                        &nbsp;&nbsp;2.2k
                                                    </span>
                                                </Grid>
                                                 </Grid>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <i className="fa fa-chevron-down" aria-hidden="true">
                            </i>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(FeedData)