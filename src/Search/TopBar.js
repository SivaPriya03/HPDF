import React , {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar'
import Grid from 'material-ui/Grid'
import Avatar from 'material-ui/Avatar'
import Button from 'material-ui/Button'
import 'font-awesome/css/font-awesome.min.css'
import Tabs, { Tab } from 'material-ui/Tabs';
import {blue} from 'material-ui/colors';
import {MuiThemeProvider,createMuiTheme} from 'material-ui/styles';
import  Home from 'material-ui-icons/Home';
import  Notifications from 'material-ui-icons/Notifications';
import  Message from 'material-ui-icons/Message';
import  FlashOn from 'material-ui-icons/FlashOn';
import Profile from '../Resources/Profile.jpg'
import Typography from 'material-ui/Typography'
const theme=createMuiTheme({
    palette:{
        primary:blue,
    }
});
const styles={
    tweetBtn:{
        backgroundColor: "#4AB3F4",
        color:"#ffffff",
        padding: 0,
        height: "34px",
        border: "1px solid",
        borderRadius: "20px",
        textTransform:"none",
        fontSize:"13px",
        fontFamily: "\"Segoe UI\",  \"Arial\", sans-serif",
        fontWeight:"900",
        '&:hover':{
            backgroundColor:"#2196f3",
        },
    },
    tabElement:{
        paddingTop:"2px",
        fontFamily: "\"Segoe UI\",  \"Arial\", sans-serif",
        fontWeight:"bold",
        height:"50px",
        minWidth:0,
        textTransform:"capitalize",
        paddingBottom:"0px",

    },
    text:{
        fontFamily: "\"Segoe UI\",  \"Arial\", sans-serif",
        color:"#fff",
    },
    
};
const primary = blue[500];
class TopBar extends Component{
    constructor(props){
        super(props);
        this.state ={
            value: 0,
            subValue:0,
            searchString:props.searchQuery,
            newStr:props.searchQuery,
            redirect:false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSub = this.handleSub.bind(this);
        
    }
    handleChange = (event, value,subValue) => {
        this.setState({ value });
    };
    handleSub = (event,subValue) => {
        this.setState({ subValue });
    };
    render(){
        const classes = this.props.classes;
        return(
            <MuiThemeProvider theme={theme}>
            <div>
               <AppBar position="fixed" style={{backgroundColor:"#ffffff"}}>
                    <Grid container direction="row" spacing={0}>
                        <Grid item xs={1}/>
                        
                        <Grid item xs={4}>
                            <Tabs  value={this.state.value} textColor={"primary"} style={{}} indicatorColor={primary} fullWidth={false} onChange={this.handleChange}>
                                <Tab icon={<Home />} label="Home" style={{paddingTop:"2px",textDecoration:"none"}} className={classes.tabElement} href="/" />
                                <Tab icon={<FlashOn />} label="Moments" className={classes.tabElement} />
                                <Tab icon={<Notifications />} label="Notifications" className={classes.tabElement} />
                                <Tab icon={<Message />} label="Messages" className={classes.tabElement}/>
                            </Tabs>
                        </Grid>
                        <Grid item xs={3} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <i className="fa fa-twitter" style={{color:"#1da1f2",fontSize:"22px"}}>
                            </i>
                        </Grid>
                        <Grid item xs={2} className="searchMe" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                               <input type="text" value={this.props.searchQuery} className="navSearch" placeholder="Search Twitter" spellCheck="false" autoComplete="false" contentEditable="true"/>
                                
                             <span className="fa fa-search" aria-hidden="true">
                            </span>
                        </Grid>
                        <Grid item  xs={1} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <Avatar src={Profile}/>
                                
                        </Grid>
                        <Grid item style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <Button  color="primary" style={{ margin: theme.spacing.unit,}} className={classes.tweetBtn}>
                                Tweet
                            </Button>
                        </Grid>
 
                    </Grid>
                </AppBar>
                <Grid container style={{height:"5em",backgroundColor:"#1DA1F2",marginTop:"45px"}}>
                    <Grid item xs={1}></Grid>

                    <Grid item xs={10}> 
                        <Grid container direction="column" style={{cursor:"pointer",paddingTop:"5px"}}>
                            <Grid item style={{display:"flex",alignItems:"center",height:"3em"}}>
                                <Typography type="headline" style={{ color:"#fff","fontFamily": "\"Segoe UI\",  \"Arial\", sans-serif",fontWeight:"900"}}>
                                    {this.props.searchQuery}
                                </Typography>
                            </Grid>
                            <Grid item style={{paddingTop:0}}>
                                <Typography type="caption" className={classes.text}>
                                    Including results for <u><i><b> aadar </b></i></u>.
                                    Search only for <u> <b>{this.props.searchQuery} </b></u> instead.
                               </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container style={{backgroundColor:"#ffffff",paddingBottom:0}}>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={10} style={{display:"flex",alignItems:"center",paddingBottom:0}}>
                        <Tabs value={this.state.subValue} textColor={"primary"} indicatorColor={primary} fullWidth={false} onChange={this.handleSub}>
                            <Tab label="Top" style={{minWidth:0}}className={classes.tabElement}/>
                            <Tab label="Latest" style={{minWidth:0}} className={classes.tabElement}/>
                            <Tab label="People" style={{minWidth:0}} className={classes.tabElement}/>
                            <Tab label="Photos" style={{minWidth:0}} className={classes.tabElement}/>
                            <Tab label="Videos" style={{minWidth:0}} className={classes.tabElement}/>
                            <Tab label="News" style={{minWidth:0}} className={classes.tabElement}/>
                            <Tab label="Broadcasts" style={{minWidth:0}} className={classes.tabElement}/>
                        </Tabs>
                    </Grid>
                </Grid>
            </div>
            </MuiThemeProvider>
            
        )
    }
}

export default withStyles(styles)(TopBar)