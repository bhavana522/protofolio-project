import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./pages/about/about.component";
import Skills from "./pages/skills/skills.component";
import bgImage from "./assets/img/parallax/background.jpg";
import{ Parallax } from 'react-parallax';
import Fade from 'react-reveal/Fade';
import Slide from "react-reveal/Slide";
import Container  from "react-bootstrap/Container";
import ProjectTimeline from "./components/projects-timeline/project-line.component";
import ContactForm from "./pages/contact-form/contact-form.component";
import Navbar from "./components/Navbar";
import Header from"./components/Header";
const App  =()=> {
  return (
    <>
    <Navbar/>
    <Header/>

    <div>
        <Parallax blur={{ min: -40, max: 40 }}
         bgImage={bgImage}
         bgImageAlt=""
         strength={-200}>
          <div>
            <Container className="container-box rounded">
            <Fade duration={100}>
            <Slide bottom duration={500}>
          <hr />
        <About/>
        </Slide>
            </Fade>
          </Container>
          </div>
         </Parallax>
    </div>
    <Container className="container-box rounded">
    <Slide bottom duration={500}>
          <hr />
        <Skills />
        </Slide>
      </Container>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <ProjectTimeline />
        </Slide>
      </Container>
      <Container className="container-box rounded">
        <Fade duration={500}>
          <hr />
          <ContactForm />
        </Fade>
      </Container>
      <hr />
      
  
    </>
  );
}

export default App;
