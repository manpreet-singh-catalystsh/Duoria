import * as React from "react"
import "./style.scss"
import Bking from "../../images/Headerlogos/Bking.png"
import JolliB from "../../images/Headerlogos/JolliB.png"
import MacD from "../../images/Headerlogos/MacD.png"
import StarB from "../../images/Headerlogos/StarB.png"
import Taco from "../../images/Headerlogos/Taco.png"

const HeaderLogos = () => {
  let ary = [Taco, Bking, MacD, JolliB, StarB]
  ary = [...ary, ...ary]

  return (
    <div className="header-logos">
      {ary.map((element, key) => {
        return (
          <img className="logo-img" src={element} key={"logo-" + key}></img>
        )
      })}
    </div>
  )
}

export default HeaderLogos
