import { Box, TextField, Button, Typography } from "@mui/material"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth, db } from "../services/firebase.js"
import { doc, setDoc } from "firebase/firestore"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Register() {
  const [data, setData] = useState({ name: "", email: "", password: "" })
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()

    const cred = await createUserWithEmailAndPassword(auth, data.email, data.password)

    await updateProfile(cred.user, { displayName: data.name })

    await setDoc(doc(db, "users", cred.user.uid), {
      name: data.name,
      email: data.email,
      favorites: [],
      totalSpent: 0,
      orders: 0,
      createdAt: new Date()
    })

    navigate("/profile")
  }

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 6 }}>
      <Typography variant="h5">Crear cuenta</Typography>

      <form onSubmit={handleSubmit}>
        <TextField fullWidth label="Nombre" sx={{ my: 2 }} onChange={e => setData({ ...data, name: e.target.value })}/>
        <TextField fullWidth label="Email" sx={{ my: 2 }} onChange={e => setData({ ...data, email: e.target.value })}/>
        <TextField fullWidth label="Contraseña" type="password" sx={{ my: 2 }} onChange={e => setData({ ...data, password: e.target.value })}/>
        <Button fullWidth variant="contained" type="submit">Registrarse</Button>
      </form>
    </Box>
  )
}
