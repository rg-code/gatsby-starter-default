import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Website, consultation platform, and scheduling system are currently works in progress.</h1>
    <p>The clinic is located at 75, Lala Lajpat Rai Rd, Lajpat Kunj, Civil Lines, Agra. Email: info@spectrum-radiology.com for questions or inquiries.</p>
    <p><a href="https://www.google.com/search?q=spectrum+radiology+clinic+agra&ei=yClEYYq-GaGS0PEPjpmUwAg&oq=spectrum+radiology+clinic+agra&gs_lcp=Cgdnd3Mtd2l6EAMyBQghEKABMgUIIRCgAToICAAQsAMQzQI6BQghEKsCOgUIIRCSAzoICCEQFhAdEB5KBQhAEgExSgQIQRgAUMAaWMMnYJYoaABwAHgAgAFwiAGpA5IBAzQuMZgBAKABAcgBBMABAQ&sclient=gws-wiz&ved=0ahUKEwiKwrm0pYXzAhUhCTQIHY4MBYgQ4dUDCA8&uact=5#lrd=0x3974772836c2dbbd:0x5771a387fa4d4638,1,,,">Please leave a google review, if you can. Thank you!</a></p>
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
