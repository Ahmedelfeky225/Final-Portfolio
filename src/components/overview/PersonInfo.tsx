import {motion} from "motion/react"
import "./PersonInfo.css"
const PersonInfo = () => {
  return (
    <div>
        <div className="info-about-me">
        <motion.h2 className="section-title" 
      style={{marginBottom:"10px"}}
      >
      Personal Info
      </motion.h2>
        <div className="about-me">
            <div className="colLeft">
                <p>
                <span>Name:</span> Ahmed Elfeky
                </p>
                <p>
                <span>Age:</span> 23
                </p>
                <p>
                <span>Nationality:</span> Egyptian
                </p>
            </div>
            <div className="colRight">
            <p>
                <span>Address:</span> Egypt
                </p>
                <p>
                <span>Phone:</span> +201005845202
                </p>
                <p>
                <span>Email:</span> ahmedelfeky913@gmail.com
                </p>
            </div>
        </div>
        <a href="/Ahmed Elfeky.pdf" download="Ahmed Elfeky.pdf" >
          Download CV
        </a>

        </div>
        
    </div>
  )
}

export default PersonInfo