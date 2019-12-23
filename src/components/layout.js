import React, { Fragment } from 'react'
import Header from './header'
import Footer from './footer'
import '../styles/index.less'

export default ({ children }) => (
  <Fragment>
    <Header />
    {children}
    <Footer />
  </Fragment>
)
