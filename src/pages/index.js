import * as React from "react"
//import { StaticImage } from "gatsby-plugin-image"
import Header from "../components/header"
import Logos from "../components/logos"
import Working from "../components/working"
import Merchants from "../components/merchants"
import WhySave from "../components/whySave"
import PeopleSaying from "../components/peopleSaying"
import Faq from "../components/faq/index"
import Cta from "../components/cta/index"
import Footer from "../components/footer/index"

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
