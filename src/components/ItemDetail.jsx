import {
  Box,
  Typography,
  Grid,
  Divider,
  Alert,
  Snackbar
} from "@mui/material"
import ItemCount from "./ItemCount"
import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"


export default function ItemDetail({ product }) {
  const { addItem, error, clearError } = useContext(CartContext)
  const [added, setAdded] = useState(false)
  const handleAdd = quantity => {
    const success = addItem(product, quantity)

    if (success) {
      setAdded(true)
      setTimeout(() => setAdded(false), 2500)
    }
  }

  return (
    <>
    <Snackbar
      open={Boolean(error)}
      autoHideDuration={3000}
      onClose={clearError}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert severity="error" onClose={clearError} sx={{ width: "100%" }}>
        {error}
      </Alert>
    </Snackbar>    
    
    <Grid container spacing={4} sx={{ maxWidth: 1200, mx: "auto", mt: 4 }}>
      
      {/* Imagen */}
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            height: 420,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fafafa",
            borderRadius: 2,
            p: 3
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            style={{
              maxHeight: "100%",
              maxWidth: "100%",
              objectFit: "contain"
            }}
          />
        </Box>
      </Grid>

      {/* Información */}
      <Grid item xs={12} md={6}>
        <Typography variant="h4" fontWeight={700}>
          {product.name}
        </Typography>

        <Typography variant="h6" sx={{ my: 2 }}>
          ${product.price}
        </Typography>

        <Typography variant="body2" sx={{ mb: 2 }}>
          Stock disponible: {product.stock}
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Descripción */}
        <Typography variant="h6" gutterBottom>
          Descripción
        </Typography>

        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {product.description}
        </Typography>

        {/* Alerta temporal */}
        {added && (
          <Alert severity="success" sx={{ mb: 2 }}>
            Producto agregado al carrito
          </Alert>
        )}

        {/* Botón siempre visible */}
        {product.stock > 0 ? (
          <ItemCount stock={product.stock} onAdd={handleAdd} />
        ) : (
          <Alert severity="warning">Producto sin stock</Alert>
        )}

        <Divider sx={{ my: 3 }} />
        {/* Ficha técnica */}
        <Typography variant="h6" gutterBottom>
          Ficha técnica
        </Typography>

        <Typography variant="body2">
          🍇 Bodega: {product.winery}
        </Typography>
        <Typography variant="body2">
          🍷 Varietal: {product.varietal}
        </Typography>
        <Typography variant="body2">
          🌡 Alcohol: {product.alcohol}%
        </Typography>
        <Typography variant="body2">
          📍 Origen: {product.origin}
        </Typography>
        <Typography variant="body2">
          📦 Presentación: {product.capacity} ml · Caja x {product.boxQuantity}
        </Typography>
        <Typography variant="body2">
          🌾 Cosecha: {product.harvest}
        </Typography>  
      </Grid>
    </Grid>
    </>
  )
}

