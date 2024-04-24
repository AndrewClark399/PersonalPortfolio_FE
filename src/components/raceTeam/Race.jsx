import axios from "axios";
import {useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import bronze from "../../images/bronze.png";
import silver from "../../images/silver.png";
import gold from "../../images/gold.jpg";
import vroom from "../../Audio/car-acceleration-26997.mp3";
import useSound from "use-sound";


function Race() {

    const params = useParams("");
    const navigate = useNavigate();
const [teamId, setTeamId] = useState();
const [id, setId] = useState();
const [num, setNum] = useState(0);
function randomNumberInRange(min, max) {
    // 👇️ Get the number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }



  const handleClick = () => {
    setNum(randomNumberInRange(1, 5));
    // const [play] = useSound(vroom);
  }

  
  const trophy = () => {
    if (num === 1){
        return <img style={{width:"100px"}}src={gold}/>}
        else if (num === 2){
        return <img style={{width:"100px"}}src={silver}/>}
      else if (num === 3){
        return <img style={{width:"100px"}}src={bronze}/>}
        else { return "Finished off the podium"};
  }
  




    
    return (
        <div style={{ backgroundColor: "#4d4d4f", padding: "50px", height: "3500px" }}>
        <div id="form" style={{ backgroundColor: "#4d4d4f", padding: "50px" }}>
        <h2 style={{ backgroundColor: "#4d4d4f", width: "100%", color: "#28ade8" }}>Click below to send your driver into the race!</h2>
        <button style={{ margin: "5px", marginLeft:"15px", width: "150px", color: "#4d4d4f", backgroundColor:"#28ade8" }} className="btn btn-dark" onClick={handleClick}><strong>Race</strong></button>




<br></br><br></br>
            <div style={{marginLeft: "10px"}} label htmlFor="Track" className="form-label"><h2>Location:</h2>

                <input size="50"
                    id="Team"
                    className="form-control border border-dark rounded" style={{ width: "250px", height: "37px", margin: "5px", marginLeft: "20px" }}
                    type="number"
                    
                    value={teamId}
                    onChange={e => setTeamId(e.target.value)}
                    
                />

            </div>


            <button style={{ margin: "5px", marginLeft:"15px", width: "150px", color: "#4d4d4f", backgroundColor:"#28ade8" }} className="btn btn-dark" type="submit"><strong>Generate New Location</strong></button>
<br></br>

        
<h2>Finishing position:
    
     {num} /20</h2>{trophy()}
     

<div>
    
</div>
        </div>

        <div>
     

    </div>
        </div>


      );
}


export default Race ;