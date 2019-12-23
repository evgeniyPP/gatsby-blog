import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

export default () => (
  <Fragment>
    <Layout>
      <h1>About Me</h1>
      <p>Here's the info about me</p>
      <Link to="/contacts">My contacts</Link>
    </Layout>
  </Fragment>
)
