import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

export default () => (
  <Fragment>
    <Layout>
      <h3>About Me</h3>
      <p>Here's the info about me</p>
      <Link to="/contacts">My contacts</Link>
    </Layout>
  </Fragment>
)
