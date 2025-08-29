import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import "./main.css";
import myProjects, { buttonCategories } from "../../data";
import { textSlicer } from "../../utils/functions";
import ModalMore from "./ModalMore";
const Main = () => {
  const [currentActive, setCurrentActive] = useState(0);
  const [arr, setArr] = useState(myProjects);
  const [showModelMore, setShowModalMore] = useState(false);
  const [dataProject, setDataProject] = useState({});

  const handleClick = (buttonCategory) => {
    if (buttonCategory === "all") {
      setArr(myProjects);
    } else {
      const filterArr = myProjects.filter((item) => {
        const filterProject = item.category.find((myItem) => {
          return myItem === buttonCategory;
        });
        return filterProject === buttonCategory;
      });
      setArr(filterArr);
    }
  };

  return (
    <main className="flex">
      <section className="flex left-section" id="projects">
        {buttonCategories.map((btnInfo, i) => {
          const { btnCategory, categoryName } = btnInfo;
          return (
            <button
              key={i}
              className={currentActive === i ? "active" : null}
              onClick={() => {
                setCurrentActive(i);
                handleClick(categoryName);
              }}
            >
              {btnCategory}
            </button>
          );
        })}
      </section>
      <section className="right-section flex">
        <AnimatePresence>
          {arr.map((item, idx) => {
            const {
              projectTitle,
              imgPath,
              projectDesc,
              linkLiveProject,
              linkProjectInGithub,
            } = item;
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0.4)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 8, stiffness: 50 }}
                key={idx}
                className="card"
              >
                <img width={256} height={140} src={imgPath} alt="" />
                <div className="box" style={{ width: "256px" }}>
                  <h1 className="title">{projectTitle}</h1>
                  <p
                    className="sub-title line-clamp-3"
                    style={{ lineHeight: "1.4" }}
                  >
                    {projectDesc}
                  </p>
                  <div className="icons flex">
                    <div className="flex" style={{ gap: "1rem" }}>
                      <a href={linkLiveProject} target="_blank">
                        <div className="icon-link"></div>
                      </a>
                      <a href={linkProjectInGithub} target="_blank">
                        <div className="icon-github"></div>
                      </a>
                    </div>
                    <a
                      className="link flex"
                      onClick={() => {
                        setShowModalMore(true);
                        setDataProject(item);
                      }}
                    >
                      More
                      <span className="icon-arrow-right"></span>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
      {showModelMore && (
        <ModalMore
          dataProject={dataProject}
          setShowModalMore={setShowModalMore}
        />
      )}
    </main>
  );
};
export default Main;
