import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import TeamStructure from "./TeamStructure";

function DisplayTeams() { 
   
        const params = useParams("");
        const teamList = []
        const [teams, setTeams] = useState([]);

        const navigate = useNavigate();

    
        function getTeams() {
            axios.get("http://localhost:8081/team/get")
                .then((response) => {
                    setTeams(response.data)
                    
                    console.log("response.data:", response.data);
                })
                .catch(err => console.error(err))
    
          
        };
        // setCartId(params.id);
        // <ItemStructure cart={cartId}/>
        
    
        for (const team of teams) {
            teamList.push(<TeamStructure
                id={team.id}
                name={team.name}
                colour={team.colour}
                carBrand={team.carBrand}

               
    
            />
    
            )
    
        }
       
    
    
        useEffect(() => { getTeams() }, [])
        return (
            <div>
    
                <div id="form" style={{ backgroundColor: "lightgray", width: "100%" }}>
                    <br></br>
                    <div style={{backgroundColor:"white", marginLeft:"10px", marginRight:"10px"}}>
                    </div>
                    <br></br><br></br><br></br>
                    <div >

                    </div>
                    <div style={{marginLeft:"10px"}}>
                    {teamList}
                    </div>
                    <div>
                        <br></br>

                    </div>
                </div>
    
            </div >
     );
}

export default DisplayTeams;