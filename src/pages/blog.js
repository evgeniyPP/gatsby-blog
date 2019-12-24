import React, { Fragment } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import css from '../styles/blog.module.less'

export default () => {
  const postsRes = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "DD/MM/YYYY")
            shortDescription {
              shortDescription
            }
          }
        }
      }
    }
  `)

  const posts = postsRes.allContentfulBlogPost.edges
    .map(edge => {
      const { title, slug, publishedDate, shortDescription } = edge.node
      return (
        <li key={slug} className={css.post}>
          <Link to={`/blog/${slug}`}>
            <h4>{title}</h4>
            <p className={css.post__date}>{publishedDate}</p>
            <p className={css.post__excerpt}>
              {shortDescription.shortDescription}
            </p>
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
