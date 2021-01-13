import React from 'react'
import Header from './Header'
import './links.css'
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Footer from './Footer';


function Links() {
    return (
     
        <div className = "links__main">
            <Header/>
            <div className="icons">
            <Link to={{ pathname: "https://www.instagram.com/creative__programmer" }} target="_blank" >
            <Button>
            <InstagramIcon fontSize = "large"/>
            </Button>
            </Link>

            <Link to = {{pathname: "https://github.com/creativeprogrammer47"}} target = "_blank">
            <Button className ="icnbtn">
                <GitHubIcon fontSize = "large"/>
            </Button>
            </Link>

            <Link to= { { pathname : "mailto: creativeprogrammer47@gmail.com?"}} target = "_blanck">
            <Button>
                <MailOutlineIcon fontSize = "large"/>
            </Button>
            </Link>
            
            <Link className = "fiver"to= { { pathname : "https://www.fiverr.com/saipranay_"}} target = "_blanck">
            
                fiverr.
            
            </Link>
            </div>
            <br/>
            <br/>
            <div className="links">
            <Link to= { { pathname : "https://www.fiverr.com/saipranay_/tutor-and-teach-or-help-you-to-learn-java-c-cpp-python-with-mini-projects?gig_id=188564833&utm_campaign=base_gig_create_share&utm_content=&utm_medium=shared&utm_source=get_url&utm_term=&view=gig" }} target = "_blanck">
            <Button>
                Fundamentals of C, JAVA, C++, PYTHON course 
            </Button>
            </Link>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Footer/>
        </div>
       
    )
}

export default Links
