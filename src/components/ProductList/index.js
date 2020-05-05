/* eslint-disable camelcase */
import React from 'react'
import {Card, Image} from 'semantic-ui-react'
import Img from 'gatsby-image'
import {Link} from 'gatsby'

const mapProductsToItems = products =>
  products.map(({node: {id, title, price, cover}}) => {
    const itemPrice = price || null
    return {
      as: Link,
      to: `/product/${id}/`,
      // childKey: id,
      image: (
        <Image>
          <Img sizes={cover.fluid} alt={title} />
        </Image>
      ),
      header: title,
      meta: <Card.Meta style={{color: 'dimgray'}}>{itemPrice}</Card.Meta>,
    }
  })

export default ({products}) => (
  <Card.Group items={mapProductsToItems(products)} itemsPerRow={2} stackable />
)
