import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { CartProvider } from "./context/CartProvider.jsx"
import { AuthProvider } from "./auth/AuthContext.jsx"
import { ThemeProvider, CssBaseline } from "@mui/material"
import { ShopFilterProvider } from "./context/ShopFilterContext.jsx"
import theme from "./theme/theme.js"

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <ShopFilterProvider>
    <CartProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <App />
      </ThemeProvider>
    </CartProvider>
    </ShopFilterProvider>
  </AuthProvider>
)
