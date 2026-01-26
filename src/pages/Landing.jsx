import { Box, Typography, Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
import PageTransition from "../components/PageTransition.jsx"

export default function Landing() {
  const navigate = useNavigate()

  return (
    <PageTransition>
        <Box
            sx={{
                minHeight: "100vh",
                background: `
                linear-gradient(
                    rgba(0,0,0,0.75),
                    rgba(0,0,0,0.75)
                ),
                url("https://images.unsplash.com/photo-1510626176961-4b37d6af0c53")
                `,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                color: "#fff",
                px: 2
            }} 
        >
        <Box
            sx={{
            maxWidth: 600,
            animation: "fadeUp 1.2s ease-out"
            }}
        >
            <Typography
            variant="h2"
            sx={{
                fontWeight: 700,
                mb: 2,
                color: "#c70909f0",
                letterSpacing: 1
            }}
            >
            Vinos de Autor
            </Typography>

            <Typography
            variant="h6"
            sx={{
                color: "#ddd",
                mb: 4,
                lineHeight: 1.6
            }}
            >
            Selección exclusiva de vinos premium.  
            Tradición, carácter y elegancia en cada botella.
            </Typography>

            <Button
            variant="contained"
            size="large"
            onClick={() => navigate("/shop")}
            sx={{
                backgroundColor: "#8B0000",
                px: 5,
                py: 1.5,
                fontSize: "1rem",
                fontWeight: 600,
                borderRadius: "30px",
                textTransform: "none",
                transition: "all 0.3s ease",
                "&:hover": {
                backgroundColor: "#a40000",
                transform: "scale(1.05)"
                }
            }}
            >
            Entrar a la tienda
            </Button>
        </Box>

        {/* Animación */}
        <style>
            {`
            @keyframes fadeUp {
                from {
                opacity: 0;
                transform: translateY(30px);
                }
                to {
                opacity: 1;
                transform: translateY(0);
                }
            }
            `}
        </style>
        </Box>
    </PageTransition>
  )
}

