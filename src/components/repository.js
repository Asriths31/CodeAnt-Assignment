import React from "react";
import NavBar from "./navbar";
import refresh from "../assets/homeScreen-assets/refresh.png"
import addRepo from "../assets/homeScreen-assets/addRepo.png"
import sizeLogo from "../assets/homeScreen-assets/sizeLogo.png"
function Repository(){
    console.log("from repoo")
    const[hover,setHover]=React.useState(false)

    let userData=[
        {
            repoName:"design-system",
            language:"React",
            size:"7320 KB",
            lastUpdated:"1 days",
            status:"public"
        },
        {
            repoName:"codeant-ci-app",
            language:"Javascript",
            size:"5871 KB",
            lastUpdated:"2 days",
            status:"public"
        },
        {
            repoName:"analytics-dashboard",
            language:"Python",
            size:"4521 KB",
            lastUpdated:"5 days",
            status:"private"
        },
        {
            repoName:"mobile-app",
            language:"Swift",
            size:"3096 KB",
            lastUpdated:"3 days",
            status:"private"
        },
        {
            repoName:"e-commerce-platform",
            language:"Java",
            size:"6210 KB",
            lastUpdated:"6 days",
            status:"private"
        },
        {
            repoName:"blog-website",
            language:"HTML/CSS",
            size:"1876 KB",
            lastUpdated:"4 days",
            status:"public"
        }
    ]

    let repoDataStyle=(hover?{backgroundColor:"#e9eaeb"}:{backgroundColor:"#ffffff"})

    let dataCard=userData.map(data=>{
       return( 
       <div className="repo-info" style={repoDataStyle}>
         <div className="repo-name">
            <h3>{data.repoName}</h3>
            <div className="status">
                <p>{data.status}</p>
            </div>
         </div>
         <div className="repo-data">
            <div><span>{data.language} </span><div className="dot"></div></div>
            <div><img src={sizeLogo}></img><span>{data.size}</span></div>
            <span>Updated {data.lastUpdated} ago</span>
         </div>
       </div>)
    })
    return(
        <>
        <NavBar setHover={setHover}/>
        <div className="main-body">
            <div className="repo-body">
                 <header>
                    <div className="update-repo">
                        <div className="text-repo">
                           <h3>Repositories</h3>
                           <p>33 total repositories</p>
                        </div>
                        <div className="buttons-repo">
                           <button><img src={refresh} ></img><span>Refresh All</span></button>
                           <button><img src={addRepo}></img><span>Add Repository</span></button>
                        </div>
                    </div>
                    <div className="search-repo">
                       <input placeholder="Search Repositories"></input>
                    </div>
                 </header>
                 <div className="user-repos">
                   {dataCard}
                 </div>
    
            </div>

        </div>
        </>
    )
}
export default Repository