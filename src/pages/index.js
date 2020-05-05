import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import {useDataQuery} from '../components/Hooks/useDataQuery'
import get from 'lodash/get'
import {Header} from 'semantic-ui-react'
import ProductList from '../components/ProductList'
import SEO from '../components/SEO'

import Layout from '../components/Layout'

const StoreIndex = ({location}) => {
  const data = useDataQuery()

  const siteTitle = get(data, 'site.siteMetadata.title')
  const products = get(data, 'allContentfulActivity.edges')

  return (
    <Layout location={(location, products)}>
      <SEO title={siteTitle} />
      <Header
        as="h3"
        icon
        textAlign="center"
        style={{
          marginBottom: '2em',
        }}
      >
        <Header.Content
          style={{
            width: '60%',
            margin: '0 auto',
          }}
        ></Header.Content>
      </Header>
      <ProductList products={products} />
    </Layout>
  )
}
export default StoreIndex
