import * as React from "react"
import "./style.scss"
import "../../styles/index.scss"
import Arrow from "../../images/Faq/Vector.png"
import { faqData } from "./data"

const Faq = () => {
  let Data = [...faqData]
  const expandFaq = index => {
    let tmpData = [...Data]
    tmpData[index].open = !tmpData[index].open

    document.getElementsByClassName("arrow")[index].style.transform = tmpData[
      index
    ].open
      ? "rotate(-180deg)"
      : "rotate(0deg)"

    document.getElementsByClassName("answer-container")[
      index
    ].style.height = tmpData[index].open ? "auto" : "0"
  }
  return (
    <div className="faq-container">
      <h1>FAQ</h1>
      {Data.map((element, index) => {
        return (
          <div
            className="faq-card"
            key={index}
            onClick={() => expandFaq(index)}
          >
            <p className="question-container">
              {element.question}
              <img className="arrow" src={Arrow}></img>
            </p>
            <p className="answer-container">{element.answer}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Faq
