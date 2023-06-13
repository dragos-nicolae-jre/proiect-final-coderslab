import React from "react"
import { SubHeading } from "../../components"
import { images } from "../../constants"

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: "2rem" }}>
        We're here
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">
          Calea Victoriei 214. District 1. Bucharest.
        </p>
        <p
          className="p__cormorant"
          style={{ color: "#DCCA87", margin: "1.5rem 0" }}
        >
          Opening Hours
        </p>
        <p className="p__opensans">Mon - Fri: 12:00 - 24:00</p>
        <p className="p__opensans">Sat - Sun: 9:00 - 22:30</p>
      </div>

      <a
        href="https://www.google.ro/maps/dir//Z%C4%83+Lokal,+Calea+Victoriei+no+214,+Bucure%C8%99ti+010099/@44.4499768,26.0855873,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x40b1ff55a41697a1:0x80b3950c91c86f77!2m2!1d26.0881622!2d44.4499768?hl=ro&entry=ttu"
        rel="noreferrer"
        target="_blank"
      >
        <button
          className="custom__button"
          type="button"
          style={{ marginTop: "1.5rem" }}
        >
          Come to Us
        </button>
      </a>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="findus"></img>
    </div>
  </div>
)

export default FindUs
