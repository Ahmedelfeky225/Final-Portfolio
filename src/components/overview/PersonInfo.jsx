import {motion} from "motion/react"
import "./PersonInfo.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

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
                <span>First Name:</span> Ahmed
                </p>
                <p>
                <span>Age:</span> 23
                </p>
                <p>
                <span>Phone:</span> +201005845202
                </p>
            </div>
            <div className="colRight">
            <p>
            <p>
                <span>Last Name:</span> Elfeky
                </p>
                <span>Address:</span> Egypt
                </p>
                <p>
                <span>Email:</span> ahmedelfeky913@gmail.com
                </p>
            </div>
        </div>
        <div className="contain-cv-btn">
        <div className="icon-download flex justify-center">
        <FontAwesomeIcon icon={faDownload} size="lg"/>
        </div>
        <a href="/Ahmed Elfeky.pdf" download="Ahmed Elfeky.pdf" className="btn-download">
          Download CV
        </a>
        </div>

        </div>

        {/* My Skills */}
        <div className="info-about-me">
        <motion.h2 className="section-title" 
      style={{marginBottom:"10px"}}
      >
      My Skills
      </motion.h2>
      

        </div>
        {/* My Skills */}
    </div>
  )
}

export default PersonInfo