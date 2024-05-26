import { useState,useEffect } from 'react'
import { SelectedPage} from "@/shared/types";
import Navbar from "./screens/navbar/index"
import Home from './screens/Home';
import Footer from './screens/footer';

import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Contact from './screens/Contact';
import AboutSection from './screens/Learn';

function App() {
  const [selectedPage,setSelectedPage]=useState<SelectedPage>(SelectedPage.Home);
    const [isTopOfPage,setisTopOfPage]=useState<boolean>(true);
    useEffect(()=>{
        const  handleScroll=()=>{
            if(window.scrollY===0){
                setisTopOfPage(true);
                setSelectedPage(SelectedPage.Home)
            }
            if(window.scrollY!==0) setisTopOfPage(false)
        }
        window.addEventListener("scroll",handleScroll)
        return ()=>window.removeEventListener("scroll",handleScroll)

    })
  return (
   
     <Router>
      <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
     <Routes>
       <Route path="/" element={<Home setSelectedPage={setSelectedPage}/>}/>
       <Route path="/contact" element={<Contact/>}/>
       <Route path="/about" element={<AboutSection/>}/>
       
     </Routes>
     <Footer/>
   </Router>
   
  )
}

export default App
