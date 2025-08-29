import { motion } from "motion/react";
import "./PersonInfo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import MySocial from "../MySocial/MySocial";

const PersonInfo = () => {
  return (
    <div className="about-skills relative" id="overview">
      <div className="info-about-me">
        <motion.h2 className="section-title" style={{ marginBottom: "10px" }}>
          Personal Info
        </motion.h2>
        <div className="about-me">
          <div className="colLeft">
            <div>
              <span>First Name:</span> Ahmed
            </div>
            <div>
              <span>Age:</span> 23
            </div>
            <div>
              <span>Phone:</span> +201005845202
            </div>
          </div>
          <div className="colRight">
            <div>
              <div>
                <span>Last Name:</span> Elfeky
              </div>
              <span>Address:</span> Egypt
            </div>
            <div>
              <span>Email:</span> ahmedelfeky913@gmail
            </div>
          </div>
        </div>
        <div className="contain-cv-btn">
          <div className="icon-download flex justify-center">
            <FontAwesomeIcon icon={faDownload} size="lg" />
          </div>
          <a
            href="/Ahmed Elfeky.pdf"
            download="Ahmed Elfeky.pdf"
            className="btn-download"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* My Skills */}
      <div className="skills-section">
        <motion.h2 className="section-title" style={{ marginBottom: "10px" }}>
          My Skills
        </motion.h2>

        <div className="circle-skills">
          {/* HTML */}
          <SkillCircle
            img="/html.png"
            alt="html"
            color="#e44d25"
            percent="85%"
          />
          {/* CSS */}
          <SkillCircle img="/css.png" alt="CSS" color="#2570b9" percent="80%" />
          {/* JS */}
          <SkillCircle img="/js.png" alt="js" color="#e8c930" percent="70%" />
          {/* React */}
          <SkillCircle
            img="/react.png"
            alt="react"
            color="#068ca5"
            percent="70%"
          />
          {/* TS */}
          <SkillCircle img="/ts.png" alt="ts" color="#3178c6" percent="75%" />
          {/* Bootstrap */}
          <SkillCircle
            img="/bootstrap.png"
            alt="bootstrap"
            color="#563f7b"
            percent="80%"
          />
          {/* Git */}
          <SkillCircle img="/git.png" alt="Git" color="#f05033" percent="75%" />
          {/* Tailwind */}
          <SkillCircle
            img="/tailwind.png"
            alt="tailwind"
            color="#00acc1"
            percent="70%"
          />
          {/* Next.js */}
          <SkillCircle
            img="/nextjs.png"
            alt="nextjs"
            color="#000000"
            percent="75%"
          />
        </div>
      </div>

      <div className="absolute right-[-10px] top-[-15px]">
        <MySocial />
      </div>
    </div>
  );
};

// Component for skill circle to avoid repetition
const SkillCircle = ({ img, alt, color, percent }) => (
  <div
    className="anan"
    style={{ width: "60px", height: "60px", position: "relative" }}
  >
    <div data-test-id="CircularProgressbarWithChildren">
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        <svg
          className="CircularProgressbar"
          viewBox="0 0 100 100"
          style={{ width: "100%", height: "100%" }}
        >
          {/* Background circle */}
          <path
            d="M 50,50 m 0,-46 a 46,46 0 1 1 0,92 a 46,46 0 1 1 0,-92"
            strokeWidth="8"
            fillOpacity="0"
            style={{ stroke: "#d6d6d6", strokeLinecap: "butt" }}
          />
          {/* Progress circle */}
          <path
            d="M 50,50 m 0,-46 a 46,46 0 1 1 0,92 a 46,46 0 1 1 0,-92"
            strokeWidth="8"
            fillOpacity="0"
            style={{
              stroke: color,
              strokeLinecap: "butt",
              strokeDasharray: "289.027px, 289.027px",
              strokeDashoffset: "28.9027px",
            }}
          />
        </svg>

        {/* Inner content */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            marginTop: "-100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={img}
            alt={alt}
            style={{ width: "30px", marginTop: "-5px" }}
          />
          <div style={{ fontSize: "12px", marginTop: "-5px" }}>
            <strong>{percent}</strong>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PersonInfo;
