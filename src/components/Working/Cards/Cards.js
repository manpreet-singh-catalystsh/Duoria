import * as React from "react"
import "./style.scss"
import feature from "../../../images/Working/feature.png"
import addFriend from "../../../images/Working/addFriend.png"
import message from "../../../images/Working/message.png"
import multiusers from "../../../images/Working/multiusers.png"
import tag from "../../../images/Working/tag.png"
import lineup from "../../../images/Working/lineup.png"
import linedown from "../../../images/Working/linedown.png"

const WorkingCards = () => {
  let data = [
    {
      img: multiusers,
      heading: "Start a Group Buy",
      content: "Click “Start a Group Buy” above and fill out the form",
      nextline: lineup,
    },
    {
      img: message,
      heading: "We contact you",
      content:
        "We will contact you when your Group Buy has been created on WhatsApp/Telegram",
      nextline: linedown,
    },
    {
      img: addFriend,
      heading: "Invite",
      content: "Invite your friends to the group to accumulate more discounts",
      nextline: lineup,
    },
    {
      img: tag,
      heading: "Recieve discounts",
      content: "Receive e-gift and cashback via phone",
      nextline: null,
    },
  ]

  return (
    <div className="working-cards-container">
      {data.map(element => {
        return (
          <div className="working-card">
            <div className="card-image">
              <div className="cardimage-bg">
                <img className="card-icon" src={element.img}></img>
              </div>
              <img className="lines-image" src={element.nextline}></img>
            </div>
            <span className="card-heading">{element.heading}</span>
            <span className="card-content">{element.content}</span>
          </div>
        )
      })}
    </div>
  )
}

export default WorkingCards
