import PropTypes from "prop-types";

import { useNavigate } from "react-router";
import { useState } from "react";
import axios from "axios";
import { isVisible } from "@testing-library/user-event/dist/utils";
import { useParams } from "react-router-dom";

function DriverStructure(props) {

    const params = useParams("");
    const navigate = useNavigate();

    function deleteDriver() {
        axios.delete("http://localhost:8081/driver/delete/" + props.id)
        window.location.reload()
    }

    return ( 
        <div style={{width:"35%"}}>
            <h5><i>Registered Driver: {props.id}</i></h5>





            <div className="card" style={{Width:"30%", backgroundColor:"#28ade8"}}>
                <p className="col" style={{marginLeft:"15px", marginTop:"15px"}}>  Racer ID: {props.id} </p>
                <p className="col" style={{marginLeft:"15px"}}> First Name : {props.firstName} </p>
                <p className="col" style={{marginLeft:"15px"}}>  Last Name: {props.lastName} </p>
                <p className="col" style={{marginLeft:"15px"}}>  Nationality: {props.nationality} </p>
                <p className="col" style={{marginLeft:"15px"}}>  Race Number: #{props.number} </p>


        </div>
        <br></br>
        <button className="btn btn-light" style={{ width: "180px", height: "50px", margin: "5px", padding: "5px",color:"#4d4d4f" }}  ><strong>Update Details</strong></button>
        <button className="btn btn-light" style={{ width: "180px", height: "50px", margin: "5px", padding: "5px",color:"#4d4d4f" }} onClick={() => navigate("/driver/update/" + props.id)}  ><strong>Add to Team</strong></button>   
            <button className="btn btn-light" style={{ width: "180px", height: "50px", margin: "5px", padding: "5px",color:"#4d4d4f" }}  onClick={() => { deleteDriver() }}><strong>Delete</strong></button>
            <br></br><br></br><br></br> 
        </div>
     );
}

export default DriverStructure;