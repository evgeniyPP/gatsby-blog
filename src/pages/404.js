import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'
import css from '../styles/404.module.less'

export default () => {
  return (
    <Layout>
      <Head title={'404'} />
      <h1 className={css.title}>404. Такой страницы не существует</h1>
      <p className={css.homeLink}>
        <Link to="/">Вернуться на главную</Link>
      </p>
    </Layout>
  )
}
