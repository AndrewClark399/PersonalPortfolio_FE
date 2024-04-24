import PropTypes from "prop-types";
import { useNavigate } from "react-router";
import { useState } from "react";
import axios from "axios";
import { isVisible } from "@testing-library/user-event/dist/utils";
import { useParams } from "react-router-dom";

function TeamStructure(props) {

    const params = useParams("");

    function deleteTeam() {
        axios.delete("http://localhost:8081/team/delete/" + props.id)
        window.location.reload()
    }

    return ( 
        <div style={{width:"35%"}}>
            <h5><i>Registered Team: {props.id}</i></h5>





            <div className="card" style={{Width:"30%", backgroundColor:"#28ade8"}}>
                <p className="col" style={{marginLeft:"15px", marginTop:"15px"}}>  Team ID: {props.id} </p>
                <p className="col" style={{marginLeft:"15px"}}> Team Name : {props.name} </p>
                <p className="col" style={{marginLeft:"15px"}}>  Team Colour: {props.colour} </p>
                <p className="col" style={{marginLeft:"15px"}}>  Car Brand/Model: {props.carBrand} </p>


        </div>
        <br></br>
        <button className="btn btn-light" style={{ width: "180px", height: "50px", margin: "5px", padding: "5px",color:"#4d4d4f" }}  ><strong>Update Details</strong></button>
        <button className="btn btn-light" style={{ width: "180px", height: "50px", margin: "5px", padding: "5px",color:"#4d4d4f" }}  ><strong>Show Drivers</strong></button>   
            <button className="btn btn-light" style={{ width: "180px", height: "50px", margin: "5px", padding: "5px",color:"#4d4d4f" }}  onClick={() => { deleteTeam() }}><strong>Delete</strong></button>
            <br></br><br></br><br></br> 
        </div>
     );
}

export default TeamStructure;