import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import About from "./pages/about/about.component";
import Skills from "./pages/skills/skills.component";
import Navbar from "./components/Navbar";
import Header from"./components/Header";
const App  =()=> {
  return (
    <>
    <Particles
    params={{
      particles:{
        number:{
          value:30,
          density: {
            enable:true,
            value_area:900
          }
        },
        shape:{
          type:"polygon",
          stroke:{
            width:6,
            color:"#f9ab00"
          }
        }
      }
    }}

      
      />
    <Navbar/>
    <Header/>
    <About/>
    <Skills/>
    
    </>
  );
}

export default App;
