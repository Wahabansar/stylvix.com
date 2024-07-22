import React from "react";
import Topbar from "./component/Topbar";
import Navbar from "./component/Navbar/Navbar";
import HeroSection from "./component/HeroSection";
import OurCollection from "./component/OurCollection";
import CenterImageSection from "./component/CenterImageSection";
import Slider1 from "./component/Slider1";
import Footer from "./component/Footer";
import Blog from "./component/Blog";



function App(){


  return(
<div>
{/* <Topbar/> */}
<Navbar/>
{/* <HeroSection/> */}
<OurCollection/>
<CenterImageSection/>
<Slider1/>
<Blog/>
<Footer/>

      </div>
  );
}
export default App;
