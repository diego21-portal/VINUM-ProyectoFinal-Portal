import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material"
import { Link } from "react-router-dom"
import CartWidget from "./CartWidget.jsx"

export default function NavBar() {
  return (
    <AppBar position="static" color="secondary">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography 
          variant="h5" 
          component={Link} 
          to="/" 
          sx={{ textDecoration: "none", color: "white" }}
        >
          VINUM
        </Typography>

        <Box>
          <Button color="inherit" component={Link} to="/shop">Todos</Button>
          <Button color="inherit" component={Link} to="/category/vino">Vinos</Button>
          <Button color="inherit" component={Link} to="/category/champagne">Champagnes</Button>
        </Box>

        <CartWidget />
      </Toolbar>
    </AppBar>
  )
}
