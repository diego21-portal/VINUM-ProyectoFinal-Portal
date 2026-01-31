import {
  Drawer,
  Box,
  Avatar,
  Typography,
  Button,
  Divider
} from "@mui/material"
import { Link } from "react-router-dom"
import { useAuth } from "../auth/useAuth.js"

export default function UserDrawer({ open, onClose }) {
  const { user, logout } = useAuth()

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 280, p: 3 }}>
        {user ? (
          <>
            <Box sx={{ textAlign: "center", mb: 2 }}>
              <Avatar
                sx={{ width: 80, height: 80, mx: "auto", mb: 1 }}
                src={user.photoURL || ""}
              />
              <Typography variant="h6">{user.displayName}</Typography>
              <Typography variant="body2">{user.email}</Typography>
            </Box>

            <Divider sx={{ my: 2 }} />

            <Button
              fullWidth
              component={Link}
              to="/profile"
              onClick={onClose}
            >
              Ver perfil
            </Button>

            <Button
              fullWidth
              color="error"
              onClick={() => {
                logout()
                onClose()
              }}
            >
              Cerrar sesión
            </Button>
          </>
        ) : (
          <>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Bienvenido
            </Typography>

            <Button fullWidth component={Link} to="/login" onClick={onClose}>
              Iniciar sesión
            </Button>

            <Button fullWidth component={Link} to="/register" onClick={onClose}>
              Crear cuenta
            </Button>
          </>
        )}
      </Box>
    </Drawer>
  )
}
