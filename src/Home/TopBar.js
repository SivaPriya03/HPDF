import React , {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar'
import Grid from 'material-ui/Grid'
import Avatar from 'material-ui/Avatar'
import Button from 'material-ui/Button'
import 'font-awesome/css/font-awesome.min.css'
import Tabs, { Tab } from 'material-ui/Tabs';
import {blue} from 'material-ui/colors';
import {Redirect} from 'react-router-dom'
import {MuiThemeProvider,createMuiTheme} from 'material-ui/styles';
import  Home from 'material-ui-icons/Home';
import  Notifications from 'material-ui-icons/Notifications';
import  Message from 'material-ui-icons/Message';
import  FlashOn from 'material-ui-icons/FlashOn';
import Profile from '../Resources/Profile.jpg'
import Popover from 'material-ui/Popover'
import Typography from 'material-ui/Typography'
const theme=createMuiTheme({
    palette:{
        primary:blue,
    }
});
const styles=theme => ({
    paper: {
        padding: theme.spacing.unit,
    },
    popover: {
       pointerEvents: 'none',
    },
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
        fontFamily: "\"Segoe UI\",  \"Arial\", sans-serif",
        fontWeight:"bold",
        height:"47px",
        minWidth:0,
        textTransform:"capitalize",
        paddingBottom:"0px",
    },
    
});
const primary = blue[500];

class Top extends Component{
    constructor(props){
        super(props);
        this.state ={
            value: 0,
            textSearch:'',
            redirect:false,
            anchorEl:null,
        };
        this.onTabChange = this.onTabChange.bind(this);
        this.onSearch = this.onSearch.bind(this);
    };

    handlePopoverClose = () => {
        this.setState({ anchorEl: null });
    };
    handlePopoverOpen = (event) => 
    {
            this.setState({ anchorEl: event.target });
    };

    onSearch = (event)=>{
          console.log(this.state.textSearch);
        let code = event.keyCode || event.which;
        if(code===13){
            this.setState({redirect:true});
    
        }
    };
    onTabChange = (event, value) => {
          console.log(this.state.textSearch);
           
        this.setState({ value });
    };
    updateInputVal(evt){

        this.setState({
            textSearch:evt.target.value,

        })
    }

    render(){
        if(this.state.redirect){
            return <Redirect push to={{
                pathname:"/search",
                search:'?search='+this.state.textSearch,
                state:{string:this.state.textSearch}
            }}/>;
        }
        const classes = this.props.classes;
        return(
            <MuiThemeProvider theme={theme}>
            <div>

                <AppBar position="fixed" style={{backgroundColor:"#ffffff"}}>
                    <Grid container direction="row" spacing={0}>
                        <Grid item xs={1}/>
                        
                        <Grid item xs={4}>
                            <Tabs  value={this.state.value} textColor={"primary"} indicatorColor={primary} fullWidth={false} onChange={this.onTabChange}>
                                <Tab icon={<Home />} label="Home" style={{paddingTop:"2px",textDecoration:"none"}} className={classes.tabElement} href="/" />
                                <Tab icon={<FlashOn />} label="Moments" className={classes.tabElement} />
                                <Tab icon={<Notifications />} label="Notifications" className={classes.tabElement}/>
                                <Tab icon={<Message />} label="Messages" className={classes.tabElement}/>
                            </Tabs>
                        </Grid>
                        <Grid item xs={3} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <i className="fa fa-twitter" style={{color:"#1da1f2",fontSize:"22px"}}>
                            </i>
                        </Grid>
                        <Grid item xs={2} className="searchMe" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                               <input type="text" value={this.state.textSearch} className="navSearch" placeholder="Search Twitter" spellCheck="false" autoComplete="false" contentEditable="true"
                                        onFocus={this.handlePopoverOpen}
                                        onBlur={this.handlePopoverClose}
                                        onKeyPress={this.onSearch} 
                                        onChange={evt=>this.updateInputVal(evt)}
                                />
                               <Popover
                                      className={classes.popover}
                                      classes={{
                                        paper: classes.paper,
                                      }}
                                      open={!!(this.state.anchorEl)}
                                      anchorEl={this.state.anchorEl}
                                      anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                      }}
                                      transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                      }}
                                      onClose={this.handlePopoverClose}
                                      style={{width:"100%"}}
                                    >
                                    <Typography> Please Type <b> aadhar </b> for relevant result</Typography>
                                </Popover>
                             <span className="fa fa-search" aria-hidden="true">
                            </span>
                        </Grid>
                        <Grid item  xs={1} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <Avatar src={Profile}/>
                                
                        </Grid>
                        <Grid item style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <Button  color="primary" style={{margin: theme.spacing.unit,}} className={classes.tweetBtn}>
                                Tweet
                            </Button>
                        </Grid>
 
                    </Grid>
                </AppBar>

            </div>
            </MuiThemeProvider>
        )
    }
}

export default withStyles(styles)(Top) 