import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import DriverStructure from "./DriverStructure";

function DisplayDrivers() {
   
        const params = useParams("");
        const driverList = []
        const [drivers, setDrivers] = useState([]);

        const navigate = useNavigate();
        // const [cartId, setCartId] = useState();
    
        function getDrivers() {
            axios.get("http://localhost:8081/driver/get")
                .then((response) => {
                    setDrivers(response.data)
                    
                    console.log("response.data:", response.data);
                })
                .catch(err => console.error(err))
    
          
        };
        // setCartId(params.id);
        // <ItemStructure cart={cartId}/>
        
    
        for (const driver of drivers) {
            driverList.push(<DriverStructure
                id={driver.id}
                firstName={driver.firstName}
                lastName={driver.lastName}
                nationality={driver.nationality}
                number={driver.number}
               
    
            />
    
            )
    
        }
       
    
    
        useEffect(() => { getDrivers() }, [])
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
                    {driverList}
                    </div>
                    <div>
                        <br></br>

                    </div>
                </div>
    
            </div >
     );
}

export default DisplayDrivers;