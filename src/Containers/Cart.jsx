import { useContext } from "react"
import { CartContext } from "../context/CartContext.js"
import CartItem from "../components/CartItem.jsx"
import { Button, Typography, Box, Divider } from "@mui/material"
import { Link } from "react-router-dom"

export default function Cart() {
  const { cart, total, clearCart } = useContext(CartContext)

  if (cart.length === 0) {
    return (
      <Box sx={{ mt: 5, textAlign: "center" }}>
        <Typography variant="h5">Tu carrito está vacío</Typography>
        <Button component={Link} to="/shop" variant="contained" color="error" sx={{ mt: 3 }}>
          Volver al catálogo
        </Button>
      </Box>
    )
  }

  return (
    <Box sx={{ maxWidth: 800, mx: "auto", mt: 5 }}>
      {cart.map(item => (
        <CartItem key={item.id} item={item} />
      ))}

      <Divider sx={{ my: 3 }} />

      <Typography variant="h5">
        Total: ${total.toLocaleString()}
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
        <Button variant="outlined" color="error" onClick={clearCart}>
          Vaciar carrito
        </Button>

        <Button component={Link} to="/checkout" variant="contained" color="error">
          Finalizar compra
        </Button>
      </Box>
    </Box>
  )
}
