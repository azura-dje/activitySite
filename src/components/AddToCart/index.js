/* eslint-disable react/button-has-type */
/* eslint-disable no-underscore-dangle */
/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
/* eslint-disable spaced-comment */
import React, {useState, useEffect} from 'react'

const AddToCart = ({productId}) => {
  const [cartId, setCartId] = useState()
  const [itemId, setItemId] = useState([])

  const addToCart = (cartId, productId) => {
    // cartId = localStorage.getItem('_key')
    itemId.push(productId)
    localStorage.setItem('_data', JSON.stringify({cartId, itemId}))
  }

  useEffect(() => {
    const cartId = localStorage.getItem('_key')
    const _data = localStorage.getItem('_data')

    if ((cartId && !_data) || !cartId) {
      const cartId = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'.replace(/[x]/g, () =>
        // eslint-disable-next-line no-bitwise
        ((Math.random() * 16) | 0).toString(16),
      )

      localStorage.setItem('_key', cartId)
      localStorage.setItem('_data', JSON.stringify({cartId, itemId}))
      setCartId(cartId)
    } else {
      const data = localStorage.getItem('_data')
      const parsedData = JSON.parse(data)
      const cart = parsedData.itemId
      setItemId(cart)
    }
  }, [])
  const handelSubmit = () => {
    addToCart(cartId, productId)
  }
  return (
    <div>
      hello world
      <button onClick={handelSubmit}>Click Me</button>
    </div>
  )
}

export default AddToCart
