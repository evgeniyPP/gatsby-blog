import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'
import css from '../styles/index.module.less'

export default () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          techologies
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title={'Главная'} />
      <h1>Привет.</h1>
      <h2>
        Меня зовут Женя. <span className={css.iAmDev}>Я веб-разработчик</span>
      </h2>
      <p>Я знаю {data.site.siteMetadata.techologies} и т.д.</p>
    </Layout>
  )
}
