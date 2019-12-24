import React, { Fragment } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
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
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const posts = postsRes.allMarkdownRemark.edges
    .map(edge => {
      const { frontmatter, excerpt, fields } = edge.node
      const { title, date } = frontmatter
      return (
        <li key={fields.slug} className={css.post}>
          <Link to={`/blog/${fields.slug}`}>
            <h4>{title}</h4>
            <p className={css.post__date}>{date}</p>
            <p className={css.post__excerpt}>{excerpt}</p>
          </Link>
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
