import React from "react"
import { images } from "../../constants"
import { SubHeading } from "../../components"
import "./Chef.css"

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" className="chef__img" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Owner wisdom" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote"></img>
          <p className="p__opensans">
            <br />
            Indulge in the art of brunch at Za Lokal Brunch, where mornings
            become extraordinary and flavors come alive. We believe that brunch
            is more than just a meal—it's a delightful fusion of breakfast's
            charm and lunch's leisure, a celebration of lazy Sundays and
            cherished moments shared with loved ones. Step into our inviting
            space, where the aroma of freshly brewed coffee mingles with the
            tantalizing scents of sizzling bacon and fluffy pancakes. Our
            dedicated team of culinary artisans have crafted a menu that
            showcases the best of both breakfast and lunch, offering a symphony
            of flavors and a symposium of choices.
            <br />
          </p>
        </div>

        <div className="app__chef-sign">
          <p>Bogdan Cservenschi</p>
          <p className="p__opensans">Founder & PR</p>
          <img src={images.sign} alt="sign" className="owner__sign" />
        </div>
      </div>
    </div>
  </div>
)

export default Chef
