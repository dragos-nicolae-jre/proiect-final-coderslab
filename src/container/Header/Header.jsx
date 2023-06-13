import React from "react"
import "./Header.css"
import { SubHeading } from "../../components"
import { images } from "../../constants"

const Header = () => (
  <div className="app__header app__wrapper app__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Try za best dishes" />
      <h1 className="app__header-h1">Za Key to gorgie Brunch</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Sunday brunch is the best reward for the previous week of working hard.
      </p>
      <a
        href="https://www.meniudigital.ro/zalokal"
        rel="noreferrer"
        target="_blank"
      >
        <button className="custom__button" type="button">
          The Bunch Brunch.
        </button>
      </a>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" className="wrapper__img"></img>
    </div>
  </div>
)

export default Header
