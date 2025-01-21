import { useForm, ValidationError } from "@formspree/react";
import "./contact.css"
import Lottie from "lottie-react";
import doneAnimation  from "../../Animations/done.json"
import contactAnimation from "../../Animations/contact.json"
const Contact = () => {
  const [state, handleSubmit] = useForm("xwppawzn");
  
  return (
    <section className="contact-us" id="contact">
      <h1 className="title">
        <span className="icon-envelope"></span>
        Contact us
      </h1>
      <p className="sub-title">
        Contact us for more information and Get notified when I publish something new.
      </p>

      <div className="flex" style={{justifyContent:"space-between"}}>
      <form onSubmit={handleSubmit}>
        <div className="flex">
          <label htmlFor="email">Email Address:</label>
          {/* <div> */}
          <input autoComplete="off" required type="email" id="email"  name="email"/>
          <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
        style={{color:"#e73232",marginTop: "3px",fontWeight: "800",fontSize: "13px",marginLeft: "1rem"}}
      />
          {/* </div> */}
        </div>
        <div className="flex" style={{ marginTop: "24px"}}>
          <label htmlFor="message">Your Message:</label>
          <textarea required id="message"  name="message" />
          <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
        </div>
        <button className="submit" disabled={state.submitting}>
          {state.submitting ? "Submitting..." : "Submit"}
        </button>
         {(state.succeeded) && <section className="flex success-message" style={{fontSize:"18px",color:"#139282",fontWeight:"500", marginTop:"1.7rem"}}>
          <Lottie loop={false} style={{height:39}} animationData={doneAnimation} />
         Your Message has been sent Successfully!
         </section>}
      </form>
      <div className="animation-contact">
      <Lottie  style={{height:355}} animationData ={contactAnimation} />
      </div>
      </div>
    </section>
  )
}

export default Contact