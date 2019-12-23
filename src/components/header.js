import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import css from '../styles/header.module.less'

export default () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={css.header}>
      <h1 className={css.title}>{data.site.siteMetadata.title}</h1>
      <nav>
        <ul className={css.navList}>
          <li>
            <Link
              className={css.navItem}
              activeClassName={css.navItem__active}
              to="/"
            >
              Главная
            </Link>
          </li>
          <li>
            <Link
              className={css.navItem}
              activeClassName={css.navItem__active}
              to="/blog"
            >
              Блог
            </Link>
          </li>
          <li>
            <Link
              className={css.navItem}
              activeClassName={css.navItem__active}
              to="/about"
            >
              Обо мне
            </Link>
          </li>
          <li>
            <Link
              className={css.navItem}
              activeClassName={css.navItem__active}
              to="/contacts"
            >
              Контакты
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
