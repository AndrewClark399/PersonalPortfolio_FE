import CCZone from "../images/CCZone.jpg";
import JalalLogo from "../images/image-20231114-143925-5507bda3.jpeg";
import ThornlessRose from "../images/Logo.png";
import KingsAndQueen from "../images/OIP.jpg";


function Projects() {
    return ( 
        <div style={{ backgroundColor: "#4d4d4f", width: "100%", height: "1800px" }}>
            
            <br></br><br></br>
 <article style={{ backgroundColor: "#4d4d4f", width: "55%", paddingLeft: "40px" }}>
                <h1 style={{ backgroundColor: "#4d4d4f", width: "100%", color: "#28ade8" }}>Recent Projects:</h1>
                <br></br>
                <h4 style={{  color: "white" }}>
                    26/02/2024 - 08/03/2024  Legacy Project
                </h4><div><img className="text-center" style={{ width: "100px" }} src={CCZone} alt="CCZone Logo"></img></div>
                <div style={{  color: "white" }}>This project was to modernize code currently used within a legacy project. In pairs, our task was to bring this into the 21st century and enable scalability for the future. The aim was also for... <a style={{color:"#28ade8"}}href="http://localhost:3000/projects/4"><u>read more</u></a> </div>
<br></br><br></br>
<h4 style={{  color: "white" }}>
                    12/02/2024 - 15/02/2024  Selenium Automated Testing
                </h4><div><img className="text-center" style={{ width: "100px" }} src={ThornlessRose} alt="ThornlessRose Logo"></img></div>
                <div style={{  color: "white" }}>The challenge of this project was to test that rendered webpage elements work as expected using automated testing. This was to be completed in a short amount of time (2 days) and our aim was... <a style={{color:"#28ade8"}} href="http://localhost:3000/projects/3"><u>read more</u></a></div>
                <br></br><br></br>
                <h4 style={{  color: "white" }}>
                    15/01/2024 - 26/01/2024  Back End Project
                </h4><div><img className="text-center" style={{ width: "100px" }} src={KingsAndQueen} alt="KQ Logo" ></img></div>
                <div style={{  color: "white" }}>This project was to create the back end using of an application in Java and Spring Boot to interact with the front end of React and Javascript which was completed by a different project team... <a style={{color:"#28ade8"}} href="http://localhost:3000/projects/2"><u>read more</u></a></div>
                <br></br><br></br>
                <h4 style={{  color: "white" }}>
                    04/12/2023 - 15/12/2023  Front End Project
                </h4><div><img className="text-center" style={{ width: "100px" }} src={JalalLogo} alt="Jalal Logo"></img></div>
                <div style={{  color: "white" }}>
                   Within the space of a group project, we were set the challenge of building a real estate agent's website. 
The project's main stakeholder  provided us with a Minimum Viable Product  to follow.... <a style={{color:"#28ade8"}} href="http://localhost:3000/projects/1"><u>read more</u></a>
</div>
                
            </article>
        </div>
     );
}

export default Projects;