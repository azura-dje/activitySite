/* eslint-disable react/jsx-fragments */
/* eslint-disable camelcase */
import React from 'react'
import {Link} from 'gatsby'
import {Item, Button, Loader, Message, Responsive} from 'semantic-ui-react'

export default ({items, removeFromCart, loading, completed}) => {
  if (loading) return <Loader active inline="centered" />

  if (completed)
    return (
      <Message success>
        <Message.Header>Your placed!</Message.Header>
        <p>Congratulations. Your order and payment has been accepted.</p>
      </Message>
    )

  if (items.length === 0)
    return (
      <Message warning>
        <Message.Header>Your cart is empty</Message.Header>
        <p>
          You will need to add some items to the cart before you can checkout.
        </p>
      </Message>
    )
  console.log(items)
  const mapCartItemsToItems = items =>
    items.map(({node: {id, productId, title, quantity, cover, price}}) => {
      const itemPrice = price || ''
      const imageUrl = cover || '/static/moltin-light-hex.svg'

      const DesktopItemImage = () => (
        <Item.Image
          src={imageUrl}
          alt={title}
          size="small"
          style={{background: '#f2f2f2'}}
        />
      )
      const MobileItemImage = () => (
        <Item.Image
          src={imageUrl}
          alt={title}
          size="small"
          style={{background: 'none'}}
        />
      )

      return {
        childKey: id,
        header: (
          <Item.Header>
            <Link to={`/product/${productId}/`}>{title}</Link>
          </Item.Header>
        ),
        image: (
          <React.Fragment>
            <Responsive as={MobileItemImage} {...Responsive.onlyMobile} />
            <Responsive
              as={DesktopItemImage}
              minWidth={Responsive.onlyTablet.minWidth}
            />
          </React.Fragment>
        ),
        meta: `${quantity}x ${itemPrice}`,
        description: 'Some more information goes here....',
        extra: (
          <Button
            basic
            icon="remove"
            floated="right"
            onClick={() => removeFromCart(id)}
          />
        ),
      }
    })
  return <Item.Group divided items={mapCartItemsToItems(items)} />
}
