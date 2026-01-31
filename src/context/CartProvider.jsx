import { useState } from "react"
import { CartContext } from "./CartContext.js"

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])
  const [error, setError] = useState(null)

  const clearError = () => setError(null)

  const addItem = (item, quantity) => {
    const existing = cart.find(p => p.id === item.id)

    if (existing) {
      if (existing.quantity + quantity > item.stock) {
        setError("No podés agregar más unidades que el stock disponible")
        return false
      }

      setCart(cart.map(p =>
        p.id === item.id
          ? { ...p, quantity: p.quantity + quantity }
          : p
      ))
      return true
    } else {
      if (quantity > item.stock) {
        setError("Cantidad superior al stock disponible")
        return false
      }

      setCart([...cart, { ...item, quantity }])
      return true
    }
  }

  const removeItem = id => {
    setCart(prev => prev.filter(p => p.id !== id))
  }

  const updateQuantity = (id, sumquantity) => {
    setCart(cart =>
      cart.map(item =>
                item.id === id
                ? { ...item, quantity: item.quantity + sumquantity } : item).filter(item => item.quantity > 0))
  }

  const clearCart = () => setCart([])

  const total = cart.reduce((acc, p) => acc + p.price * p.quantity, 0)
  const totalItems = cart.reduce((acc, p) => acc + p.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        updateQuantity,
        removeItem,
        clearCart,
        total,
        totalItems,
        error,
        clearError
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

