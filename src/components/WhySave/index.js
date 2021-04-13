import * as React from "react"
import "./style.scss"
import "../../styles/index.scss"
import img3 from "../../images/WhySave/img3.png"
import multiusers from "../../images/WhySave/multiusers.png"
import sale from "../../images/WhySave/sale.png"
import { element } from "prop-types"

const WhySave = () => {
  let data = [
    { image: sale, text: "Discount upto 100%" },
    { image: multiusers, text: "Save with friends" },
    { image: img3, text: "Shop local, save local" },
  ]
  return (
    <div className="whysave-container">
      <div className="left-container">
        <h2>Why Save With Douria</h2>
      </div>
      <div className="right-container">
        {data.map(element => {
          return (
            <div className="whysave-card">
              <img className="whysave-icon" src={element.image}></img>
              <span>{element.text}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default WhySave
