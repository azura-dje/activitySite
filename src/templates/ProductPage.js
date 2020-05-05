/* eslint-disable react/jsx-props-no-spreading */

import React from 'react'
import {graphql} from 'gatsby'
import get from 'lodash/get'
import SEO from '../components/SEO'
import ProductSummary from '../components/ProductSummary'
import ProductAttributes from '../components/ProductAttributes'
import Layout from '../components/Layout'

class ProductPageTemplate extends React.PureComponent {
  render() {
    const productInfo = get(this, 'props.data.allContentfulActivity')
    const data = productInfo.edges[0].node
    // eslint-disable-next-line prefer-destructuring
    const slug = data.slug
    const image = get(data, '')

    const product = {
      ...data,
      id: data.id,
      image,
      header: data.title,
      price: data.price,
    }

    // if (!sizes) return null

    return (
      // eslint-disable-next-line react/destructuring-assignment
      <Layout location={this.props.location}>
        <SEO title={slug} />
        <ProductSummary {...product} />
        <ProductAttributes {...product} />
      </Layout>
    )
  }
}

export default ProductPageTemplate
export const pageQuery = graphql`
  query ProductsQuery($id: String!) {
    allContentfulActivity(filter: {id: {eq: $id}}) {
      edges {
        node {
          couple
          child
          duration
          description {
            json
          }
          group
          guide
          id
          price
          promotion
          slug
          subtitle
          ticket
          title
          transport
          type
        }
      }
    }
  }
`
