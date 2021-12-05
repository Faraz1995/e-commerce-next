import { useState } from 'react'
import products from '../products.json'
import { initialCheckout } from '../lib/payment'

const defaultCart = {
  products: {}
}

const useCart = () => {
  const [cart, setCart] = useState(defaultCart)

  const cartItems = Object.keys(cart?.products).map((key) => {
    const product = products.find(({ id }) => `${id}` === `${key}`)
    return {
      ...cart.products[key],
      pricePerItem: product.price
    }
  })

  const subTotal = cartItems.reduce((acc, { pricePerItem, quantity }) => {
    return acc + pricePerItem * quantity
  }, 0)

  const totalItem = cartItems.reduce((acc, { quantity }) => {
    return acc + quantity
  }, 0)

  const addToCart = (product) => {
    const { id } = product
    const cartState = { ...cart }
    if (cartState.products[id]) {
      console.log('already in')
      cartState.products[id].quantity = cartState.products[id].quantity + 1
    } else {
      cartState.products[id] = {
        id,
        name: product.title,
        quantity: 1
      }
    }
    setCart(cartState)

    // setCart((prev) => {
    //   let cartProduct = { ...prev.products }
    //   if (!cartProduct[id]) {
    //     const newState ={
    //       products:{
    //         ...cartProduct,
    //         [id]: {
    //           id,
    //           name: product.title,
    //           quantity: 1
    //         }
    //       }
    //     }
    //     return newState
    //   } else {
    //     const newState ={
    //       products:{
    //         ...cartProduct,
    //         [id]: {
    //           ...cartProduct[id],
    //           quantity: cartProduct[id].quantity+1
    //         }
    //       }
    //     }
    //     return newState
    //   }
    // })
  }
  console.log('cart--------', cart)

  const checkout = () => {
    initialCheckout({
      lineItems: cartItems.map((item) => {
        return {
          price: item.id,
          quantity: item.quantity
        }
      })
    })
  }

  return {
    cart,
    setCart,
    subTotal,
    totalItem,
    checkout,
    addToCart
  }
}
export default useCart
