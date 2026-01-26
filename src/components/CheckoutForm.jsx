import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext.js"
import { createOrder } from "../services/orders.js"
import { TextField, Button, Typography, Box } from "@mui/material"

export default function CheckoutForm() {
  const { cart, total, clearCart } = useContext(CartContext)
  const [orderId, setOrderId] = useState(null)

  const [buyer, setBuyer] = useState({
    name: "",
    phone: "",
    email: ""
  })

  const handleChange = e => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    try {
      const id = await createOrder(cart, buyer, total)
      setOrderId(id)
      clearCart()
    } catch (error) {
      alert(error.message)
    }
  }

  if (orderId) {
    return (
      <Typography align="center" sx={{ mt: 5 }}>
        Gracias por su compra. Su número de orden es:{" "}
        <strong>{orderId}</strong>
      </Typography>
    )
  }

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 5 }}>
      <TextField
        name="name"
        label="Nombre"
        fullWidth
        onChange={handleChange}
        sx={{ mb: 2 }}
      />
      <TextField
        name="phone"
        label="Teléfono"
        fullWidth
        onChange={handleChange}
        sx={{ mb: 2 }}
      />
      <TextField
        name="email"
        label="Email"
        fullWidth
        onChange={handleChange}
        sx={{ mb: 2 }}
      />

      <Button
        variant="contained"
        color="error"
        fullWidth
        onClick={handleSubmit}
        disabled={cart.length === 0}
      >
        Confirmar compra
      </Button>
    </Box>
  )
}
