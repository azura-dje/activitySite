'use strict'

var CART = {
  KEY: 'bkasjbdfkjasdkfjhaksdfjskd',
  contents: [],
  init: function init() {
    //check localStorage and initialize the contents of CART.contents
    var _contents = localStorage.getItem(CART.KEY)
    if (_contents) {
      CART.contents = JSON.parse(_contents)
    } else {
      //dummy test data
      CART.contents = [
        {id: 1, title: 'Apple', qty: 5, itemPrice: 0.85},
        {id: 2, title: 'Banana', qty: 3, itemPrice: 0.35},
        {id: 3, title: 'Cherry', qty: 8, itemPrice: 0.05},
      ]
      CART.sync()
    }
  },
  sync: async function sync() {
    var _cart = JSON.stringify(CART.contents)
    await localStorage.setItem(CART.KEY, _cart)
  },
  find: function find(id) {
    //find an item in the cart by it's id
    var match = CART.contents.filter(function(item) {
      if (item.id == id) return true
    })
    if (match && match[0]) return match[0]
  },
  add: function add(id) {
    //add a new item to the cart
    //check that it is not in the cart already
    if (CART.find(id)) {
      CART.increase(id, 1)
    } else {
      var arr = PRODUCTS.filter(function(product) {
        if (product.id == id) {
          return true
        }
      })
      if (arr && arr[0]) {
        var obj = {
          id: arr[0].id,
          title: arr[0].title,
          qty: 1,
          itemPrice: arr[0].price,
        }
        CART.contents.push(obj)
        //update localStorage
        CART.sync()
      } else {
        //product id does not exist in products data
        console.error('Invalid Product')
      }
    }
  },
  increase: function increase(id) {
    var qty =
      arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1]

    //increase the quantity of an item in the cart
    CART.contents = CART.contents.map(function(item) {
      if (item.id === id) item.qty = item.qty + qty
      return item
    })
    //update localStorage
    CART.sync()
  },
  reduce: function reduce(id) {
    var qty =
      arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1]

    //reduce the quantity of an item in the cart
    CART.contents = CART.contents.map(function(item) {
      if (item.id === id) item.qty = item.qty - qty
      return item
    })
    CART.contents.forEach(async function(item) {
      if (item.id === id && item.qty === 0) await CART.remove(id)
    })
    //update localStorage
    CART.sync()
  },
  remove: function remove(id) {
    //remove an item entirely from CART.contents based on its id
    CART.contents = CART.contents.filter(function(item) {
      if (item.id !== id) return true
    })
    //update localStorage
    CART.sync()
  },
  empty: function empty() {
    //empty whole cart
    CART.contents = []
    //update localStorage
    CART.sync()
  },
  sort: function sort() {
    let field =
      arguments.length <= 0 || arguments[0] === undefined
        ? 'title'
        : arguments[0]

    //sort by field - title, price
    //return a sorted shallow copy of the CART.contents array
    let sorted = CART.contents.sort(function(a, b) {
      if (a[field] > b[field]) {
        return 1
      } else if (a[field] < a[field]) {
        return -1
      } else {
        return 0
      }
    })
    return sorted
    //NO impact on localStorage
  },
  logContents: function logContents(prefix) {
    console.log(prefix, CART.contents)
  },
}
