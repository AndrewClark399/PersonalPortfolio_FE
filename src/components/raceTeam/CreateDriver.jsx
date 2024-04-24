import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import stig from "../../images/stig.jpg";

function CreateDriver() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [nationality, setNationality] = useState("");
    const [number, setNumber] = useState(0);
    const [teamId, setTeamId] = useState();
    const params = useParams("");
    const navigate = useNavigate();
    const [team, setTeam] = useState("");

    return ( 
        <div id="form" style={{ backgroundColor: "#4d4d4f", padding: "50px" }}>

            <h2 style={{ backgroundColor: "#4d4d4f", width: "100%", color: "#28ade8" }}>Create your driver below:</h2>
            <aside><img className="text-center" style={{ width: "200%", marginTop:"15px" }} src={stig}></img></aside>
            <form className="card"  style={{ width: "40%", position: "center", margin: "20px", backgroundColor:"lightgray", fontFamily: "Aldrich" }}
                onSubmit={e => {

                    e.preventDefault()
                    


                    axios.post("http://localhost:8081/driver/create", { firstName, lastName, nationality, number})

                        .then(response => {

                            setFirstName("");
                            setLastName("");
                            setNationality("");
                            setNumber("");
                            console.log(response);
                            
  
                            // window.location.reload();

                        })

                        .catch(err => console.error(err)); setTeamId("");

                }
                }
            >

                <div style={{ marginLeft: "20px" }} htmlFor="firstName" className="form-label"><strong>First Name:</strong>
                    <input size="50"
                        id="firstName"
                        className="form-control border border-dark rounded" style={{ width: "250px", height: "37px", margin: "5px", marginLeft: "20px",  borderBlockColor:"blue"}}
                        type="text"
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}

                    />

                </div>

                <div style={{ marginLeft: "20px" }}  htmlFor="lastName" className="form-label"><strong>Last Name:</strong>
                    <input size="50"
                        id="lastName"
                        className="form-control border border-dark rounded" style={{ width: "250px", height: "37px", margin: "5px", marginLeft: "20px" }}
                        type="text"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}

                    />
                </div>


                <div style={{ marginLeft: "20px" }}  htmlFor="nationality" className="form-label"><strong>Nationality:</strong>
                    <input size="50"
                        id="nationality"
                        className="form-control border border-dark rounded" style={{ width: "250px", height: "37px", margin: "5px", marginLeft: "20px" }}
                        type="text"
                        value={nationality}
                        onChange={e => setNationality(e.target.value)}
                        

                        
                    />
                     </div>

<div style={{ marginLeft: "20px" }} htmlFor="number" className="form-label"><strong>Race Number:</strong>
                    <input size="50" 
                        id="number"
                        className="form-control border border-dark rounded" style={{ width: "250px", height: "37px", margin: "5px", marginLeft: "20px" }}
                        type="number"
                        value={number}
                        onChange={e => setNumber(e.target.value)}
                       

                        
                    />

                </div>


                <button id="driverSubmit" style={{ margin: "5px", width: "150px", color: "#4d4d4f", backgroundColor:"#28ade8" }} className="btn btn-dark" type="submit"><strong>Submit</strong></button>




            </form >

            {/* /************    New code******************** */}

            {/* <DisplayDrivers /> */}


            {/* /************    New code******************** */}

        </div >

     );
}

export default CreateDriver;