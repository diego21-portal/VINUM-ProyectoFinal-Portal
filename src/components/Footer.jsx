import {
  Box,
  Typography,
  Grid,
  Link as MuiLink,
  Divider,
  TextField,
  Button,
  IconButton
} from "@mui/material"
import { Link } from "react-router-dom"
import { Instagram, Facebook, X } from "@mui/icons-material"
import { motion } from "framer-motion"

const MotionBox = motion(Box)

export default function Footer() {
  return (
    <MotionBox
      component="footer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      sx={{
        backgroundColor: "#0d0d0d",
        color: "#fff",
        mt: 10,
        pt: { xs: 6, md: 8 },
        pb: 4
      }}
    >
      <Box sx={{ maxWidth: 1200, mx: "auto", px: { xs: 2, md: 4 } }}>
        <Grid
          container
          spacing={{ xs: 5, md: 6 }}
          textAlign={{ xs: "center", md: "left" }}
        >
          {/* Marca */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h4"
              sx={{ fontWeight: 800, letterSpacing: 3, mb: 2 }}
            >
              VINUM
            </Typography>

            <Divider
              sx={{
                width: 60,
                mx: { xs: "auto", md: 0 },
                mb: 2,
                borderColor: "#8b0000"
              }}
            />

            <Typography
              variant="body2"
              sx={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.7 }}
            >
              Vinos y champagnes premium seleccionados de bodegas reconocidas por
              su tradición, carácter y excelencia.
            </Typography>

            {/* Redes */}
            <Box
              sx={{
                mt: 3,
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" },
                gap: 1
              }}
            >
              {[Instagram, Facebook, X].map((Icon, i) => (
                <IconButton
                  key={i}
                  sx={{
                    color: "rgba(255,255,255,0.6)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      color: "#8b0000",
                      transform: "translateY(-2px)"
                    }
                  }}
                >
                  <Icon />
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Navegación */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Navegación
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1.2,
                alignItems: { xs: "center", md: "flex-start" }
              }}
            >
              {[
                { label: "Tienda", to: "/shop" },
                { label: "Vinos", to: "/category/vino" },
                { label: "Champagnes", to: "/category/champagne" },
                { label: "Carrito", to: "/cart" }
              ].map(link => (
                <MuiLink
                  key={link.to}
                  component={Link}
                  to={link.to}
                  underline="none"
                  sx={{
                    color: "rgba(255,255,255,0.7)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      color: "#fff",
                      transform: "translateX(4px)"
                    }
                  }}
                >
                  {link.label}
                </MuiLink>
              ))}
            </Box>
          </Grid>

          {/* Newsletter */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Newsletter
            </Typography>

            <Typography
              variant="body2"
              sx={{ mb: 2, color: "rgba(255,255,255,0.7)" }}
            >
              Recibí novedades, lanzamientos y promociones exclusivas.
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: 1
              }}
            >
              <TextField
                placeholder="Tu email"
                size="small"
                fullWidth
                sx={{
                  input: { color: "#fff" },
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "#111",
                    "& fieldset": { borderColor: "#333" },
                    "&:hover fieldset": { borderColor: "#8b0000" }
                  }
                }}
              />

              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#8b0000",
                  px: 3,
                  "&:hover": {
                    backgroundColor: "#a40000"
                  }
                }}
              >
                Suscribirme
              </Button>
            </Box>

            <Typography
              variant="caption"
              sx={{ display: "block", mt: 2, color: "rgba(255,255,255,0.5)" }}
            >
              Prohibida la venta de alcohol a menores de 18 años.
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 5, borderColor: "#222" }} />

        <Typography
          variant="caption"
          align="center"
          sx={{ display: "block", color: "rgba(255,255,255,0.5)" }}
        >
          © {new Date().getFullYear()} VINUM · Todos los derechos reservados
        </Typography>
      </Box>
    </MotionBox>
  )
}
