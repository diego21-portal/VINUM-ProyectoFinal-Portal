import { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../services/firebase.js"
import ItemList from "../components/ItemList.jsx"
import ShopFilters from "../components/ShopFilters.jsx"
import { CircularProgress, Typography, Box } from "@mui/material"
import { ShopFilterContext } from "../context/ShopFilterContext.jsx"

export default function ItemListContainer() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const { categoryId } = useParams()

  const {
    search,
    category,
    maxPrice,
    order
  } = useContext(ShopFilterContext)

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

  // 🔥 FILTROS REALES
  let filtered = products
    .filter(p =>
      p.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter(p =>
      category === "all" ? true : p.category === category
    )
    .filter(p =>
      p.price <= maxPrice
    )

  if (order === "priceAsc") {
    filtered.sort((a, b) => a.price - b.price)
  }

  if (order === "priceDesc") {
    filtered.sort((a, b) => b.price - a.price)
  }

  if (order === "nameAsc") {
    filtered.sort((a, b) => a.name.localeCompare(b.name))
  }

  if (order === "nameDesc") {
    filtered.sort((a, b) => b.name.localeCompare(a.name))
  }

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
        <CircularProgress color="error" />
      </Box>
    )
  }

  return (
    <>
      <ShopFilters />
      {filtered.length === 0 ? (
        <Typography align="center" sx={{ mt: 5 }}>
          No se encontraron productos
        </Typography>
      ) : (
        <ItemList products={filtered} />
      )}
    </>
  )
}
