import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

export default props => {
  const { frontmatter, html } = props.data.markdownRemark
  return (
    <Layout>
      <h2>{frontmatter.title}</h2>
      <p>{frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </Layout>
  )
}
