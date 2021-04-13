import React from "react"
import Slider from "react-slick"
import "./style.scss"

//  settings for slick carousel
var settings = {
  useTransform: true,
  dots: false,
  infinite: true,
  speed: 14000,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  autoplayspeed: 0,
  centerMode: false,
  cssEase: "linear",
  centerPadding: "-10%",
  arrows: false,

  slide: "div",
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 3.5,
      },
    },
    {
      breakpoint: 1250,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1060,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1.5,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        centerPadding: 0,
      },
    },
  ],
}

function CardCarousel({ data }) {
  const [currentMember, setCurrentMember] = React.useState(0)

  const handleChange = currentSlide => {
    setCurrentMember(currentSlide)
  }

  return (
    <Slider
      className="cardCarousel-slider"
      {...settings}
      afterChange={handleChange}
    >
      {data.map((item, index) => {
        return index % 2 == 0 ? (
          <div className="content-container" key={`${"card" + index}`}>
            <img className="evenImage" src={item.image} alt="image"></img>
          </div>
        ) : (
          <div className="content-container" key={`${"card" + index}`}>
            <img className="oddImage" src={item.image} alt="image"></img>
          </div>
        )
      })}
    </Slider>
  )
}

export default CardCarousel
