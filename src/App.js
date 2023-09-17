import {Routes,Route} from "react-router-dom"
import './App.css';
import Main from './Components/Main';
import Contact from './Components/Contact';
import AIML_INFRASTRUCTURE from "./Components/AIML_FILES/AIML_INFRASTRUCTURE";
import NavBar from "./Components/NavBar";
import Vision from "./Components/Vision";
import PEO from "./Components/PEO";
import PSO from "./Components/PSO";
import AIML_Page from "./Components/AIML_FILES/AIML_Page";
import AIML_Faculty from "./Components/AIML_FILES/AIML_Faculty";
import AIML_CSO from "./Components/AIML_FILES/AIML_CSO";
import Developers from "./Components/Developers";
import DS_Page from "./Components/DS_FILES/DS_Page";
import DS_Faculty from "./Components/DS_FILES/DS_Faculty";
import DS_CSO from "./Components/DS_FILES/DS_CSO";
import DS_INFRASTRUCTURE from "./Components/DS_FILES/DS_INFRASTRUCTURE";
import CS_Page from "./Components/CS_FILES/CS_Page";
import CS_Faculty from "./Components/CS_FILES/CS_Faculty";
import CS_CSO from "./Components/CS_FILES/CS_CSO";
import CS_INFRASTRUCTURE from "./Components/CS_FILES/CS_INFRASTRUCTURE";
import AIML_Achievements from "./Components/AIML_FILES/AIML_Achievements";
import CS_Achievement from "./Components/CS_FILES/CS_Achievements";
import DS_Achievements from "./Components/DS_FILES/DS_Achievements";
function App() {
  return (
    <>
    <NavBar />
    <Routes>
          <Route path="/" element={<Main />} />  
          <Route path="/AIML" element = { <AIML_Page /> } />
          <Route path="/AIML/faculty" element = { <AIML_Faculty /> } />
          <Route path="/AIML/Infrastructure" element = {<AIML_INFRASTRUCTURE />} />
          <Route path="/AIML/Course_Outcomes" element ={<AIML_CSO />} />
          <Route path="/AIML/student_achievement" element={<AIML_Achievements />} />
          <Route path="/DS" element = { <DS_Page /> } />
          <Route path="/DS/faculty" element = { <DS_Faculty /> } />
          <Route path="/DS/Course_Outcomes" element ={<DS_CSO />} />
          <Route path="/DS/Infrastructure" element = {<DS_INFRASTRUCTURE />} />
          <Route path="/DS/student_achievement" element={<DS_Achievements />} />
          <Route path="/CS" element = { <CS_Page /> } />
          <Route path="/CS/faculty" element = { <CS_Faculty /> } />
          <Route path="/CS/Course_Outcomes" element ={<CS_CSO />} />
          <Route path="/CS/Infrastructure" element = {<CS_INFRASTRUCTURE />} />
          <Route path="/CS/student_achievement" element={<CS_Achievement />} />
          <Route path="/About/V&M" element = {<Vision/>} />
          <Route path="/About/peo" element = {<PEO/>} />
          <Route path="/About/pso" element = {<PSO/>} />
          
          <Route path = "/Contact" element={<Contact />} />
          <Route path ="/Developers" element={<Developers />} ></Route>
       
    </Routes>
    <div class="container-fluid bg-dark text-white-50 border-top py-4" style={{borderColor: "rgba(256, 256, 256, .1) !important"}}>
        <div class="container">
            <div class="row">
                <div class="col-md-6 text-center text-md-left mb-3 mb-md-0">
                    <p class="m-0">Copyright &copy; <a class="text-blue" href="#">CVR College Of Engineering</a>. All Rights Reserved.
                    </p>
                </div>
                
            </div>
        </div>
   </div>
    </>
  );
}

export default App;
