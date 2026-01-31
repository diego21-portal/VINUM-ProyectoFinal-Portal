import { Box, Typography, Avatar, Divider } from "@mui/material"
import { useAuth } from "../auth/useAuth.js"
import { db } from "../services/firebase.js"
import { doc, getDoc } from "firebase/firestore"
import { useEffect, useState } from "react"

export default function Profile() {
  const { user } = useAuth()
  const [data, setData] = useState(null)

  useEffect(() => {
    getDoc(doc(db, "users", user.uid)).then(res => setData(res.data()))
  }, [])

  if (!data) return null

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", mt: 4 }}>
      <Avatar sx={{ width: 100, height: 100, mx: "auto" }}>
        {data.name[0]}
      </Avatar>

      <Typography align="center" variant="h5">{data.name}</Typography>
      <Typography align="center">{data.email}</Typography>

      <Divider sx={{ my: 3 }} />

      <Typography>🛒 Compras realizadas: {data.orders}</Typography>
      <Typography>💰 Total gastado: ${data.totalSpent}</Typography>
      <Typography>❤️ Favoritos: {data.favorites.length}</Typography>
    </Box>
  )
}
