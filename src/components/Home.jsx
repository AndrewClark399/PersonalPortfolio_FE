import Logo from "./In.png";
import Logo2 from "../images/R.png";
import Logo3 from "../images/R (1).png";
import CCZone from "../images/CCZone.jpg";
import Jalal from "../images/image-20231114-143925-5507bda3.jpeg";
import ThornlessRose from "../images/Logo.png";
import KingsAndQueen from "../images/OIP.jpg";
import BigCart from "../images/BigCart.png";

function Home() {
    return (
        <div style={{ backgroundColor: "#4d4d4f", width: "100%", height: "1800px" }}>
            <br></br><br></br>
            <div style={{ backgroundColor: "#4d4d4f", width: "100%", color: "white", textAlign: "center", fontSize: "40px", alignItems: "center", paddingLeft: "280px", paddingRight: "280px" }}><i>
                "Hi, I'm Andrew. I'm a junior software engineer and I help drive LBG forward by improving their digital presence through agile methodologies and the tools used within change." Click <a href="http://localhost:3000/">here to view my Pen Portrait</a>.
            </i>
            </div>
            <br></br><br></br><br></br><br></br>
            <aside style={{position:"sticky"}}id="contact">
               <strong> Connect with me:</strong>
                <br></br>
                <br></br>
                <div><img className="text-center" style={{ width: "40px" }} src={Logo} alt="L Logo"></img> LinkedIn: <a href="https://www.linkedin.com/in/andrew-clark-a8a9b3a2/">Andrew Clark</a></div>
                <div><img className="text-center" style={{ width: "40px" }} src={Logo2} alt="G Logo"></img> GitHub: <a href="https://github.com/AndrewClark399">Andrew Clark</a></div>
                <div><img className="text-center" style={{ width: "40px" }} src={Logo3}alt="E Logo"></img> Email: <a href="mailto:andy396clark@hotmail.co.uk">Andrew Clark</a></div>
            </aside>
            <article style={{ backgroundColor: "#4d4d4f", width: "55%", paddingLeft: "40px" }}>
                <h1 style={{ backgroundColor: "#4d4d4f", width: "100%", color: "#28ade8" }}>Recent Projects:</h1>
                <br></br>
                <h4 style={{  color: "white" }}>
                    <u>18/03/2024 - 28/03/2024  Open Source Project</u>
                </h4><div><img className="img-thumbnail" style={{ width: "100px" }} src={BigCart} alt="Big Cart Logo"></img></div>
                <div style={{  color: "white" }}>This project was to modernize code currently used within a legacy project. In pairs, our task was to bring this into the 21st century and enable scalability for the future. The aim was also for this to be a working code base that can be added to with further iterations of the webpage. Our goal was to complete this using JavaScript and React within the front end and linking this to a MySQL database with Java and Springboot.</div>
<br></br><br></br>
                <h4 style={{  color: "white" }}>
                    <u>26/02/2024 - 08/03/2024  Legacy Project</u>
                </h4><div><img className="img-thumbnail" style={{ width: "100px" }} src={CCZone} alt="CCZ Logo"></img></div>
                <div style={{  color: "white" }}>This project was to modernize code currently used within a legacy project. In pairs, our task was to bring this into the 21st century and enable scalability for the future. The aim was also for this to be a working code base that can be added to with further iterations of the webpage. Our goal was to complete this using JavaScript and React within the front end and linking this to a MySQL database with Java and Springboot.</div>
<br></br><br></br>
<h4 style={{  color: "white" }}>
<u>12/02/2024 - 15/02/2024  Selenium Automated Testing</u>
                </h4><div><img className="img-thumbnail" style={{ width: "100px" }} src={ThornlessRose}alt="TR Logo"></img></div>
                <div style={{  color: "white" }}>The challenge of this project was to test that rendered webpage elements work as expected using automated testing. This was to be completed in a short amount of time (2 days) and our aim was to integrate Selenium via Eclipse to complete working tests on around 80% of the methods or functions included.</div>
                <br></br><br></br>
                <h4 style={{  color: "white" }}>
                <u>15/01/2024 - 26/01/2024  Back End Project</u>
                </h4><div><img className="img-thumbnail" style={{ width: "100px" }} src={KingsAndQueen}alt="KQ Logo"></img></div>
                <div style={{  color: "white" }}>This project was to create the back end using of an application in Java and Spring Boot to interact with the front end of React and Javascript which was completed by a different project team previously.</div>
                <br></br><br></br>
                <h4 style={{  color: "white" }}>
                <u>04/12/2023 - 15/12/2023  Front End Project</u>
                </h4><div><img className="img-thumbnail" style={{ width: "100px" }} src={Jalal}alt="Jalal Logo"></img></div>
                <div style={{  color: "white" }}>
                   Within the space of a group project, we were set the challenge of building a real estate agent's website. 
The project's main stakeholder  provided us with a Minimum Viable Product  to follow.
</div>
                
            </article>


        </div>
    );
}

export default Home;