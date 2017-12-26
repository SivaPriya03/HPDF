import React, { Component } from 'react'
import {withStyles} from 'material-ui/styles'
import Tws1 from '../Resources/Tws1.jpg'
import Tws2 from '../Resources/Tws2.jpg'
import Tws3 from '../Resources/Tws3.jpg'
import 'font-awesome/css/font-awesome.min.css'
import Card, { CardActions, CardMedia } from 'material-ui/Card';
import Grid from 'material-ui/Grid'
import Tooltip from 'material-ui/Tooltip'
import Avatar from 'material-ui/Avatar'
import Typography from 'material-ui/Typography'

const styles ={
    text:{
        fontFamily: "\"Segoe UI\",  \"Arial\", sans-serif",
    }
};

class Feed extends Component{
    render(){
        const classes = this.props.classes;
        return(
            <Grid container direction="column" style={{backgroundColor:"#ffffff"}}>
                <Grid item style={{borderBottom:"1px solid #efe6e6"}}>
                    <Grid container className="feedGrid">
                        <Grid item>
                            <Avatar>A</Avatar>
                               
                        </Grid>
                        <Grid item xs={10}>
                            <Grid container direction="column">
                                <Grid item style={{paddingBottom:0}}>
                                    <Grid container>
                                        <Grid item>
                                            <Typography type="body2" className="feedAuthor" style={{fontWeight:"bold"}}>
                                                aarya
                                            </Typography>
                                        </Grid>
                                        <Grid item style={{display:"flex",alignItems:"center",paddingLeft:0}}>
                                            <Typography type="caption" className={classes.text}>
                                                @sidhi &nbsp;.10m
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item style={{paddingTop:0}}>
                                    <Typography type="body1" className={classes.text}>
                                        The idea of having a national identity card was first conceptualised during Vajpayee’s time, the name AADHAR was given & UIDAI formed during congress
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Card className="feedCard" style={{boxShadow:"none",width:"490px"}}>
                                        <CardMedia image={Tws1} style={{height:"400px"}}/>
                                        <CardActions>
                                            <Grid container>
                                                <Grid item xs={2} className="cardHover">
                                                    <Tooltip title="Reply" placement="top">
                                                        <i className="fa fa-comment-o " aria-hidden="true">
                                                        </i>
                                                    </Tooltip>
                                                     <span className="cardHover" style={{fontSize:"12px",color:"grey",fontWeight:600}} className="cardAction">
                                                        &nbsp;&nbsp;500
                                                    </span>
                                                </Grid>
                                                <Grid item xs={2} className="cardHover">
                                                    <Tooltip title="Retweet" placement="top">
                                                        <i className="fa fa-retweet " aria-hidden="true">
                                                        </i>
                                                    </Tooltip>
                                                    <span style={{fontSize:"12px",color:"grey",fontWeight:600}} className="cardAction">
                                                        &nbsp;&nbsp;500
                                                    </span>
                                                </Grid>
                                                <Grid item xs={2} className="cardHover">
                                                    <Tooltip title="Like" placement="top">
                                                        <i className="fa fa-heart-o " aria-hidden="true">
                                                        </i>
                                                    </Tooltip>
                                                    <span style={{fontSize:"12px",color:"grey",fontWeight:600}} className="cardAction">
                                                        &nbsp;&nbsp;500
                                                    </span>
                                                </Grid>
                                                <Grid item xs={2} className="cardHover">
                                                    <Tooltip title="Direct Message" placement="top">
                                                        <i className="fa fa-envelope-o " aria-hidden="true">
                                                    </i>
                                                    </Tooltip>
                                                    <span style={{fontSize:"12px",color:"grey",fontWeight:600}} className="cardAction">
                                                        &nbsp;&nbsp;500
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
                                <Avatar>IB</Avatar>
                        </Grid>
                        <Grid item xs={10}>
                            <Grid container direction="column">
                                <Grid item style={{paddingBottom:0}}>
                                    <Grid container>
                                        <Grid item>
                                            
                                            <Typography type="body2" className="feedAuthor" style={{fontWeight:"bold"}}>
                                                InfoBandhu
                                            </Typography>
                                        </Grid>
                                        <Grid item style={{display:"flex",alignItems:"center",paddingLeft:0}}>
                                            <Typography type="caption" className={classes.text}>
                                                @infobandhu &nbsp;.11m
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item style={{paddingTop:0}}>
                                     <Typography type="body1" className={classes.text}>
                                                Banks have started Aadhar Helpdesk in their city branch to update
                                                 the Aadhar Card, so stop waiting & search the nearest branch online here:
                                                  https://www.infobandhu.com/aadhar-card-enrollment-centre-how-to-find-it-405
                                    </Typography>
                               </Grid>
                                <Grid item>
                                    <Card className="feedCard" style={{boxShadow:"none",width:"490px"}}>
                                        <CardMedia image={Tws2} style={{height:"400px"}}/>
                                        <CardActions>
                                            <Grid container>
                                                <Grid item xs={2} className="cardHover">
                                                    <Tooltip title="Reply" placement="top">
                                                        <i className="fa fa-comment-o " aria-hidden="true">
                                                        </i>
                                                    </Tooltip>
                                                    <span style={{fontSize:"12px",color:"grey",fontWeight:600}} className="cardAction">
                                                        &nbsp;&nbsp;500
                                                    </span>
                                                </Grid>
                                                <Grid item xs={2} className="cardHover">
                                                    <Tooltip title="Retweet" placement="top">
                                                        <i className="fa fa-retweet " aria-hidden="true">
                                                        </i>
                                                    </Tooltip>
                                                    <span style={{fontSize:"12px",color:"grey",fontWeight:600}} className="cardAction">
                                                        &nbsp;&nbsp;500
                                                    </span>
                                                </Grid>
                                                <Grid item xs={2} className="cardHover">
                                                    <Tooltip title="Like" placement="top" >
                                                        <i className="fa fa-heart-o " aria-hidden="true">
                                                        </i>
                                                    </Tooltip>
                                                    <span style={{fontSize:"12px",color:"grey",fontWeight:600}} className="cardAction">
                                                        &nbsp;&nbsp;500
                                                    </span>
                                                </Grid>
                                                <Grid item xs={2} className="cardHover">
                                                    <Tooltip title="Direct Message" placement="top">
                                                        <i className="fa fa-envelope-o " aria-hidden="true">
                                                    </i>
                                                    </Tooltip>
                                                    <span style={{fontSize:"12px",color:"grey",fontWeight:600}} className="cardAction">
                                                        &nbsp;&nbsp;500
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
                                <Avatar>AA</Avatar>
                        </Grid>
                        <Grid item xs={10}>
                            <Grid container direction="column">
                                <Grid item style={{paddingBottom:0}}>
                                    <Grid container>
                                        <Grid item>
                                            
                                            <Typography type="body2" className="feedAuthor" style={{fontWeight:"bold"}}>
                                                Anamika
                                            </Typography>
                                        </Grid>
                                        <Grid item style={{display:"flex",alignItems:"center",paddingLeft:0}}>
                                            <Typography type="caption" className={classes.text}>
                                                @Anu_146 &nbsp;.20m
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item style={{paddingTop:0}}>
                                     <Typography type="body1" className={classes.text}>
                                            @PMOIndia Hello Respected PM,Hope you’re well.
                                            An Aadhar card in city like Mumbai is such a uphill task.
                                            People queue up from 2-3 am because an Addhar centre in Navi mumbai
                                            ( only one in this area) decide to give only 20 tokens each day.
                                     </Typography>
                               </Grid>
                                <Grid item>
                                    <Card className="feedCard" style={{boxShadow:"none",width:"490px"}}>
                                        <CardMedia image={Tws3} style={{height:"400px"}}/>
                                        <CardActions>
                                            <Grid container>
                                                <Grid item xs={2} className="cardHover">
                                                    <Tooltip title="Reply" placement="top">
                                                        <i className="fa fa-comment-o " aria-hidden="true">
                                                        </i>
                                                    </Tooltip>
                                                    <span style={{fontSize:"12px",color:"grey",fontWeight:600}} className="cardAction">
                                                        &nbsp;&nbsp;500
                                                    </span>
                                                </Grid>
                                                <Grid item xs={2} className="cardHover">
                                                    <Tooltip title="Retweet" placement="top">
                                                        <i className="fa fa-retweet " aria-hidden="true">
                                                        </i>
                                                    </Tooltip>
                                                    <span style={{fontSize:"12px",color:"grey",fontWeight:600}} className="cardAction">
                                                        &nbsp;&nbsp;500
                                                    </span>
                                                </Grid>
                                                <Grid item xs={2} className="cardHover">
                                                    <Tooltip title="Like" placement="top" placement="top">
                                                        <i className="fa fa-heart-o " aria-hidden="true">
                                                        </i>
                                                    </Tooltip>
                                                    <span style={{fontSize:"12px",color:"grey",fontWeight:600}} className="cardAction">
                                                        &nbsp;&nbsp;500
                                                    </span>
                                                </Grid>
                                                <Grid item xs={2} className="cardHover">
                                                    <Tooltip title="Direct Message" placement="top">
                                                        <i className="fa fa-envelope-o " aria-hidden="true">
                                                    </i>
                                                    </Tooltip>
                                                    <span style={{fontSize:"12px",color:"grey",fontWeight:600}} className="cardAction">
                                                        &nbsp;&nbsp;500
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

export default withStyles(styles)(Feed)