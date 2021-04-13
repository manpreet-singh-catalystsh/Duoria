import * as React from "react"
import "./style.scss"
import { Button } from "../button/button"
import "../../styles/index.scss"

import I1 from "../../images/Merchants/I1.png"
import I2 from "../../images/Merchants/I2.png"
import I3 from "../../images/Merchants/I3.png"
import I4 from "../../images/Merchants/I4.png"
import I5 from "../../images/Merchants/I5.png"
import I6 from "../../images/Merchants/I6.png"
import I7 from "../../images/Merchants/I7.png"
import I8 from "../../images/Merchants/I8.png"

const Merchants = () => {
  let data = [
    { image: I1, type: "RESTAURANT", name: "Business Name" },
    { image: I2, type: "RESTAURANT", name: "Business Name" },
    { image: I3, type: "RESTAURANT", name: "Business Name" },
    { image: I4, type: "RESTAURANT", name: "Business Name" },
    { image: I5, type: "ACTIVITY", name: "Business Name" },
    { image: I6, type: "SPA AND MASSAGE", name: "Business Name" },
    { image: I7, type: "ACTIVITY", name: "Business Name" },
    { image: I8, type: "ACTIVITY", name: "Business Name" },
  ]
  return (
    <div className="merchant-container" id="Merchants">
      <h2>Merchants</h2>
      <div className="image-gallery">
        {data.map(element => {
          return (
            <div className="image-card">
              <img src={element.image} alt="image"></img>
              <span className="type">{element.type}</span>
              <span className="name">{element.name}</span>
            </div>
          )
        })}
      </div>
      <p className="merchant-bottom">
        Don’t see a merchant that you like? Request one here.
      </p>
      {Button("Request merchant")}
    </div>
  )
}

export default Merchants
