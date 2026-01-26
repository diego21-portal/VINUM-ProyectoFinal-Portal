import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../services/firebase.js"
import ItemDetail from "../components/ItemDetail.jsx"
import { CircularProgress, Box, Typography } from "@mui/material"

export default function ItemDetailContainer() {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const { itemId } = useParams()

  useEffect(() => {
    const ref = doc(db, "products", itemId)

    getDoc(ref)
      .then(res => {
        if (res.exists()) {
          setProduct({ id: res.id, ...res.data() })
        } else {
          setProduct(null)
        }
      })
      .finally(() => setLoading(false))
  }, [itemId])

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
        <CircularProgress color="error" />
      </Box>
    )
  }

  if (!product) {
    return (
      <Typography align="center" sx={{ mt: 5 }}>
        Producto no encontrado
      </Typography>
    )
  }

  return <ItemDetail product={product} />
}
