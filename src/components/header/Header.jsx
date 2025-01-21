import { BrowserRouter, HashRouter, NavLink } from "react-router-dom"
import "./header.css"
import { useEffect, useState } from "react"


const Header = () => {


  const [showModal,setShowModal] = useState(false)
  const [theme,setTheme] = useState(localStorage.getItem("currenMode") ?? "dark");
  const [activeSection,setActiveSection] = useState(null)

  useEffect(()=>{
   if(theme === "dark"){
    document.body.classList.remove("light")
    document.body.classList.add("dark")
   }else{
    document.body.classList.remove("dark")
    document.body.classList.add("light")
   }
  },[theme])

  return (
    <header className="flex">
      <button className="menu icon-menu" onClick={()=>{
        setShowModal(true)
      }}/>
      <div/>
      <BrowserRouter>
      <nav>
       <ul className="flex">
        <li><a href="#about" className={activeSection === "About" ? "activeSection" :null }
        onClick={()=>{
        setActiveSection("About")
        }} 
        >About</a></li>
        {/* <li><NavLink to="#overview">Overview</NavLink></li> */}
        <li><a href="#projects" className={activeSection === "Projects" ? "activeSection" :null }
        onClick={()=>{
          setActiveSection("Projects")
          }} 
        >Projects</a></li>
        {/* <li><a href="">Certifications</a></li> */}
        <li><a href="#contact"  className={activeSection === "Contact" ? "activeSection" :null }
         onClick={()=>{
          setActiveSection("Contact")
          }} 
        >Contacts</a></li>
       </ul>
      </nav>
      </BrowserRouter>
      <button className="mode flex" onClick={()=>{
          

        // save value to lS
        
        localStorage.setItem("currenMode",theme === "dark" ? "light" : "dark")

        // get current Mode from local storage
        setTheme(localStorage.getItem("currenMode"))

      }}>
        {theme === "dark" ? <span className="icon-moon-o"></span> : <span className="icon-sun"></span> }
      </button>

      {showModal && <div className="fixed">
        <ul className="modal">
        <li onClick={()=>setShowModal(false)}><button className="icon-close"/></li>
          <li><a href="#about" onClick={()=>{
            setShowModal(false)
          }}>About</a></li>
          {/* <li><a href="">Overview</a></li> */}
          <li><a href="#projects" onClick={()=>{
            setShowModal(false)
          }}>Projects</a></li>
          {/* <li><a href="">Certifications</a></li> */}
          <li><a href="#contact" onClick={()=>{
            setShowModal(false)
          }}>Contact</a></li>
        </ul>
      </div>}
    </header>
  )
}

export default Header