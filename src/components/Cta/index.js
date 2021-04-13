import * as React from "react"
import "./style.scss"
import "../../styles/index.scss"
import Logo from "../../images/Logo.png"
import { Button2 } from "../Button/button.js"

const Cta = () => {
  return (
    <div className="Cta-container">
      <img src={Logo}></img>
      <div className="Cta-content">
        Ready to join hundreds of people who saved money on Duoria?
      </div>
      <div className="Cta-button">{Button2("Get Started")}</div>
    </div>
  )
}

export default Cta
