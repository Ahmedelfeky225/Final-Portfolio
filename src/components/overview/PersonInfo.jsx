import {color, motion} from "motion/react"
import "./PersonInfo.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { CircularProgress } from "@mui/joy";
import Skills from "./SkillCircle";

const PersonInfo = () => {
  return (
    <div className="about-skills">
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
                <span>Email:</span> ahmedelfeky913@gmail
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
      <div className="skills-section">
      <motion.h2 className="section-title" 
        style={{marginBottom:"10px"}}
        >
      My Skills
      </motion.h2>
  
      <div className="circle-skills">
      <div
  className="anan"
  label="Arbitrary content"
  style={{ width: "60px", height: "60px", position: "relative" }}
>
  <div data-test-id="CircularProgressbarWithChildren">
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <svg
        className="CircularProgressbar"
        viewBox="0 0 100 100"
        data-test-id="CircularProgressbar"
        style={{ width: "100%", height: "100%" }}
      >
        {/* الدائرة الخلفية (الحدود) */}
        <path
          d="
            M 50,50
            m 0,-46
            a 46,46 0 1 1 0,92
            a 46,46 0 1 1 0,-92
          "
          strokeWidth="8"
          fillOpacity="0"
          style={{
            stroke: "rgba(255, 255, 255, 0.6)", // لون فاتح للحدود
            strokeLinecap: "butt",
          }}
        ></path>

        {/* دائرة التقدم (progress) */}
        <path
          d="
            M 50,50
            m 0,-46
            a 46,46 0 1 1 0,92
            a 46,46 0 1 1 0,-92
          "
          strokeWidth="8"
          fillOpacity="0"
          style={{
            stroke: "#e44d25", // لون الـ progress (برتقالي)
            strokeLinecap: "butt",
            strokeDasharray: "289.027px, 289.027px",
            strokeDashoffset: "28.9027px", // يمثل التقدم (90%)
          }}
        ></path>
      </svg>

      {/* المحتوى الداخلي */}
      <div
        data-test-id="CircularProgressbarWithChildren__children"
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
          src="/html.png"
          alt="CSS"
          style={{ width: "30px", marginTop: "-5px" }}
        />
        <div style={{ fontSize: "12px", marginTop: "-5px" }}>
          <strong>90%</strong>
        </div>
      </div>
    </div>
  </div>
      </div>
      <div
  className="anan"
  label="Arbitrary content"
  style={{ width: "60px", height: "60px", position: "relative" }}
>
  <div data-test-id="CircularProgressbarWithChildren">
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <svg
        className="CircularProgressbar"
        viewBox="0 0 100 100"
        data-test-id="CircularProgressbar"
        style={{ width: "100%", height: "100%" }}
      >
        {/* الدائرة الخلفية (الحدود) */}
        <path
          d="
            M 50,50
            m 0,-46
            a 46,46 0 1 1 0,92
            a 46,46 0 1 1 0,-92
          "
          strokeWidth="8"
          fillOpacity="0"
          style={{
            stroke: "rgba(255, 255, 255, 0.6)", // لون فاتح للحدود
            strokeLinecap: "butt",
          }}
        ></path>

        {/* دائرة التقدم (progress) */}
        <path
          d="
            M 50,50
            m 0,-46
            a 46,46 0 1 1 0,92
            a 46,46 0 1 1 0,-92
          "
          strokeWidth="8"
          fillOpacity="0"
          style={{
            stroke: "#2570b9", // لون الـ progress (برتقالي)
            strokeLinecap: "butt",
            strokeDasharray: "289.027px, 289.027px",
            strokeDashoffset: "28.9027px", // يمثل التقدم (90%)
          }}
        ></path>
      </svg>

      {/* المحتوى الداخلي */}
      <div
        data-test-id="CircularProgressbarWithChildren__children"
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
          src="/css.png"
          alt="CSS"
          style={{ width: "30px", marginTop: "-5px" }}
        />
        <div style={{ fontSize: "12px", marginTop: "-5px" }}>
          <strong>90%</strong>
        </div>
      </div>
    </div>
  </div>
      </div>
      <div
  className="anan"
  label="Arbitrary content"
  style={{ width: "60px", height: "60px", position: "relative" }}
>
  <div data-test-id="CircularProgressbarWithChildren">
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <svg
        className="CircularProgressbar"
        viewBox="0 0 100 100"
        data-test-id="CircularProgressbar"
        style={{ width: "100%", height: "100%" }}
      >
        {/* الدائرة الخلفية (الحدود) */}
        <path
          d="
            M 50,50
            m 0,-46
            a 46,46 0 1 1 0,92
            a 46,46 0 1 1 0,-92
          "
          strokeWidth="8"
          fillOpacity="0"
          style={{
            stroke: "rgba(255, 255, 255, 0.6)", // لون فاتح للحدود
            strokeLinecap: "butt",
          }}
        ></path>

        {/* دائرة التقدم (progress) */}
        <path
          d="
            M 50,50
            m 0,-46
            a 46,46 0 1 1 0,92
            a 46,46 0 1 1 0,-92
          "
          strokeWidth="8"
          fillOpacity="0"
          style={{
            stroke: "#e8c930", // لون الـ progress (برتقالي)
            strokeLinecap: "butt",
            strokeDasharray: "289.027px, 289.027px",
            strokeDashoffset: "28.9027px", // يمثل التقدم (90%)
          }}
        ></path>
      </svg>

      {/* المحتوى الداخلي */}
      <div
        data-test-id="CircularProgressbarWithChildren__children"
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
          src="/js.png"
          alt="CSS"
          style={{ width: "30px", marginTop: "-5px" }}
        />
        <div style={{ fontSize: "12px", marginTop: "-5px" }}>
          <strong>70%</strong>
        </div>
      </div>
    </div>
  </div>
      </div>
      <div
  className="anan"
  label="Arbitrary content"
  style={{ width: "60px", height: "60px", position: "relative" }}
>
  <div data-test-id="CircularProgressbarWithChildren">
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <svg
        className="CircularProgressbar"
        viewBox="0 0 100 100"
        data-test-id="CircularProgressbar"
        style={{ width: "100%", height: "100%" }}
      >
        {/* الدائرة الخلفية (الحدود) */}
        <path
          d="
            M 50,50
            m 0,-46
            a 46,46 0 1 1 0,92
            a 46,46 0 1 1 0,-92
          "
          strokeWidth="8"
          fillOpacity="0"
          style={{
            stroke: "rgba(255, 255, 255, 0.6)", // لون فاتح للحدود
            strokeLinecap: "butt",
          }}
        ></path>

        {/* دائرة التقدم (progress) */}
        <path
          d="
            M 50,50
            m 0,-46
            a 46,46 0 1 1 0,92
            a 46,46 0 1 1 0,-92
          "
          strokeWidth="8"
          fillOpacity="0"
          style={{
            stroke: "#068ca5", // لون الـ progress (برتقالي)
            strokeLinecap: "butt",
            strokeDasharray: "289.027px, 289.027px",
            strokeDashoffset: "28.9027px", // يمثل التقدم (90%)
          }}
        ></path>
      </svg>

      {/* المحتوى الداخلي */}
      <div
        data-test-id="CircularProgressbarWithChildren__children"
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
          src="/react.png"
          alt="CSS"
          style={{ width: "30px", marginTop: "-5px" }}
        />
        <div style={{ fontSize: "12px", marginTop: "-5px" }}>
          <strong>90%</strong>
        </div>
      </div>
    </div>
  </div>
      </div>
      <div
  className="anan"
  label="Arbitrary content"
  style={{ width: "60px", height: "60px", position: "relative" }}
>
  <div data-test-id="CircularProgressbarWithChildren">
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <svg
        className="CircularProgressbar"
        viewBox="0 0 100 100"
        data-test-id="CircularProgressbar"
        style={{ width: "100%", height: "100%" }}
      >
        {/* الدائرة الخلفية (الحدود) */}
        <path
          d="
            M 50,50
            m 0,-46
            a 46,46 0 1 1 0,92
            a 46,46 0 1 1 0,-92
          "
          strokeWidth="8"
          fillOpacity="0"
          style={{
            stroke: "rgba(255, 255, 255, 0.6)", // لون فاتح للحدود
            strokeLinecap: "butt",
          }}
        ></path>

        {/* دائرة التقدم (progress) */}
        <path
          d="
            M 50,50
            m 0,-46
            a 46,46 0 1 1 0,92
            a 46,46 0 1 1 0,-92
          "
          strokeWidth="8"
          fillOpacity="0"
          style={{
            stroke: "#3178c6", // لون الـ progress (برتقالي)
            strokeLinecap: "butt",
            strokeDasharray: "289.027px, 289.027px",
            strokeDashoffset: "28.9027px", // يمثل التقدم (90%)
          }}
        ></path>
      </svg>

      {/* المحتوى الداخلي */}
      <div
        data-test-id="CircularProgressbarWithChildren__children"
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
          src="/ts.png"
          alt="CSS"
          style={{ width: "30px", marginTop: "-5px" }}
        />
        <div style={{ fontSize: "12px", marginTop: "-5px" }}>
          <strong>90%</strong>
        </div>
      </div>
    </div>
  </div>
      </div>
      <div
  className="anan"
  label="Arbitrary content"
  style={{ width: "60px", height: "60px", position: "relative" }}
>
  <div data-test-id="CircularProgressbarWithChildren">
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <svg
        className="CircularProgressbar"
        viewBox="0 0 100 100"
        data-test-id="CircularProgressbar"
        style={{ width: "100%", height: "100%" }}
      >
        {/* الدائرة الخلفية (الحدود) */}
        <path
          d="
            M 50,50
            m 0,-46
            a 46,46 0 1 1 0,92
            a 46,46 0 1 1 0,-92
          "
          strokeWidth="8"
          fillOpacity="0"
          style={{
            stroke: "rgba(255, 255, 255, 0.6)", // لون فاتح للحدود
            strokeLinecap: "butt",
          }}
        ></path>

        {/* دائرة التقدم (progress) */}
        <path
          d="
            M 50,50
            m 0,-46
            a 46,46 0 1 1 0,92
            a 46,46 0 1 1 0,-92
          "
          strokeWidth="8"
          fillOpacity="0"
          style={{
            stroke: "#563f7b", // لون الـ progress (برتقالي)
            strokeLinecap: "butt",
            strokeDasharray: "289.027px, 289.027px",
            strokeDashoffset: "28.9027px", // يمثل التقدم (90%)
          }}
        ></path>
      </svg>

      {/* المحتوى الداخلي */}
      <div
        data-test-id="CircularProgressbarWithChildren__children"
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
          src="/bootstrap.png"
          alt="CSS"
          style={{ width: "30px", marginTop: "-5px" }}
        />
        <div style={{ fontSize: "12px", marginTop: "-5px" }}>
          <strong>90%</strong>
        </div>
      </div>
    </div>
  </div>
      </div>
      <div
  className="anan"
  label="Arbitrary content"
  style={{ width: "60px", height: "60px", position: "relative" }}
>
  <div data-test-id="CircularProgressbarWithChildren">
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <svg
        className="CircularProgressbar"
        viewBox="0 0 100 100"
        data-test-id="CircularProgressbar"
        style={{ width: "100%", height: "100%" }}
      >
        {/* الدائرة الخلفية (الحدود) */}
        <path
          d="
            M 50,50
            m 0,-46
            a 46,46 0 1 1 0,92
            a 46,46 0 1 1 0,-92
          "
          strokeWidth="8"
          fillOpacity="0"
          style={{
            stroke: "rgba(255, 255, 255, 0.6)", // لون فاتح للحدود
            strokeLinecap: "butt",
          }}
        ></path>

        {/* دائرة التقدم (progress) */}
        <path
          d="
            M 50,50
            m 0,-46
            a 46,46 0 1 1 0,92
            a 46,46 0 1 1 0,-92
          "
          strokeWidth="8"
          fillOpacity="0"
          style={{
            stroke: "#f05033", // لون الـ progress (برتقالي)
            strokeLinecap: "butt",
            strokeDasharray: "289.027px, 289.027px",
            strokeDashoffset: "28.9027px", // يمثل التقدم (90%)
          }}
        ></path>
      </svg>

      {/* المحتوى الداخلي */}
      <div
        data-test-id="CircularProgressbarWithChildren__children"
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
          src="/git.png"
          alt="CSS"
          style={{ width: "30px", marginTop: "-5px" }}
        />
        <div style={{ fontSize: "12px", marginTop: "-5px" }}>
          <strong>75%</strong>
        </div>
      </div>
    </div>
  </div>
      </div>
      <div
  className="anan"
  label="Arbitrary content"
  style={{ width: "60px", height: "60px", position: "relative" }}
>
  <div data-test-id="CircularProgressbarWithChildren">
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <svg
        className="CircularProgressbar"
        viewBox="0 0 100 100"
        data-test-id="CircularProgressbar"
        style={{ width: "100%", height: "100%" }}
      >
        {/* الدائرة الخلفية (الحدود) */}
        <path
          d="
            M 50,50
            m 0,-46
            a 46,46 0 1 1 0,92
            a 46,46 0 1 1 0,-92
          "
          strokeWidth="8"
          fillOpacity="0"
          style={{
            stroke: "rgba(255, 255, 255, 0.6)", // لون فاتح للحدود
            strokeLinecap: "butt",
          }}
        ></path>

        {/* دائرة التقدم (progress) */}
        <path
          d="
            M 50,50
            m 0,-46
            a 46,46 0 1 1 0,92
            a 46,46 0 1 1 0,-92
          "
          strokeWidth="8"
          fillOpacity="0"
          style={{
            stroke: "#00acc1", // لون الـ progress (برتقالي)
            strokeLinecap: "butt",
            strokeDasharray: "289.027px, 289.027px",
            strokeDashoffset: "28.9027px", // يمثل التقدم (90%)
          }}
        ></path>
      </svg>

      {/* المحتوى الداخلي */}
      <div
        data-test-id="CircularProgressbarWithChildren__children"
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
          src="/tailwind.png"
          alt="tailwind"
          style={{ width: "30px", marginTop: "-5px" }}
        />
        <div style={{ fontSize: "12px", marginTop: "-5px" }}>
          <strong>70%</strong>
        </div>
      </div>
    </div>
  </div>
      </div>
      </div>
      
        {/* My Skills */}
    </div>
    </div>
  )
}

export default PersonInfo