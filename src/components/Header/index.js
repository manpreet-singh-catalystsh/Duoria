import * as React from "react"
import "./style.scss"
import "../../styles/index.scss"
import Group from "../../images/Group.png"
import { Button2 } from "../Button/button"
import Navigation from "../NavigationBar/index"

const Header = () => {
  return (
    <div className="container">
      <Navigation></Navigation>
      <div className="header-container">
        <div className="saveupto-container">
          <div className="internal-text">
            <p>
              <h1>Save up to 100% on restaurants and activities</h1>
            </p>
            <p className="save-element-content">
              Get your friends together to buy at a discount. Enjoy great deals
              at Din Tai Fung, Haidilao, Starbucks, and many more.
            </p>
          </div>
          {Button2("Start a Group Buy")}
        </div>
        <div className="burger-container">
          <img className="burger-image" src={Group}></img>
        </div>
      </div>
    </div>
  )
}

export default Header
