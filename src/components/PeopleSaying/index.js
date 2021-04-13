import * as React from "react"
import "./style.scss"
import "../../styles/index.scss"
import b from "../../images/PeopleSaying/b.png"
import CardCarousel from "./Carousel/index"
import g1 from "../../images/PeopleSaying/g1.png"
import g2 from "../../images/PeopleSaying/g2.png"
import g3 from "../../images/PeopleSaying/g3.png"
import g4 from "../../images/PeopleSaying/g4.png"

let data = [{ image: g3 }, { image: g3 }, { image: g2 }, { image: g4 }]

const PeopleSaying = () => {
  return (
    <div className="peoplesaying-container" id="PeopleSaying">
      <img className="quote-icon" src={b}></img>
      <p>
        <h2>What People Are Saying</h2>
      </p>
      <div className="carousal-container">
        <CardCarousel data={data} />
      </div>
    </div>
  )
}

export default PeopleSaying
