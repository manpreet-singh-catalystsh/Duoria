import * as React from "react"
import "./style.scss"
import "../../styles/index.scss"

import Bg from "../../images/Footer/BG.png"
import D from "../../images/Footer/D.png"
import I from "../../images/Footer/I.png"
import T from "../../images/Footer/T.png"
import Y from "../../images/Footer/Y.png"

const Footer = () => {
  let data = [D, I, T, Y]
  return (
    <div className="footer-container">
      <div className="footer-content">
        <span className="footer-text">How it works</span>
        <span className="footer-text">Merchants</span>
        <span className="footer-text">About Us</span>
      </div>

      <div className="footer-icons">
        <img src={D} className="footer-icon"></img>
        <img src={I} className="footer-icon"></img>
        <img src={T} className="footer-icon"></img>
        <img src={Y} className="footer-icon"></img>
      </div>
    </div>
  )
}

export default Footer
