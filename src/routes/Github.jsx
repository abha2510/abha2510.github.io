
import React from "react";
import GitHubCalendar from "react-github-calendar";
import "./GithubStyle.css"



const Github = () => {
  return (
    <div className="gitmain">
 <div className="a">
         <h1 className="gitname">My Github Stats</h1>
         <div className="c">
    <div className="b">
        <img src="https://github-readme-stats.vercel.app/api?username=abha2510&show_icons=true&locale=en&theme=algolia" alt="one" />
    </div>
    <div  className="c2">
        <img src="https://github-readme-streak-stats.herokuapp.com/?user=abha2510&theme=blue_navy" alt="two" />
    
    </div>
    <div className="cal">
    <GitHubCalendar
                username="abha2510"
                blockSize={20}
                blockMargin={6}
                color={"#7eadfc"}/> 
    </div>
    </div>
 </div>
 {/* <div>
  <img src="https://fanatic.co.uk/wp-content/uploads/2022/02/92812-business-presentation.gif" alt="" />
 </div> */}
    </div>
  );
};

export default Github;