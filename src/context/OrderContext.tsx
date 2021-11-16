import { createContext } from "react"
import { MenuItem } from "typescript/MenuItem"

interface OrderContextValue {
  isModeAdmin?: boolean
  setIsModeAdmin: React.Dispatch<React.SetStateAction<boolean>>
  menuItems?: MenuItem[]
  setMenuItems?: any
  handleAdd: () => void
  handleDelete: (id: number) => void
}

export default createContext<OrderContextValue>({
  isModeAdmin: false,
  setIsModeAdmin: () => {},
  menuItems: [],
  setMenuItems: () => {},
  handleAdd: () => {},
  handleDelete: () => {},
})
