import Navbar from "./screens/Navbar"
import DotGroup from "./screens/DotGroup";
import Landing from "./screens/Landing";
import LineGradient from './components/LineGradient'
import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery"
import MySkills from "./screens/MySkills";
import Projects from "./screens/Projects";
import Contact from "./screens/Contact";
import Footer from "./screens/Footer";

function App() {
  const [selectedPage,setSelectedPage] = useState("home");
  const [isTopOfPage,setIsTopOfPage]=useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")

  useEffect(()=>{
    const handleScroll = () =>{
      if(window.scrollY === 0) setIsTopOfPage(true);
      if(window.scrollY !== 0) setIsTopOfPage(false)
    }
  window.addEventListener("scroll",handleScroll);
  return () => window.removeEventListener("scroll",handleScroll);
  },[]);

  return (
    <div className="app bg-deep-blue">
    <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage}
    isTopOfPage={isTopOfPage}/>
    <div className="w-5/6 mx-auto md:h-full">
    {/* {isAboveMediumScreens &&(
      <DotGroup selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
    )}  */}
    
    <Landing setSelectedPage={setSelectedPage}/>
    </div>
    <LineGradient/>
    <div className="w-5/6 mx-auto md:h-full ">
    <MySkills/>
    </div>
   
    <div className="w-5/6 mx-auto ">
    <Projects/>
    </div>
    <LineGradient/>
    <div className="w-5/6 mx-auto ">
    <Contact/>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
