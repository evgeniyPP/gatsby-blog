import React from 'react'
import Header from './header'
import Footer from './footer'
import '../styles/basic.less'
import css from '../styles/layout.module.less'

export default ({ children }) => (
  <div className={css.container}>
    <div className={css.content}>
      <Header />
      {children}
    </div>
    <Footer />
  </div>
)
