import React, { Component } from 'react'
import {withStyles} from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'

const styles ={
    text:{
        fontFamily: "\"Segoe UI\",  \"Arial\", sans-serif",
    },
};
/*const theme=createMuiTheme({
    "typography":
    {
        "fontFamily": "\"Segoe UI\",  \"Arial\", sans-serif",
        "subheading":{
            "fontFamily": "\"Segoe UI\",  \"Arial\", sans-serif",
        },
        "body2":{
            "fontFamily": "\"Segoe UI\",  \"Arial\", sans-serif",
        },
        "caption":{
            "fontFamily": "\"Segoe UI\",  \"Arial\", sans-serif",
        },
    }
});*/
class Trends extends Component{
    render(){
        const classes = this.props.classes;
        return(
            <Grid container style={{backgroundColor:"#ffffff"}} direction="column">
                <Grid item>
                    <Grid container>
                        <Grid item>
                            <Typography type="subheading" className={classes.text}>
                                <b>Trends for you . </b> 
                                <a href="/change" style={{color:"#1da1f2",fontSize:"x-small"}}>Change</a>
                            </Typography>
                        </Grid>
                        
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction="column" style={{cursor:"pointer"}}>
                        <Grid item style={{paddingBottom:0}}>
                            <Typography type="body2" style={{"fontFamily": "\"Segoe UI\",  \"Arial\", sans-serif",color:"rgb(29, 161, 242)",fontWeight:600}} className="hoverLink">
                                #VirushkaWEDDING
                            </Typography>
                        </Grid>
                        <Grid item style={{paddingTop:0}}>
                            <Typography type="caption" className={classes.text}>
                                @behindwoods tweeted about this
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction="column" style={{cursor:"pointer"}}>
                        <Grid item style={{paddingBottom:0}}>
                            <Typography type="body2" style={{"fontFamily": "\"Segoe UI\",  \"Arial\", sans-serif",color:"rgb(29, 161, 242)",fontWeight:600}} className="hoverLink">
                                #Maayavan
                            </Typography>
                        </Grid>
                        <Grid item style={{paddingTop:0}}>
                            <Typography type="caption" className={classes.text}>
                                @behindwoods and @onlykollywood tweeted about this
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction="column" style={{cursor:"pointer"}}>
                        <Grid item style={{paddingBottom:0}}>
                            <Typography type="body2" style={{"fontFamily": "\"Segoe UI\",  \"Arial\", sans-serif",color:"rgb(29, 161, 242)",fontWeight:600}} className="hoverLink">
                                #Kaala
                            </Typography>
                        </Grid>
                        <Grid item style={{paddingTop:0}}>
                            <Typography type="caption" className={classes.text}>
                                @dhanushkraja tweeted about this
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction="column" style={{cursor:"pointer"}}>
                        <Grid item style={{paddingBottom:0}}>
                            <Typography type="body2" style={{"fontFamily": "\"Segoe UI\",  \"Arial\", sans-serif",color:"rgb(29, 161, 242)",fontWeight:600}} className="hoverLink">
                                #AvengersInfinityWar
                            </Typography>
                        </Grid>
                        <Grid item style={{paddingTop:0}}>
                            <Typography type="caption" className={classes.text}>
                                @marvel tweeted about this
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction="column" style={{cursor:"pointer"}}>
                        <Grid item style={{paddingBottom:0}}>
                            <Typography type="body2" style={{"fontFamily": "\"Segoe UI\",  \"Arial\", sans-serif",color:"rgb(29, 161, 242)",fontWeight:600}} className="hoverLink">
                                #Rampage
                            </Typography>
                        </Grid>
                        <Grid item style={{paddingTop:0}}>
                            <Typography type="caption" className={classes.text}>
                                @warnerbros tweeted about this
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction="column" style={{cursor:"pointer"}}>
                        <Grid item style={{paddingBottom:0}}>
                            <Typography type="body2" style={{"fontFamily": "\"Segoe UI\",  \"Arial\", sans-serif",color:"rgb(29, 161, 242)",fontWeight:600}} className="hoverLink">
                                #Nun
                            </Typography>
                        </Grid>
                        <Grid item style={{paddingTop:0}}>
                            <Typography type="caption" className={classes.text}>
                                @Hollywood.Media tweeted about this
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction="column" style={{cursor:"pointer"}}>
                        <Grid item style={{paddingBottom:0}}>
                            <Typography type="body2" style={{"fontFamily": "\"Segoe UI\",  \"Arial\", sans-serif",color:"rgb(29, 161, 242)",fontWeight:600}} className="hoverLink">
                                #JurassicWorld2Trailer
                            </Typography>
                        </Grid>
                        <Grid item style={{paddingTop:0}}>
                            <Typography type="caption" className={classes.text}>
                                @warnerbros tweeted about this
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                
            </Grid>
        )
    }
}
export default withStyles(styles)(Trends)