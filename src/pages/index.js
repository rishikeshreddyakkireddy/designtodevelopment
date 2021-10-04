import * as React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../scss/styles.scss"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Container className="row row-cols-md-2 row-cols-1 justify-content-between">
      <Container className="align-items-start my-auto" fluid>
        <Row>
          <h1 className="text-center text-md-start title-sm">
            The Most Secure <span>&</span>
          </h1>
          <h1 className="text-center text-md-start title-sm">
            Secure Crypto Wallet.
          </h1>
        </Row>
        <Row>
          <p className="text-subtitle mt-2">
            Buy, store, collect NFTs, exchange & earn crypto.
          </p>
          <b className="text-subtitle mt-1 header">
            🔥 New Token Airdropping Today!{" "}
            <Link to="#" className="text-decoration-none">
              <span className="text-orange ml-2">
                Join Now{" "}
                <i
                  className="bi-arrow-right"
                  role="img"
                  aria-label="join now"
                />
              </span>
            </Link>
          </b>
        </Row>
        <Row className="mt-md-5 mt-2 d-flex align-items-baseline sponsors mb-3 mb-md-0">
          <Col md={4}>
            <span className="d-inline">Supported By</span>
          </Col>
          <Col md={8}>
            <StaticImage
              src="../images/companies.png"
              quality={100}
              formats={["auto", "webp", "avif"]}
              alt="cryptocurrency related companies"
              className="mt-1"
            />
          </Col>
        </Row>
      </Container>
      <Container fluid className="d-flex justify-content-end">
        <StaticImage
          src="https://user-images.githubusercontent.com/83630220/135728042-63450a5c-1dd9-42e9-92f2-6f22b7cdc8f3.png"
          width={330}
          quality={100}
          formats={["auto", "webp", "avif"]}
          alt="Crypted mobile app"
          style={{ marginBottom: `1.45rem` }}
        />
      </Container>
    </Container>
  </Layout>
)

export default IndexPage
