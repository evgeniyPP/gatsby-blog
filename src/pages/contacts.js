import React, { Fragment } from 'react'
import Layout from '../components/layout'
import css from '../styles/contacts.module.less'

export default () => (
  <Fragment>
    <Layout>
      <h2>Связаться со мной</h2>
      <p>
        Здесь будет мои контакты. Тут уже есть мой старый твиттер (
        <a
          className={css.twitterLink}
          href="https://twitter.com/aysanru"
          target="_blank"
          rel="noopener noreferrer"
        >
          @aysanru
        </a>
        )!
      </p>
    </Layout>
  </Fragment>
)
