import { useEffect, useState } from "react";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Main from "./components/main/Main";
import { ArrowUpNarrowWide } from 'lucide-react';
import PersonInfo from "./components/overview/PersonInfo";


function App() {
useEffect(()=>{
  window.addEventListener("scroll",()=>{
   if(scrollY > 300){
    setShowScrollBtn(true)
   }else{
    setShowScrollBtn(false)
   }
  })
})
const [showScrollBtn,setShowScrollBtn] = useState(false)
  return (
      <div id="up" className="container">
      <Header />
      <Hero/>
      <div className="divider"/>
      <Main/>
      <div className="divider"/>
      <PersonInfo/>
      <div className="divider"/>
      <Contact/>
      <div className="divider"/>
        <a href="#up"  style={{opacity:showScrollBtn ? 1 : 0, transition:"0.7s"}}>
        <ArrowUpNarrowWide  className="icon-keyboard_arrow_up scrollToUp" />
       </a>
     
      <Footer/>
    </div>
  )
}

export default App;