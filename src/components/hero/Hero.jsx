import "./hero.css"
import developerAnimation from "../../Animations/develoeper.json"
import Lottie from "lottie-react"
import { useRef } from "react";
import {motion} from "motion/react"
import MySocial from "../MySocial/MySocial";

const Hero = () => {
  const lottieRef = useRef(null);
  return (
    <section className="hero flex" id="about"  >
      <div className="left-section ">
       <div className="parent-avatar flex">
       <motion.img initial={{transform:"scale(0)"}} 
       animate={{transform:"scale(1.1)"}} transition={{damping:8, type:"spring",stiffness:40}} src="./avatar.jpg" className="avatar" alt="" />
       <div className="icon-verified"></div>
       </div>
      <div className="title-info">
      <motion.h2 className="title" 
      style={{marginBottom:"10px"}}
      >
      Hay I'm Ahmed Elfeky
      </motion.h2>
      <motion.h4 style={{marginBottom:"10px"}}
      initial={{opacity:0}} animate={{opacity:1}} 
      transition={{damping:8, type:"spring",stiffness:30}}
      >
      react web developer
      </motion.h4>
      </div>
      <p className="sub-title">
      junior Web Developer specializing in React.
       I built my skills through the Digital Egypt Pioneers Initiative
        and self-paced learning on multiple online platforms."
      </p>
      <MySocial/>
      </div>
      <div className="right-section">
        <Lottie lottieRef={lottieRef} className="animation-dev" animationData={developerAnimation} onLoadedImages={()=>{
          lottieRef.current?.setSpeed(0)
        }}/>
      </div>
    </section>
  )
}

export default Hero