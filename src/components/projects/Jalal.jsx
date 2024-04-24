import Accordion from 'react-bootstrap/Accordion';
import jalal from "../../images/image-20231114-143925-5507bda3.jpeg";

function Jalal() {
    return ( 
        <div style={{ backgroundColor: "#4d4d4f", width: "100%", height: "1800px" }}>
            
<aside style={{}}>
    <img style={{width:"18%", marginTop:"1%",}}src={jalal} alt="Jalal Logo" />
    </aside>
    <br></br>
    <h2 style={{color:"white",  marginLeft:"2%"}} ><strong>04/12/2023 - 15/12/2023 Front End Project - Jalal</strong></h2>
        <br></br>   <br></br>
   <div style={{ backgroundColor: "#4d4d4f", width: "90%", height: "1800px", marginLeft:"5%" }}>
     <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header><div >The Task/My Role</div></Accordion.Header>
        <Accordion.Body>
        Within the space of a group project, we were set the challenge of building a real estate agent's website.
         The project's main stakeholder provided us with a Minimum Viable Product to follow.
        </Accordion.Body>
      </Accordion.Item>
      <br></br>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Preperation</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <br></br>
      <Accordion.Item eventKey="2">
        <Accordion.Header><img src={jalal}></img></Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <br></br>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Learning/Takeaways</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
        </div>
     );
}

export default Jalal;