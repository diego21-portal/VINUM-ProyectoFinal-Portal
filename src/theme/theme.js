import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#fb2b2b" // rojo vino
    },
    secondary: {
      main: "#000000"
    },
    background: {
      default: "#0f0f0f",
      paper: "#1a1a1a"
    },
    text: {
      primary: "#ffffff",
      secondary: "#cccccc"
    }
  },
  typography: {
    fontFamily: "Montserrat, Arial, sans-serif",
    h4: {
      fontWeight: 600
    },
    button: {
      textTransform: "none",
      fontWeight: 600
    }
  },
  shape: {
    borderRadius: 12
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "10px 20px",
          transition: "all .3s ease",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 8px 20px rgba(139,0,0,.4)"
          }
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          transition: "all .3s ease",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0 12px 30px rgba(0,0,0,.6)"
          }
        }
      }
    }
  }
})

export default theme
