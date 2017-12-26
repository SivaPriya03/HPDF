import React, { Component } from 'react'
import {withStyles} from 'material-ui/styles'
import Grid from 'material-ui/Grid'

import Typography from 'material-ui/Typography'

import 'font-awesome/css/font-awesome.min.css'
const styles ={
    text:{
        fontFamily: "\"Segoe UI\",  \"Arial\", sans-serif",
    }
};

class Customisation extends Component{
    render(){
        const classes = this.props.classes;
        return(
            <div>
            <Grid container>
                <Grid item xs={12} style={{backgroundColor:"#ffffff",height:"4em",display:"flex",alignItems:"center"}}>
                    <Typography type="title" style={{fontFamily: "\"Segoe UI\",  \"Arial\", sans-serif",}}>
                        <b>Search Filters.</b>
                      <a href="/change" style={{paddingLeft:"10px",color:"#1da1f2",fontSize:"small"}}>Show</a>
                   </Typography>
                </Grid>
            </Grid>
            <Grid container style={{marginTop:"20px",backgroundColor:"#ffffff"}} direction="column">
                <Grid item>
                    <Grid container>
                        <Grid item>
                            <Typography type="title" style={{paddingBottom:0 }} className={classes.text}>
                                <b>Related Searches </b> 
                            </Typography>
                        </Grid>
                        
                     </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction="column" style={{cursor:"pointer"}}>
                        <Grid item style={{paddingBottom:0}}>
                            <Typography type="body2" style={{"fontFamily": "\"Segoe UI\",  \"Arial\", sans-serif",color:"rgb(29, 161, 242)",fontWeight:"bold"}} className="hoverLink">
                                gujarat elections
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction="column" style={{cursor:"pointer",paddingBottom:"0px"}}>
                        <Grid item style={{paddingBottom:"0px"}}>
                            <Typography type="body2" style={{fontFamily: "\"Segoe UI\",  \"Arial\", sans-serif",color:"rgb(29, 161, 242)",fontWeight:"bold"}} className="hoverLink">
                                the centre
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item>
                    <Grid container direction="column" style={{cursor:"pointer"}}>
                        <Grid item style={{paddingBottom:0}}>
                            <Typography type="body2" style={{"fontFamily": "\"Segoe UI\",  \"Arial\", sans-serif",color:"rgb(29, 161, 242)",fontWeight:"bold"}} className="hoverLink">
                                gujarat bjp
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction="column" style={{cursor:"pointer"}}>
                        <Grid item style={{paddingBottom:0}}>
                            <Typography type="body2" style={{"fontFamily": "\"Segoe UI\",  \"Arial\", sans-serif",color:"rgb(29, 161, 242)",fontWeight:"bold"}} className="hoverLink">
                                cvoter
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction="column" style={{cursor:"pointer"}}>
                        <Grid item style={{paddingBottom:0}}>
                            <Typography type="body2" style={{"fontFamily": "\"Segoe UI\",  \"Arial\", sans-serif",color:"rgb(29, 161, 242)",fontWeight:"bold"}} className="hoverLink">
                                delhi
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            </div>
        )
    }
}
export default withStyles(styles)(Customisation)