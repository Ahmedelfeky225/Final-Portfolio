import "./modalMore.css";
// import { Carousel, IconButton } from "@material-tailwind/react";
import { AnimatePresence, motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { limitDesc } from "../../utils/functions";
const ModalMore = ({ dataProject, setShowModalMore }) => {
  const {
    projectTitle,
    linkLiveProject,
    linkProjectInGithub,
    sliderImages,
    detailsProjectDes,
  } = dataProject;
  return (
    <div className="modal-overlay ">
      <AnimatePresence>
        <motion.div
          className="modal-more"
          layout
          initial={{ transform: "scale(0)" }}
          animate={{ transform: "scale(1)" }}
          transition={{ type: "spring", damping: 8, stiffness: 50 }}
        >
          {
            <div
              onClick={() => {
                setShowModalMore(false);
              }}
            >
              <button className="icon-close" />
            </div>
          }
          <div className="detailsProject">
            <h1 className="title">{projectTitle}</h1>
            <div className="scrollP">
              <p
                className="sub-title max-w-5xl text-center mx-auto h-full"
                style={{ lineHeight: 1.6 }}
              >
                {limitDesc(detailsProjectDes, 400)}
              </p>
            </div>
            <div className="links-icons">
              <a href={linkLiveProject} target="_blank">
                <div className="main-icon">
                  <div className="icon">
                    <span className="icon-link"></span>
                  </div>
                  Demo
                </div>
              </a>
              <a href={linkProjectInGithub} target="_blank">
                <div className="main-icon">
                  <div className="icon">
                    <span className="icon-github"></span>
                  </div>
                  Git
                </div>
              </a>
            </div>
          </div>

          <div className="relative w-full">
            <Swiper
              modules={[Navigation, Pagination, Keyboard]}
              navigation={{
                nextEl: ".btnNext",
                prevEl: ".btnPrev",
              }}
              pagination={{ clickable: true, el: ".custom-pagination" }}
              keyboard={{ enabled: true }}
              speed={600}
              className="carousel-container"
            >
              {sliderImages.map((img, idx) => (
                <SwiperSlide key={`$${idx}`}>
                  <div className="contain-images h-full flex items-center justify-center mx-auto rounded-md">
                    <img
                      src={img}
                      alt={`slide-${idx}`}
                      className="img mx-auto rounded-md object-cover"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* arrows */}
            <div className="btnPrev hidden md:flex absolute top-1/2 -left-5 -translate-y-1/2  items-center p-2 cursor-pointer z-10 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-3 h-3 md:h-5 md:w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </div>

            <div className="btnNext hidden md:flex absolute top-1/2 -right-5 -translate-y-1/2 items-center p-2 cursor-pointer z-10 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-3 h-3 md:h-5 md:w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
            {/* pagination bullets */}

            <div className="custom-pagination block md:hidden mt-4" />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ModalMore;
