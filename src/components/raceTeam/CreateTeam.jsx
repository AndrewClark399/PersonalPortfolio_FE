import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import car from "../../images/racecar.jpg";

function CreateDriver() {

    const [name, setName] = useState("");
    const [colour, setColour] = useState("");
    const [carBrand, setCarBrand] = useState("");
    const [drivers, setDrivers] = useState("");
    
   
    const params = useParams("");
    const navigate = useNavigate();

    return ( 
        <div id="form" style={{ backgroundColor: "#4d4d4f", padding: "50px", height: "1800px" }}>

            <h2 style={{ backgroundColor: "#4d4d4f", width: "100%", color: "#28ade8" }}>Create your Team below:</h2>
            <aside><img className="text-center" style={{ width: "200%" }} src={car}></img></aside>
            <form className="card" style={{ width: "40%", position: "center", margin: "20px", backgroundColor:"lightgray" }}
                onSubmit={e => {

                    e.preventDefault()
                    // setTeamId(params.id)


                    axios.post("http://localhost:8081/team/create", { name, colour, carBrand, driver:{id:""} })

                        .then(response => {

                            setName("");
                            setColour("");
                            setCarBrand("");
                            setDrivers("");
console.log(response);

                        })

                        .catch(err => console.error(err))

                }
                }
            >

                <div style={{ marginLeft: "20px" }}  htmlFor="name" className="form-label"><strong>Team Name:</strong>
                    <input size="50"
                        id="name"
                        className="form-control border border-dark rounded" style={{ width: "250px", height: "37px", margin: "5px", marginLeft: "20px",  borderBlockColor:"blue"}}
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}

                    />

                </div>

                <div style={{ marginLeft: "20px" }}  htmlFor="colour" className="form-label"><strong>Team Colour:</strong>
                    <input size="50"
                        id="colour"
                        className="form-control border border-dark rounded" style={{ width: "250px", height: "37px", margin: "5px", marginLeft: "20px" }}
                        type="text"
                        value={colour}
                        onChange={e => setColour(e.target.value)}

                    />
                </div>


                <div style={{ marginLeft: "20px" }}  htmlFor="carBrand" className="form-label"><strong>Car Brand:</strong>
                    <input size="50"
                        id="carBrand"
                        className="form-control border border-dark rounded" style={{ width: "250px", height: "37px", margin: "5px", marginLeft: "20px" }}
                        type="text"
                        value={carBrand}
                        onChange={e => setCarBrand(e.target.value)}
                        contentEditable

                        
                    />
                     </div>



                <button id="teamSubmit" style={{ margin: "5px", width: "150px", color: "#4d4d4f", backgroundColor:"#28ade8" }} className="btn btn-dark" type="submit"><strong>Submit</strong></button>




            </form >

            {/* /************    New code******************** */}

            {/* <DisplayDrivers /> */}


            {/* /************    New code******************** */}

        </div >

     );
}

export default CreateDriver;