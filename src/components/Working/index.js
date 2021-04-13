import * as React from "react"
import "./style.scss"
import "../../styles/index.scss"
import WorkingCards from "./Cards/Cards"
const Working = () => {
  return (
    <div class="working-container" id="Working">
      <h2>How it works</h2>
      <p className="working-content">
        If you have a group of 2 or more people buying from any one of the
        merchants listed above, you can get at least 20% discount.
      </p>
      <p className="working-content">
        For every person who enters the Group Buy{" "}
        <b>automatically gets a 20% discount.</b>
        For every person that a person adds to the Group Buy, the inviter
        receives an <b>additional 20%</b>, to a max of <b>a 100% discount.</b>
      </p>
      <p className="working-content">
        <span className="note">
          Note: you don't have to go to the restaurant or activity together.
        </span>
      </p>
      <WorkingCards></WorkingCards>
    </div>
  )
}

export default Working
