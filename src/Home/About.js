import React, { Component } from 'react'
import {withStyles} from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Tooltip from 'material-ui/Tooltip';
import Typography from 'material-ui/Typography'
import 'font-awesome/css/font-awesome.min.css'
const styles ={
    text:{
      fontFamily: "\"Segoe UI\",  \"Arial\", sans-serif",
        
    }
};
class About extends Component{
    render(){
        const classes=this.props.classes;
    
        return(
            <Grid container style={{backgroundColor:"#ffffff"}} direction="column">
                <Grid item xs={12} style={{padding:0}}>
                    <Typography type="caption" style={{lineHeight:1.6}} className={classes.text}>
                        <ul style={{listStyle:"none"}}>
                            <li >© 2017 Twitter</li>
                            <li className="aboutLinks">&nbsp;About</li>
                            <li className="aboutLinks">&nbsp;Help Center</li>
                            <li className="aboutLinks">&nbsp;Terms</li>
                            <li className="aboutLinks">&nbsp;Privacy Policy</li>
                            <li className="aboutLinks">&nbsp;Cookies</li>
                            <li className="aboutLinks">&nbsp;Ads info</li>
                            <li className="aboutLinks">&nbsp;Brand</li>
                            <li className="aboutLinks">&nbsp;Blog</li>
                            <li className="aboutLinks">&nbsp;Status</li>
                            <li className="aboutLinks">&nbsp;Apps</li>
                            <li className="aboutLinks">&nbsp;Jobs</li>
                            <li className="aboutLinks">&nbsp;Marketing</li>
                            <li className="aboutLinks">&nbsp;Businesses</li>
                            <li className="aboutLinks">&nbsp;Developers</li>
                        </ul>
                    </Typography>
                </Grid>
                <Grid item style={{padding:"1.250em"}}>
                    <Typography type="caption" className="advertiseLink" style={{fontFamily: "\"Segoe UI\",  \"Arial\", sans-serif",color:"#1da1f2"}}>
                        <Tooltip title="Advertise with Twitter" placement="top" className={classes.text}>
                                 <i className="fa fa-external-link"/>
                        </Tooltip>
                       &nbsp;Advertise with Twitter
                    </Typography>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(About)