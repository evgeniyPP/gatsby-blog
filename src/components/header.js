import React from 'react'
import { Link } from 'gatsby'

export default () => (
  <header>
    <h4>My Blog</h4>
    <nav>
      <ul>
        <li>
          <Link to="/">Main</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/about">About Me</Link>
        </li>
        <li>
          <Link to="/contacts">My Contacts</Link>
        </li>
      </ul>
    </nav>
  </header>
)
