import React from "react";
import "./PersonInfo.css"

const skills = [
  { value: 90, color: "orange", label: "HTML" },
  { value: 90, color: "#1DA1F2", label: "CSS" },
  { value: 80, color: "#F7DF1E", label: "JavaScript" },
  { value: 70, color: "red", label: "Git" },
  { value: 70, color: "#563D7C", label: "Bootstrap" },
  { value: 70, color: "#3178C6", label: "TypeScript" },
  { value: 80, color: "#61DAFB", label: "React" },
];

const Skills = () => {
  return (
    <div className="skills-container">
      {skills.map((skill, index) => (
        <div className="skill-circle" key={index}>
          <div
            className="progress-circle"
            style={{
              background: `conic-gradient(${skill.color} ${skill.value}%, transparent ${skill.value}%)`,
            }}
          >
            <div className="inner-circle">
              <span className="skill-value">{skill.value}%</span>
            </div>
          </div>
          <span className="skill-label">{skill.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Skills;
