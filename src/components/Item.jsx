import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  Chip
} from "@mui/material"
import { Link } from "react-router-dom"

export default function Item({ product }) {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        boxShadow: 3,
        transition: "transform 0.3s",
        "&:hover": { transform: "translateY(-4px)" }
      }}
    >
      {/* Imagen */}
      <Box
        sx={{
          height: 260,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
          backgroundColor: "#fafafa"
        }}
      >
        <CardMedia
          component="img"
          image={product.image}
          alt={product.name}
          sx={{
            
            maxHeight: "100%",
            minWidth: 300,
            maxWidth: "100%",
            objectFit: "contain"
          }}
        />
      </Box>

      {/* Contenido */}
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" gutterBottom>
          {product.name}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {product.category}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          {product.shortDescription}
        </Typography>

        <Typography variant="h6" sx={{ mt: 1, fontWeight: 600 }}>
          ${product.price}
        </Typography>

        {/* Stock */}
        {product.stock > 0 ? (
          <Chip
            label={`Stock: ${product.stock}`}
            size="small"
            sx={{ mt: 1 }}
          />
        ) : (
          <Chip
            label="Sin stock"
            color="error"
            size="small"
            sx={{ mt: 1 }}
          />
        )}
      </CardContent>

      <Box sx={{ p: 2 }}>
        <Button
          component={Link}
          to={`/item/${product.id}`}
          fullWidth
          variant="contained"
          disabled={product.stock === 0}
          sx={{
            backgroundColor: "#8b0000",
            "&:hover": { backgroundColor: "#a40000" }
          }}
        >
          Ver detalle
        </Button>
      </Box>
    </Card>
  )
}


