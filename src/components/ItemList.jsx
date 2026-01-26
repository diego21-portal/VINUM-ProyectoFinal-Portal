import { Grid } from "@mui/material"
import Item from "./Item.jsx"

export default function ItemList({ products }) {
  return (
    <Grid container spacing={4} justifyContent="center">
      {products.map(product => (
        <Grid
          item
          key={product.id}
          xs={12}
          sm={6}
          md={4}
          lg={3}
          sx={{ maxWidth: 320 }}
        >
          <Item product={product} />
        </Grid>
      ))}
    </Grid>
  )
}
