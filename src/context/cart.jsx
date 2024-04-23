import { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const productInCartIndex = cart.findIndex(item => item.id === product.id)

    if (productInCartIndex >= 0) {

      const newCart = cart.map(item => {
        if (item.id === product.id) {
          return {
            ...item, quantity: item.quantity + 1
          }
        }
        return item
      })
      return setCart(newCart)
    }

    setCart(prevState => ([
        ...prevState, {...product, quantity: 1}
    ]))
  };

  const reduceToCart = (product) => {
    const newCart = cart.map(item => {
      if (item.id === product.id) {
        if(item.quantity > 1){
          return {
            ...item, quantity: item.quantity - 1
          }
        }
      }
      return item
    })
    return setCart(newCart)
  }

  const clearCart = () => {
    setCart([]);
  };

  const removeFromCart = product => {
    setCart(prevState => prevState.filter(item => item.id !== product.id))
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart, removeFromCart, reduceToCart }}>
      {children}
    </CartContext.Provider>
  );
}
