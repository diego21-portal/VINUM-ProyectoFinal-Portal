import { useContext } from "react"
import { CartContext } from "../context/CartContext.js"
import { Box, Typography, Button } from "@mui/material"

export default function CartItem({ item }) {
  const { removeItem, updateQuantity } = useContext(CartContext)

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        mb: 2,
        borderBottom: "1px solid #eee",
        pb: 1
      }}
    >
      {/* Imagen */}
      <img
        src={item.image}
        alt={item.name}
        width={60}
        height={60}
        style={{ objectFit: "cover", borderRadius: 8 }}
      />

      {/* Info */}
      <Box sx={{ flex: 1 }}>
        <Typography fontWeight="bold">
          {item.name}
        </Typography>

        <Typography variant="body2">
          ${item.price.toLocaleString()}
        </Typography>
      </Box>

      {/* Controles cantidad */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Button
          variant="outlined"
          size="small"
          onClick={() => updateQuantity(item.id, -1)}
          disabled={item.quantity <= 1}
        >
          -
        </Button>

        <Typography>{item.quantity}</Typography>

        <Button
          variant="outlined"
          size="small"
          onClick={() => updateQuantity(item.id, +1)}
          disabled={item.quantity >= item.stock}
        >
          +
        </Button>
      </Box>

      {/* Total */}
      <Typography width={90} textAlign="right">
        ${(item.price * item.quantity).toLocaleString()}
      </Typography>

      {/* Eliminar */}
      <Button color="error" onClick={() => removeItem(item.id)}>
        X
      </Button>
    </Box>
  )
}
