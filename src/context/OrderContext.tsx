import { createContext } from "react"
import { MenuItem } from "typescript/MenuItem"
import { createNewItem } from "utils/businessLogic"

interface OrderContextValue {
  isModeAdmin?: boolean
  setIsModeAdmin: React.Dispatch<React.SetStateAction<boolean>>
  menuItems?: MenuItem[]
  setMenuItems?: any
  handleAdd: () => void
  handleDelete: (id: number) => void
  handleEdit: (itemToEdit: MenuItem) => void
  itemBeingSelected: MenuItem
  setItemBeingSelected: React.Dispatch<React.SetStateAction<MenuItem>>
}

export default createContext<OrderContextValue>({
  isModeAdmin: false,
  setIsModeAdmin: () => {},
  menuItems: [],
  setMenuItems: () => {},
  handleAdd: () => {},
  handleDelete: () => {},
  handleEdit: () => {},
  itemBeingSelected: createNewItem(),
  setItemBeingSelected: () => {},
})
