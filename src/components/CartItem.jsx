import { useContext } from "react"
import { CartContext } from "../context/CartContext.js"
import { Box, Typography, Button } from "@mui/material"

export default function CartItem({ item }) {
  const { removeItem } = useContext(CartContext)

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
      <Typography>
        {item.name} x {item.quantity}
      </Typography>
      <Typography>
        ${ (item.price * item.quantity).toLocaleString() }
      </Typography>
      <Button color="error" onClick={() => removeItem(item.id)}>X</Button>
    </Box>
  )
}