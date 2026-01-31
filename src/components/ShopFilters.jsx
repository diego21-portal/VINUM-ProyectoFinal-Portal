import {
  Box,
  Select,
  MenuItem,
  Slider,
  Typography,
  Grid,
  Chip
} from "@mui/material"
import { useContext } from "react"
import { ShopFilterContext } from "../context/ShopFilterContext.jsx"

export default function ShopFilters() {
  const {
    category, setCategory,
    maxPrice, setMaxPrice,
    order, setOrder
  } = useContext(ShopFilterContext)

  return (
    <Box
      sx={{
        mb: 4,
        p: 2,
        borderRadius: 2,
        backgroundColor: "background.paper",
        boxShadow: 1
      }}
    >
      <Typography variant="h6" gutterBottom>
        Filtros
      </Typography>

      <Grid container spacing={2}>
        
        {/* Categoría */}
        <Grid item xs={12} md={3}>
          <Typography variant="body2">Categoría</Typography>
          <Select
            fullWidth
            size="small"
            value={category}
            onChange={e => setCategory(e.target.value)}
          >
            <MenuItem value="all">Todas</MenuItem>
            <MenuItem value="vino">Vinos</MenuItem>
            <MenuItem value="champagne">Champagne</MenuItem>
          </Select>
        </Grid>

        {/* Precio */}
        <Grid item xs={12} md={5}>
          <Typography variant="body2">
            Precio máximo: <strong>${maxPrice.toLocaleString()}</strong>
          </Typography>

          <Slider
            value={maxPrice}
            onChange={(e, val) => setMaxPrice(val)}
            min={0}
            max={50000}
            step={1000}
            valueLabelDisplay="auto"
            valueLabelFormat={v => `$${v.toLocaleString()}`}
          />
        </Grid>

        {/* Orden */}
        <Grid item xs={12} md={4}>
          <Typography variant="body2">Ordenar por</Typography>
          <Select
            fullWidth
            size="small"
            value={order}
            onChange={e => setOrder(e.target.value)}
          >
            <MenuItem value="none">Sin orden</MenuItem>
            <MenuItem value="priceAsc">Precio ↑</MenuItem>
            <MenuItem value="priceDesc">Precio ↓</MenuItem>
            <MenuItem value="nameAsc">Nombre A–Z</MenuItem>
            <MenuItem value="nameDesc">Nombre Z–A</MenuItem>
          </Select>
        </Grid>

      </Grid>

      {/* Chips visuales (feedback UX) */}
      <Box sx={{ mt: 2, display: "flex", gap: 1, flexWrap: "wrap" }}>
        <Chip label={`Categoría: ${category}`} />
        <Chip label={`Hasta $${maxPrice.toLocaleString()}`} />
        {order !== "none" && <Chip label={`Orden: ${order}`} />}
      </Box>
    </Box>
  )
}
