/* eslint-disable camelcase */
import React, {useState, useContext, useEffect} from 'react'
import get from 'lodash/get'
import CartItemList from '../components/CartItemList'
import SEO from '../components/SEO'
import {useDataQuery} from '../components/Hooks/useDataQuery'

import CartContext from '../components/Context/CartContext'
import Layout from '../components/Layout'

const Cart = () => {
  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState([])
  const [completed, setCompleted] = useState(false)
  const [meta, setMeta] = useState({})
  const [cartId, setCartId] = useState({})
  const {updateCartCount} = useContext(CartContext)

  const data = useDataQuery()
  const products = get(data, 'allContentfulActivity.edges')
  const localData = localStorage.getItem('_data')
  // eslint-disable-next-line no-underscore-dangle
  const shoppedItem = JSON.parse(localData).itemId

  const result = products.filter(({node: {id}}) => {
    // eslint-disable-next-line no-unused-expressions
    return shoppedItem.find(el => {
      return el === id
    })

    // eslint-disable-next-line no-unused-expressions
  })

  console.log(result)

  /* -------------fin test ------------- */

  const cartIdLocal = localStorage.getItem('mcart')

  async function getCartItems() {
    setItems(result)
    setCartId(cartIdLocal)
    setMeta(meta)
    setLoading(false)
  }

  useEffect(() => {
    getCartItems()
  }, [])

  const handleRemoveFromCart = itemId => {
    Moltin.removeFromCart(itemId, cartId).then(({data, meta}) => {
      const total = data.reduce((a, c) => a + c.quantity, 0)
      updateCartCount(total, cartId)
      setItems(data)
      setMeta(meta)
    })
  }
  console.log(items)
  const rest = {items, loading, cartId}

  return (
    <Layout location={location}>
      <SEO title="Cart" />
      <CartItemList {...rest} />
      {!loading && !completed}
    </Layout>
  )
}

export default Cart
