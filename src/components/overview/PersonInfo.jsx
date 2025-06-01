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
          <div
            className="anan"
            label="Arbitrary content"
            style={{ width: "60px", height: "60px", position: "relative" }}
          >
            <div data-test-id="CircularProgressbarWithChildren">
              <div
                style={{ position: "relative", width: "100%", height: "100%" }}
              >
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
                      stroke: "#d6d6d6", // لون فاتح للحدود
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
                    alt="html"
                    style={{ width: "30px", marginTop: "-5px" }}
                  />
                  <div style={{ fontSize: "12px", marginTop: "-5px" }}>
                    <strong>85%</strong>
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
              <div
                style={{ position: "relative", width: "100%", height: "100%" }}
              >
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
                      stroke: "#d6d6d6", // لون فاتح للحدود
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
                    <strong>80%</strong>
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
              <div
                style={{ position: "relative", width: "100%", height: "100%" }}
              >
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
                      stroke: "#d6d6d6", // لون فاتح للحدود
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
                    alt="js"
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
              <div
                style={{ position: "relative", width: "100%", height: "100%" }}
              >
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
                      stroke: "#d6d6d6", // لون فاتح للحدود
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
              <div
                style={{ position: "relative", width: "100%", height: "100%" }}
              >
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
                      stroke: "#d6d6d6", // لون فاتح للحدود
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
                    alt="ts"
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
              <div
                style={{ position: "relative", width: "100%", height: "100%" }}
              >
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
                      stroke: "#d6d6d6", // لون فاتح للحدود
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
                    alt="bootstrap"
                    style={{ width: "30px", marginTop: "-5px" }}
                  />
                  <div style={{ fontSize: "12px", marginTop: "-5px" }}>
                    <strong>80%</strong>
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
              <div
                style={{ position: "relative", width: "100%", height: "100%" }}
              >
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
                      stroke: "#d6d6d6", // لون فاتح للحدود
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
                    alt="Git"
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
              <div
                style={{ position: "relative", width: "100%", height: "100%" }}
              >
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
                      stroke: "#d6d6d6", // لون فاتح للحدود
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
      <div className="absolute right-[-10px] top-[-15px]">
        <MySocial />
      </div>
    </div>
  );
};

export default PersonInfo;
