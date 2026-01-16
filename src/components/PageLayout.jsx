import { Box } from "@mui/material"

export default function PageLayout({ children }) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: `
          linear-gradient(
            to bottom,
            #0d0d0d 0%,
            #363535 40%,
            #6c6868 100%
          )
        `,
        pt: 8
      }}
    >
      {children}
    </Box>
  )
}
