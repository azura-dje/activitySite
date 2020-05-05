import React from 'react'

import {Item, Label} from 'semantic-ui-react'

import AddToCart from '../AddToCart'

export default ({id, title, price}) => (
  <Item.Group>
    <Item style={{alignItems: 'center'}}>
      <Item.Content>
        <Item.Header>{title}</Item.Header>
        <Item.Description>
          <p>{price}</p>
          <Label>Label</Label>
        </Item.Description>
        <Item.Extra>
          <AddToCart productId={id} />
        </Item.Extra>
      </Item.Content>
    </Item>
  </Item.Group>
)
