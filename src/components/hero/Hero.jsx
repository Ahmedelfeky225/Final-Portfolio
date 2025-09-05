import "./hero.css";
import developerAnimation from "../../Animations/develoeper.json";
import Lottie from "lottie-react";
import { useRef } from "react";
import { motion } from "motion/react";
import MySocial from "../MySocial/MySocial";

const Hero = () => {
  const lottieRef = useRef(null);
  return (
    <section className="hero flex" id="about">
      <div className="left-section ">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 8, type: "spring", stiffness: 40 }}
            src="./avatar.jpg"
            className="avatar"
            alt=""
          />
          <div className="icon-verified"></div>
        </div>
        <div className="title-info">
          <motion.h2 className="title" style={{ marginBottom: "10px" }}>
            Hey I'm Ahmed Elfeky
          </motion.h2>
          <motion.h4
            style={{ marginBottom: "10px" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ damping: 8, type: "spring", stiffness: 30 }}
          >
            react web developer
          </motion.h4>
        </div>
        <p className="sub-title">
          Web Developer specializing in React and Next.js, passionate
          about building responsive and interactive web applications. I also
          have knowledge of WordPress for creating and managing websites.
          Currently working part-time remotely at Qomra, a company based in the
          UAE, while continuously improving my skills through self-learning and
          hands-on projects.
        </p>
        <MySocial />
      </div>
      <div className="right-section">
        <Lottie
          lottieRef={lottieRef}
          className="animation-dev"
          animationData={developerAnimation}
          onLoadedImages={() => {
            lottieRef.current?.setSpeed(0);
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
