import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext.js"
import { AuthContext } from "../auth/AuthContext.jsx"
import { createOrder } from "../services/orders.js"
import { Typography, Box, Button } from "@mui/material"
import { Navigate } from "react-router-dom"

export default function CheckoutForm() {
  const { cart, total, clearCart } = useContext(CartContext)
  const { user } = useContext(AuthContext)

  const [orderId, setOrderId] = useState(null)
  const [loading, setLoading] = useState(false)

  // 🔒 Si no hay usuario → login obligatorio
  if (!user) {
    return <Navigate to="/login" replace />
  }

  const handleSubmit = async () => {
    try {
      setLoading(true)

      const buyer = {
        uid: user.uid,
        name: user.displayName,
        email: user.email
      }

      const id = await createOrder(cart, buyer, total)
      setOrderId(id)
      clearCart()
    } catch (error) {
      console.error(error)
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  if (orderId) {
    return (
      <>
        <Typography align="center" sx={{ mt: 5 }}>
          Gracias por tu compra 🙌  
          <br />
          Número de orden: <strong>{orderId}</strong>
        </Typography>
        <br />
        <Button 
          variant="outlined" 
          onClick={() => setOrderId(null)}
          sx={{ mt: 2, alignSelf: "center" }}>Volver al carrito</Button>
      </>
    )
  }

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 6, textAlign: "center" }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Confirmar compra
      </Typography>

      <Typography variant="body2" sx={{ mb: 3 }}>
        Estás comprando como <strong>{user.email}</strong>
      </Typography>

      <Button
        variant="contained"
        color="error"
        fullWidth
        onClick={handleSubmit}
        disabled={cart.length === 0 || loading}
      >
        {loading ? "Procesando..." : "Confirmar compra"}
      </Button>
    </Box>
  )
}

