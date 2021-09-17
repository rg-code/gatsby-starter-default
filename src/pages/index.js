import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Spectrum The Radiology Clinic</h1>
    <p>This website, consultation platform, and scheduling system is a work in progress.</p>
    <p>Located at 75, Lala Lajpat Rai Rd, Lajpat Kunj, Civil Lines, Agra. Please leave a google review, if you can. Thank you!</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="Spectrum Radiology Clinic"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
    </p>
  </Layout>
)

export default IndexPage
