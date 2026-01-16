import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { IconButton, Badge } from "@mui/material"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import { Link } from "react-router-dom"

export default function CartWidget() {
  const { totalItems } = useContext(CartContext)

  return (
    <IconButton component={Link} to="/cart" color="inherit">
      <Badge badgeContent={totalItems} color="error">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  )
}
