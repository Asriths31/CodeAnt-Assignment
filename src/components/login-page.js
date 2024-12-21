import React from "react";
import transparentLogo from "../assets/login-assets/transparent-logo.png"
import logo from "../assets/login-assets/logo.png"
import githubLogo from "../assets/login-assets/githubLogo.png"
import gitlabLogo from "../assets/login-assets/gitlabLogo.png"
import bitbucketLogo from "../assets/login-assets/bitbucketLogo.png"
import azureDevopsLogo from "../assets/login-assets/azureDevopsLogo.png"
import ssoLogo from "../assets/login-assets/ssoLogo.png"
import piechart from "../assets/login-assets/piechart.png"
import arrowUp from "../assets/login-assets/arrow-up.png"
import { Link } from "react-router-dom";
function LoginPage(){
const [toggle,setToggle]=React.useState(true)
let style={
    backgroundColor: "#1570EF",
    color:"#fafafa"
}
let style1={
    backgroundColor: "rgb(238, 235, 235)"
    }   
function handleClick(){
    setToggle(true)
}
function handleClick1(){
    setToggle(false)
}

let loginOptions=toggle?([
{name:"Sign in with github",
logo:{githubLogo}
},
{
    name:"Sign in with Bitbucket",
    logo:{bitbucketLogo}
},
{
    name:"Sign in with Azure Devops",
    logo:{azureDevopsLogo}
},
{
    name:'Sign in with GitLab',
    logo:{gitlabLogo}
}

]):([
    {
        name:'Self Hosted GitLab',
        logo:{gitlabLogo}
    },
    {
        name:"Sign in with SSO",
        logo:{ssoLogo}
    }
])

let options=loginOptions.map(login=>{
    // console.log(login)
    return(
    <Link to="/repo"><div className="loginButton">
        <img src={Object.values(login.logo)[0]} alt={`${login.logo} logo`}></img>
        <p>{login.name}</p>

    </div>
    </Link>
    )
})

    return(
<div className="login-page">
    <div className="sidebar">
        <img src={transparentLogo}></img>
        <div className="badcode-block">
            <div className="heading">
                   <img src={logo}></img> <h4>AI to Detect & Autofix Bad Code</h4>
            </div>
            <div className="user-data">
                <div className="data">
                        <h3>30+</h3>
                        <p>Language Support</p>
                </div> 
                <div className="data">
                        <h3>10K+</h3>
                        <p>Developers</p>
                </div>
                <div className="data">
                        <h3>100K+</h3>
                        <p>Hours Saved</p>
                </div>
            </div>
        </div>
       
        <div className="issues-fixed">
            <div className="this-week">
                <div className="pie">   
                   <img src={piechart}></img>
                </div>
                <div className="arrow">
                    <div><img src={arrowUp}></img><h3>14%</h3></div>
                    <p>This week</p>
                </div>
              
            </div>
                    <div className="issues">
                        <p>Issues Fixed</p>
                        <h2>500K+</h2>
                    </div>
        </div>
    </div>
    <div className="sign-in">
        <div className="login-block">
            <div className="heading">
                <div>
                    <img src={logo}></img><span> CodeAnt AI</span>
                </div>
                <p>Welcome To CodeAnt AI</p>
                
                <div className="sign-in-toggle">
                <button style={toggle?style:style1} onClick={handleClick}>SAAS</button>
                <button style={toggle?style1:style} onClick={handleClick1}>Self Hosted</button>
                </div>
            </div>
            <div className="login-options">

               {options}
            </div>

        </div>

    </div>
    <span className="privacy-statement">By signing up you agree to the <strong>Privacy Policy</strong></span>
</div>
    )
}
export default LoginPage