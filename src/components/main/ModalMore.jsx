import "./modalMore.css"
import { Carousel,IconButton  } from "@material-tailwind/react";
import {AnimatePresence, motion} from "motion/react"

const ModalMore = ({dataProject,setShowModalMore}) => {
    const {projectTitle,linkLiveProject,linkProjectInGithub,sliderImages,detailsProjectDes} =dataProject;
  return (
    <div className="modal-overlay">
      <AnimatePresence>
      <motion.div className="modal-more"
      layout
      initial={{transform:"scale(0)"}}
      animate={{transform:"scale(1)"}}
      transition={{type:"spring",damping:8,stiffness:50}}
      >
      {<div onClick={()=>{setShowModalMore(false)}}><button className="icon-close"/></div>}
        <div className="detailsProject">
        <h1 className="title">{projectTitle}</h1>
       <div className="scrollP">
       <p className="sub-title max-w-5xl text-center mx-auto h-full" style={{lineHeight:1.6}}>
            {detailsProjectDes}
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
    
<Carousel
  className="carousel-container"
  prevArrow={({ handlePrev }) => (
    <IconButton
      variant="text"
      color="white"
      size="md"
      onClick={handlePrev}
      className="btnBack !absolute top-2/4 left-0 -translate-y-2/4 bg-[rgb(93,188,252)] hover:bg-[rgb(67,169,238)] flex items-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-3 h-3 md:h-5 md:w-5 "
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
        />
      </svg>
    </IconButton>
  )}
  nextArrow={({ handleNext }) => (
    <IconButton
      variant="text"
      color="white"
      size="md"
      onClick={handleNext}
      className="btnTop !absolute top-2/4 !right-0 -translate-y-2/4 bg-[rgb(93,188,252)] hover:bg-[rgb(67,169,238)]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-3 h-3 md:h-5 md:w-5 "
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
        />
      </svg>
    </IconButton>
  )}
>
  {sliderImages.map((img, idx) => (
    <div key={idx} className="contain-images h-full flex items-center justify-center mx-auto rounded-md">
      <img
        src={img}
        alt={`slide-${idx}`}
        className="img mx-auto rounded-md object-cover"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  ))}
</Carousel>
       </motion.div>
       </AnimatePresence>
       </div>
  )
}

export default ModalMore