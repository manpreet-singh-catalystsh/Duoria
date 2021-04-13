import * as React from "react"
import "./style.scss"
import { navLinks } from "./data"
import { Button } from "../Button/button"
import "../../styles/index.scss"
import scrollTo from "gatsby-plugin-smoothscroll"
import Logo from "../../images/Logo.png"

const Navigation = () => {
  return (
    <div className="navbar-container">
      <img src={Logo}></img>
      <div className="navbar-links-container">
        {navLinks.map((element, key) => {
          return (
            <span
              className="navlink"
              key={"link" + key}
              onClick={() => scrollTo(element.Id)}
            >
              {element.text}
            </span>
          )
        })}
        {Button("Group Buy")}
      </div>
    </div>
  )
}

export default Navigation
