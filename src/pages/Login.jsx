    import { Box, TextField, Button, Typography, Alert } from "@mui/material"
    import { signInWithEmailAndPassword } from "firebase/auth"
    import { auth } from "../services/firebase.js"
    import { useState } from "react"
    import { useNavigate, Link } from "react-router-dom"

    export default function Login() {
      const [data, setData] = useState({ email: "", password: "" })
      const [error, setError] = useState("")
      const navigate = useNavigate()

      const handleSubmit = async e => {
        e.preventDefault()
        setError("")

        try {
          await signInWithEmailAndPassword(auth, data.email, data.password)
          navigate("/profile")
        } catch (err) {

          console.log(err.code)

          if (err.code === "auth/invalid-credential") {
            setError("Email o contraseña incorrectos.")
          } else {
            setError("Error al iniciar sesión.")
          }
        }
      }

      return (
        <Box sx={{ maxWidth: 400, mx: "auto", mt: 6 }}>
          <Typography variant="h5" mb={2}>
            Iniciar sesión
          </Typography>

          {error && <Alert severity="error">{error}</Alert>}

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Email"
              sx={{ my: 2 }}
              onChange={e => setData({ ...data, email: e.target.value })}
            />

            <TextField
              fullWidth
              label="Contraseña"
              type="password"
              sx={{ my: 2 }}
              onChange={e => setData({ ...data, password: e.target.value })}
            />

            <Button fullWidth variant="contained" type="submit">
              Entrar
            </Button>
          </form>

          <Typography mt={2} variant="body2" align="center">
            ¿No tenés cuenta?{" "}
            <Link to="/register">Registrate acá</Link>
          </Typography>
        </Box>
      )
    }

