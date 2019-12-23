import React, { Fragment } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default () => (
  <Fragment>
    <Layout>
      <h1>Hello.</h1>
      <h2>
        I'm <Link to="/about">Eugene</Link>. And I do know React
      </h2>
      <Link to="/contacts">Contact me</Link>
    </Layout>
  </Fragment>
)
