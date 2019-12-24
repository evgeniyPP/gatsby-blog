import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Layout from '../components/layout'
import Head from '../components/head'

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "DD/MM/YYYY")
      body {
        json
      }
    }
  }
`

export default props => {
  const { title, publishedDate, body } = props.data.contentfulBlogPost
  const options = {
    renderNode: {
      'embedded-asset-block': node => {
        const src = node.data.target.fields.file['en-US'].url
        const alt = node.data.target.fields.title['en-US']
        return <img src={src} alt={alt} />
      }
    }
  }

  return (
    <Layout>
      <Head title={title} />
      <h2>{title}</h2>
      <p>{publishedDate}</p>
      {documentToReactComponents(body.json, options)}
    </Layout>
  )
}
