import * as React from "react"
//import { StaticImage } from "gatsby-plugin-image"
import Header from "../components/Header"
import Logos from "../components/Logos"
import Working from "../components/Working"
import Merchants from "../components/Merchants"
import WhySave from "../components/WhySave"
import PeopleSaying from "../components/PeopleSaying"
import Faq from "../components/Faq/index"
import Cta from "../components/Cta/index"
import Footer from "../components/Footer/index"

const IndexPage = () => (
  <div>
    <Header />
    <Logos />
    <Working />
    <Merchants />
    <WhySave />
    <PeopleSaying />
    <Faq />
    <Cta />
    <Footer />
  </div>
)

export default IndexPage
