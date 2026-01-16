import { Button, Box } from "@mui/material"
import { useState } from "react"

export default function ItemCount({ stock, onAdd }) {
  const [count, setCount] = useState(1)

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <Button onClick={() => setCount(c => Math.max(1, c - 1))}>-</Button>
      {count}
      <Button onClick={() => setCount(c => Math.min(stock, c + 1))}>+</Button>

      <Button variant="contained" color="error" onClick={() => onAdd(count)} disabled={stock === 0}>
        Agregar
      </Button>
    </Box>
  )
}
