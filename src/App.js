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
import Line from './assets/line.json'
import Lottie from "lottie-react";
import DetailedProject from "./screens/DetailedProject";
import ProjectSection from "./components/ProjectSection";
import MovementFrame from "./screens/MovementFrame";
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

  const [speed, setSpeed] = useState(1); // Default speed is normal (1)

  const handleSpeedChange = (event) => {
    setSpeed(event.target.value); // Update speed dynamically
  };

  const defaultOptions = {
    loop: true,
    autoplay: true, // Controls autoplay
    animationData: Line,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
    speed: parseFloat(speed), // Dynamically apply the speed
  };
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
    <Projects/>
     <div className="w-5/6 mx-auto ">
    <Contact/>
    </div>
   
    <Footer/>
    
    {/* <ProjectSection/> */}
    {/* <DetailedProject/> */}
    
    {/* <div className="w-5/6 mx-auto md:h-full ">
    <MySkills/>
    </div> */}
   {/* <Lottie animationData={Line}/>
    <div className="w-5/6 mx-auto ">
    <Projects/>
    </div> */}
    {/* <Lottie animationData={Line}/> */}
    {/* <div className="w-5/6 mx-auto ">
    <Contact/>
    </div>
   
    <Footer/> */}
    </div>
  );
}

export default App;
