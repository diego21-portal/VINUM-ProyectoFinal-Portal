import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../services/firebase.js"
import ItemList from "../components/ItemList.jsx"
import { CircularProgress, Typography, Box } from "@mui/material"

export default function ItemListContainer() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const { categoryId } = useParams()

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)

      const productsRef = collection(db, "products")
      const q = categoryId
        ? query(productsRef, where("category", "==", categoryId))
        : productsRef

      const res = await getDocs(q)

      const data = res.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))

      setProducts(data)
      setLoading(false)
    }

    fetchProducts()
  }, [categoryId])

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
        <CircularProgress color="error" />
      </Box>
    )
  }

  if (products.length === 0) {
    return (
      <Typography align="center" sx={{ mt: 5 }}>
        No hay productos en esta categoría
      </Typography>
    )
  }

  return <ItemList products={products} />
}
