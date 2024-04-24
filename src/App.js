import logo from './images/AC Logo copy.png';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import CV from './components/CV';
import Projects from './components/Projects';
import Skills from './components/Skills';
import RaceTeam from "./components/RaceTeam";
import HireMe from './components/HireMe';
import 'bootstrap/dist/css/bootstrap.min.css';
import home from "./images/home.png";
import cv from "./images/cv.png";
import skills from "./images/skills.png";
import hiring from "./images/hiring.png";
import car from "./images/car.png";
import project from "./images/project.png";
import Driver from "./components/raceTeam/Driver";
import Jalal from "./components/projects/Jalal";
import KingsQueen from "./components/projects/KingsQueen";
import RoselessThorn from "./components/projects/RoselessThorn";
import CCZone from "./components/projects/CCZone";
import Race from './components/raceTeam/Race';




function App() {
  return (
<div>
      <div>
        <BrowserRouter>
          {/* <nav className="navbar align-content-center " style={{ display: "flex", backgroundColor: "#526899", }}> */}

          <nav className="navbar align-content-end " style={{ display: "flex", backgroundColor: "  white" }}>
            <div>

              <div className="homeimage"></div>
              <img className="text-center" style={{ width: "20%" }} src={logo}alt="AC Logo"></img>

              <Link to='/'><button type="button" className="btn btn-dark btn-lg" style={{ margin: "10px", color: "#28ade8", height:"150px", width:"11.5%", backgroundColor:"#4d4d4f" }}>
              <img className="text-center" style={{ width: "20px" }} src={home}></img><strong> Home</strong></button></Link>
              <Link to='/cv'><button type="button" className="btn btn-dark btn-lg" style={{ margin: "10px", color: "#28ade8", height:"150px", width:"11.5%", backgroundColor:"#4d4d4f" }}>
              <img className="text-center" style={{ width: "20px" }} src={cv}></img><strong> CV</strong></button></Link>
              <Link to='/projects'><button type="button" className="btn btn-dark btn-lg" style={{ margin: "10px", color: "#28ade8", height:"150px", width:"11.5%", backgroundColor:"#4d4d4f" }}
              ><img className="text-center" style={{ width: "20px" }} src={project}></img><strong> Projects</strong></button> </Link>
              <Link to='/skills'><button type="button" className="btn btn-dark btn-lg" style={{ margin: "10px", color: "#28ade8", height:"150px", width:"11.5%", backgroundColor:"#4d4d4f" }}>
              <img className="text-center" style={{ width: "20px" }} src={skills}></img><strong> Skills</strong></button></Link>
              <Link to='/raceteam'><button type="button" className="btn btn-dark btn-lg" style={{ margin: "10px", color: "#28ade8", height:"150px", width:"11.5%", backgroundColor:"#4d4d4f" }}>
              <img className="text-center" style={{ width: "20px" }} src={car}></img><strong> RaceTeam Builder</strong></button> </Link>
              <Link to='/hireme'><button type="button" className="btn btn-dark btn-lg" style={{ margin: "10px", color: "#28ade8", height:"150px", width:"11.5%", backgroundColor:"#4d4d4f" }}>
              <img className="text-center" style={{ width: "20px" }} src={hiring}></img><strong> Hire Me!</strong></button> </Link>
              
              <p style={{ float: "inline-end", textAlign: "end",  color: "#005f9e" }}><b>Software Is What Powers Today's World</b></p>
              {/* <img class="text-center" style={{ width: "20%", marginLeft: "600px" }} src={homeLogo}></img> */}
            </div>

          </nav>

          <div style={{/* backgroundColor: "#5dbc4d",*/ width: "100%" }}>
            {/* <img class="text-center" style={{ width: "20%", marginLeft: "600px" }} src={homeLogo}></img> */}
          </div>
          <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cv' element={<CV />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/raceteam' element={<RaceTeam />} />
          <Route path='/race' element={<Race />} />
          <Route path='/hireme' element={<HireMe />} />
          <Route path='/driver/update/:id' element={<Driver />} />
          <Route path='/projects/1' element={<Jalal />} />
          <Route path='/projects/2' element={<KingsQueen />} />
          <Route path='/projects/3' element={<RoselessThorn />} />
          <Route path='/projects/4' element={<CCZone />} />

          {/* <Route path='/cart/get/:id' element={<DisplayCartContent />} />
          <Route path='/item/update/:id' element={<UpdateCartItem />} />
          <Route path='/shopping' element={<BuyerCart />} />

          <Route path='/item' element={<DisplayStockItems />} /> */}





            </Routes>


        </BrowserRouter>



      </div>
    </div>
  );
}

export default App;
