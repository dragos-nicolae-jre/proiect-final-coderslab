import React from "react"
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi"

import { FooterOverlay, Newsletter } from "../../components"
import { images } from "../../constants"
import "./Footer.css"

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">
          Calea Victoriei 214. District 1. Bucharest.
        </p>
        <p className="p__opensans"> +40770.557.931</p>
      </div>

      <div className="app__footer-links_logo">
        <img
          src={images.gericht}
          alt="footer_logo"
          className="footer__logo-img"
        />
        <p className="p__opensans">
          “If there is no struggle, there is no progress.” <br />
          “Little by little, a little becomes a lot.”
        </p>
        <img
          src={images.jre}
          alt="jre"
          className="jre__img"
          style={{ marginTop: "15px" }}
        />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday - Friday:</p>
        <p className="p__opensans">12:00 - 24:00</p>
        <p className="p__opensans">Saturday - Sunday:</p>
        <p className="p__opensans">9:00 - 22:30</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">
        2023 @BarocoCode - Special for CodersLab.
        <br />- All Rights Reserved -
      </p>
    </div>
  </div>
)

export default Footer
