import React, { Component } from 'react'
import {withStyles} from 'material-ui/styles'
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
            <Typography type="caption" className={classes.text}>
                        <ul style={{listStyle:"none",paddingLeft:0}}>
                            <li >© 2017 Twitter</li>
                            <li className="aboutLinks">&nbsp;About</li>
                            <li className="aboutLinks">&nbsp;Help Center</li>
                            <li className="aboutLinks">&nbsp;Terms</li>
                            <li className="aboutLinks">&nbsp;Privacy Policy</li>
                            <li className="aboutLinks">&nbsp;Cookies</li>
                            <li className="aboutLinks">&nbsp;Ads info</li>
                        </ul>
                    </Typography>
                
        )
    }
}

export default withStyles(styles)(About)