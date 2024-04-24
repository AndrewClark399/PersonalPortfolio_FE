import axios from "axios";
import {useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { PropTypes, checkPropTypes } from "prop-types";

function AddToTeam(props) {

    const params = useParams("");
    const navigate = useNavigate();
const [teamId, setTeamId] = useState();
const [id, setId] = useState();

    
    return (
        <div style={{ backgroundColor: "#4d4d4f", padding: "50px", height: "3500px" }}>
        <div id="form" style={{ backgroundColor: "#4d4d4f", padding: "50px" }}>
        <h2 style={{ backgroundColor: "#4d4d4f", width: "100%", color: "#28ade8" }}>Select the team to Add your Driver to:</h2>


<form className="card"  style={{ width: "50%", position: "center", margin: "20px", backgroundColor:"lightgray", fontFamily: "Aldrich" }}
            onSubmit={e => {

                e.preventDefault()

                // axios.patch("http://localhost:8080/item/update/"+params.id, { itemName, itemPrice, itemQuantity, cart: params.id })
                axios.patch("http://localhost:8081/team/update/"+params.id, {  drivers: { id: props.id }})

                    .then(response => {
                        console.log(response);
                        
                        // setTeamId("");
                        // window.location.reload(DisplayCartContent)
                        //  navigate("/cart/get/"+id)
                        // navigate(-1);
                       

                    })

                    .catch(err => console.error(err))

            }
            }
            >


<br></br><br></br>
            <div style={{marginLeft: "10px"}} label htmlFor="addToTeam" className="form-label"><h2>Add to Team:</h2>
                <input size="50"
                    id="Team"
                    className="form-control border border-dark rounded" style={{ width: "250px", height: "37px", margin: "5px", marginLeft: "20px" }}
                    type="number"
                    
                    value={teamId}
                    onChange={e => setTeamId(e.target.value)}
                    
                />

            </div>


            <button style={{ margin: "5px", marginLeft:"15px", width: "150px", color: "#4d4d4f", backgroundColor:"#28ade8" }} className="btn btn-dark" type="submit"><strong>Submit</strong></button>
<br></br>

        </form >
        
        </div>
        </div>
      );
}

export default AddToTeam ;