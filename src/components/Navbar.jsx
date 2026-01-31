import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  InputBase
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import SearchIcon from "@mui/icons-material/Search"
import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import CartWidget from "./CartWidget.jsx"
import UserAvatar from "./UserAvatar.jsx"
import UserDrawer from "./UserDrawer.jsx"
import { AuthContext } from "../auth/AuthContext.jsx"
import { ShopFilterContext } from "../context/ShopFilterContext.jsx"
import { useTheme, useMediaQuery } from "@mui/material"

export default function Navbar() {
  const { user } = useContext(AuthContext)
  const { search, setSearch } = useContext(ShopFilterContext)
  const [open, setOpen] = useState(false)

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <>
      <AppBar position="static" color="secondary">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>

          {/* Left */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {isMobile && (
              <IconButton color="inherit" onClick={() => setOpen(true)}>
                <MenuIcon />
              </IconButton>
            )}

            <Typography
              variant="h5"
              component={Link}
              to="/"
              sx={{ textDecoration: "none", color: "white", fontWeight: 700 }}
            >
              VINUM
            </Typography>
          </Box>

          {/* Center - desktop */}
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button color="inherit" component={Link} to="/shop">Todos</Button>
              <Button color="inherit" component={Link} to="/category/vino">Vinos</Button>
              <Button color="inherit" component={Link} to="/category/champagne">Champagnes</Button>
            </Box>
          )}

          {/* Search */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              background: "rgba(255,255,255,0.15)",
              px: 1,
              borderRadius: 2,
              width: isMobile ? 140 : 220
            }}
          >
            <SearchIcon />
            <InputBase
              placeholder="Buscar…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              sx={{ color: "white", ml: 1, flex: 1 }}
            />
          </Box>

          {/* Right */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {!isMobile && (
              user ? (
                <Box onClick={() => setOpen(true)} sx={{ cursor: "pointer" }}>
                  <UserAvatar />
                </Box>
              ) : (
                <Button color="inherit" component={Link} to="/login">
                  Ingresar
                </Button>
              )
            )}

            <CartWidget />
          </Box>

        </Toolbar>
      </AppBar>

      <UserDrawer open={open} onClose={() => setOpen(false)} />
    </>
  )
}

