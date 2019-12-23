import React from 'react'
import css from '../styles/footer.module.less'

const Footer = () => (
  <footer>
    <p className={css.paragraph}>
      Создано на Gatsby.js <span className={css.copyLeft}>©</span> 2019
    </p>
  </footer>
)

export default Footer
