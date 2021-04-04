import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./pages/about/about.component";
import Skills from "./pages/skills/skills.component";
import ProjectTimeline from "./components/projects-timeline/project-line.component";
import ContactForm from "./pages/contact-form/contact-form.component";
import Navbar from "./components/Navbar";
import Header from"./components/Header";
const App  =()=> {
  return (
    <>
   

      
    
    <Navbar/>
    <Header/>
    <About/>
    <Skills/>
    <ProjectTimeline/>
    <ContactForm />
    </>
  );
}

export default App;
