import React from "react";
import {Routes,Route,BrowserRouter,Link} from "react-router-dom"
import cloudSecurityLogo from "../assets/homeScreen-assets/cloudSecurityLogo.png"
import codeReviewLogo from "../assets/homeScreen-assets/codeReviewLogo.png"
import howToUseLogo from "../assets/homeScreen-assets/howToUseLogo.png"
import repoLogo from "../assets/homeScreen-assets/repoLogo.png"
import settingsLogo from "../assets/homeScreen-assets/settingsLogo.png"
import logo from "../assets/login-assets/logo.png"
import arrowDown from "../assets/homeScreen-assets/arrowDown.png"
import logOutLogo from "../assets/homeScreen-assets/logoutLogo.png"
import supportLogo from "../assets/homeScreen-assets/supportLogo.png"
import menuBtn from "../assets/homeScreen-assets/menuLogo.png"
import closeBtn from "../assets/homeScreen-assets/menuClose.png"
function NavBar(props){
   const[menuclose,setMenuclose]=React.useState(false)
   const[ navStyle,setNavstyle]=React.useState({
    height:"70px"
 })
    let style={
        backgroundColor:"#1570ef",
        color:"#fafafa",

     } 
      let style1={
        // backgroundColor:"#1570ef",
        // color:"black",

     }
     function handleMenu(){
        setMenuclose(true)
        props.setHover(true)
         setNavstyle({
           height:"auto"
        })
    } 
  function handleClose(){
    setMenuclose(false)
    props.setHover(false)
    setNavstyle({
        height:"70px"
     })
    }
    return(
        
        <navbar className="navbar" style={navStyle}>
            
            <div className="header">
                <div>
                <img src={logo}></img>
                <p>CodeAnt AI</p>
                </div>
                <div className="menu-btn">
                     {menuclose?<img src={closeBtn} onClick={handleClose} style={{height:"30px"}}></img>:<img src={menuBtn} onClick={handleMenu}></img>}
                </div>
            </div>
            <div>
               <input defaultValue="UtkarshDhairyaPanwar"></input>
               <img src={arrowDown} className="arrow-down"></img>
            </div>
            <ul>
               <li className="nav-items" style={window.location.pathname==="/repo"?style:style1}>
                    <img src={repoLogo} style={{height:"20px"}}></img>
                    <p>Respositories</p>
                </li> 
                <li className="nav-items" style={window.location.pathname==="/codeReview"?style:style1}>
                <img src={codeReviewLogo}></img>
                    <p>Ai Code Review</p>
                </li> 
                <li className="nav-items" style={window.location.pathname==="/cloud"?style:style1}>
                <img src={cloudSecurityLogo} style={{height:"15px",width:"20px",marginRight:"24px"}}></img>
                    <p>Cloud Security</p>
                </li> 
                <li className="nav-items" style={window.location.pathname==="/howToUse"?style:style1}>
                <img src={howToUseLogo} style={{width:"17px",height:"20px",marginRight:"27px"}}></img>
                    <p>How To Use</p>
                </li>
                <li className="nav-items" style={window.location.pathname==="/settings"?style:style1}>
                <img src={settingsLogo} style={{width:"30px",height:"30px",marginRight:"14px"}}></img>
                    <p>Settings</p>
                </li>
            </ul>
            <footer>
               <div>
                <img src={supportLogo}></img>
                <p>Support</p>
               </div>
               <div>
                <img  src={logOutLogo}></img>
                <Link to="/"><p>Logout</p></Link>
               </div>
            </footer>
        </navbar>
          
    )
}

export default NavBar