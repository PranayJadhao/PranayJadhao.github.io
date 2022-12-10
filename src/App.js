import About from "./components/About";
import Calender from "./components/Calender";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";
import Stats from "./components/Stats";


function App() {
  return (
    <div className="App">
    {/* <h1 >bdvg</h1> */}
       <Navbar/>
       <Home/>
       <About/>
       <Projects/>
       <Skills/>
       <Calender/>
       <Stats/>
       <Contact/>

       <SocialLinks/>
    </div>
  );
}

export default App;
