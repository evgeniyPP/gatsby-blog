import React, { Fragment } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import css from '../styles/blog.module.less'

export default () => {
  const postsRes = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            excerpt
          }
        }
      }
    }
  `)

  const posts = postsRes.allMarkdownRemark.edges
    .map(edge => {
      const { frontmatter, excerpt } = edge.node
      const { title, date } = frontmatter
      return (
        <li className={css.post}>
          <h4>{title}</h4>
          <p className={css.post__date}>{date}</p>
          <p className={css.post__excerpt}>{excerpt}</p>
        </li>
      )
    })
    .reverse()

  return (
    <Fragment>
      <Layout>
        <h2>Блог</h2>
        <ul className={css.posts}>{posts}</ul>
      </Layout>
    </Fragment>
  )
}
