import React from "react"

import Banner from "../../organisms/banner/banner"
import Carousel from "../../organisms/carousel/carousel"
import Footer from "../../organisms/footer/footer"
import Header from "../../organisms/header/header"

const Homepage = ({ banner, carousel, footer, header }) => (
  <>
    <Header {...header} />
    <Banner {...banner} />
    <Carousel {...carousel} />
    <Footer {...footer} />
  </>
)

export default Homepage
