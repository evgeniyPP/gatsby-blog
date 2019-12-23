import React, { Fragment } from 'react'
import Layout from '../components/layout'
import css from '../styles/index.module.less'

export default () => (
  <Fragment>
    <Layout>
      <h1>Привет.</h1>
      <h2>
        Меня зовут Женя. <span className={css.iAmDev}>Я веб-разработчик</span>
      </h2>
      <p>
        Я знаю HTML, CSS, vanilla JavaScript, React, Vue, Svelte, React Native и
        т.д.
      </p>
    </Layout>
  </Fragment>
)
