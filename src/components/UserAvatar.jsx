import { Avatar } from "@mui/material"
import { useAuth } from "../auth/useAuth.js"

export default function UserAvatar() {
  const { user } = useAuth()

  return (
    <Avatar src={user?.photoURL || ""}>
      {user?.displayName?.[0]}
    </Avatar>
  )
}
