import React from 'react'
import { Link } from 'gatsby'
import css from '../styles/header.module.less'

export default () => (
  <header className={css.header}>
    <h1 className={css.title}>My Blog</h1>
    <nav>
      <ul className={css.navList}>
        <li>
          <Link
            className={css.navItem}
            activeClassName={css.navItem__active}
            to="/"
          >
            Main
          </Link>
        </li>
        <li>
          <Link
            className={css.navItem}
            activeClassName={css.navItem__active}
            to="/blog"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            className={css.navItem}
            activeClassName={css.navItem__active}
            to="/about"
          >
            About Me
          </Link>
        </li>
        <li>
          <Link
            className={css.navItem}
            activeClassName={css.navItem__active}
            to="/contacts"
          >
            My Contacts
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)
