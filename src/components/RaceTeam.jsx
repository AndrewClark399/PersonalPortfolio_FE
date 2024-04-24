import CreateDriver from "./raceTeam/CreateDriver";
import CreateTeam from "./raceTeam/CreateTeam";
import DisplayDrivers from "./raceTeam/DisplayDrivers";
import DisplayTeams from "./raceTeam/DisplayTeams";
import {useState} from "react";




function RaceTeam() {

    const [showComponent, setShowComponent] = useState(false);
    const [showComponent1, setShowComponent1] = useState(false);
    const [showComponent2, setShowComponent2] = useState(false);
    const [showComponent3, setShowComponent3] = useState(false);

    const handleClick = () => {setShowComponent(true);setShowComponent1(false);setShowComponent2(false);setShowComponent3(false);};
    const handleClick1 = () => {setShowComponent(false);setShowComponent1(true);setShowComponent2(false);setShowComponent3(false);};
    const handleClick2 = () => {setShowComponent(false);setShowComponent1(false);setShowComponent2(true);setShowComponent3(false);};
    const handleClick3 = () => {setShowComponent(false);setShowComponent1(false);setShowComponent2(false);setShowComponent3(true);};
    return ( 
        <div style={{ backgroundColor: "#4d4d4f", padding: "50px", height: "3500px" }}>

<button type="button" className="btn btn-dark btn-lg" onClick={handleClick} style={{ margin: "10px", color: "lightgray", height:"50px", width:"220px", backgroundColor:"#28ade8" }}>
              <strong> Create a Driver</strong></button>
              
              <button type="button" className="btn btn-dark btn-lg" onClick={handleClick1} style={{ margin: "10px", color: "lightgray", height:"50px", width:"220px", backgroundColor:"#28ade8" }}>
              <strong> Create a Team</strong></button>
              <button type="button" className="btn btn-dark btn-lg" onClick={handleClick2} style={{ margin: "10px", color: "lightgray", height:"50px", width:"220px", backgroundColor:"#28ade8" }}>
              <strong> Show Drivers</strong></button>
              <button type="button" className="btn btn-dark btn-lg" onClick={handleClick3} style={{ margin: "10px", color: "lightgray", height:"50px", width:"220px", backgroundColor:"#28ade8" }}>
              <strong> Show Teams</strong></button>
              {/* <CreateDriver /> */}
              {showComponent && <CreateDriver />}
              {showComponent2 && <DisplayDrivers />}
             {showComponent1 && <CreateTeam />}
             {showComponent3 && <DisplayTeams />}
        </div>
     );
}

export default RaceTeam;