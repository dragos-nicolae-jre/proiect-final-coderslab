import React from "react"
import { images } from "../../constants"
import "./AboutUs.css"

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g letter"></img>
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about__spoon" className="spoon_img"></img>
        <p className="p__opensans">
          Brunch is not just a meal, it's an invitation to slow down, embrace
          the present moment, and nourish both body and soul. It's a time when
          friends and family gather around the table, sharing stories, laughter,
          and good food. Our bistro is dedicated to curating a brunch experience
          that transports you to a world of comfort and indulgence. From the
          first sip of a perfectly brewed coffee to the last bite of a
          delectable pastry, we aim to create a symphony of flavors that lingers
          on your palate and brings a smile to your face. Brunch is a
          celebration of life's simple pleasures—a time to savor the joys of
          good
          <br />
          <br />
        </p>
        <a
          href="https://www.meniudigital.ro/zalokal"
          rel="noreferrer"
          target="_blank"
        >
          <button className="custom__button" type="button">
            About Us.
          </button>
        </a>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife"></img>
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about__spoon" className="spoon_img"></img>
        <p className="p__opensans">
          The history of our Za Lokal Brunch is rooted in a deep appreciation
          for the tradition of brunch itself. Brunch, a delightful fusion of
          breakfast and lunch, has a rich and diverse heritage that spans
          cultures and centuries. It evolved as a leisurely meal that allowed
          people to gather and celebrate the joy of good food and good company.
          Inspired by this timeless concept, our bistro was born out of a desire
          to create a space where the art of brunch could truly flourish. With
          every dish we serve, we pay homage to the history and essence of
          brunch, blending classic flavors with modern twists, and inviting our
          guests to embark on a culinary journey that transcends time.
        </p>
        <a
          href="https://www.meniudigital.ro/zalokal"
          rel="noreferrer"
          target="_blank"
        >
          <button className="custom__button" type="button">
            Za Story.
          </button>
        </a>
      </div>
    </div>
  </div>
)

export default AboutUs
