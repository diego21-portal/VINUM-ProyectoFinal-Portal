// context/ShopFilterContext.jsx
import { createContext, useState } from "react"

export const ShopFilterContext = createContext()

export function ShopFilterProvider({ children }) {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("all")
  const [maxPrice, setMaxPrice] = useState(999999)
  const [order, setOrder] = useState("none")

  return (
    <ShopFilterContext.Provider value={{
      search,
      setSearch,
      category,
      setCategory,
      maxPrice,
      setMaxPrice,
      order,
      setOrder
    }}>
      {children}
    </ShopFilterContext.Provider>
  )
}
