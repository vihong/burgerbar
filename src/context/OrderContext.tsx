import { createContext } from "react"
import { BasketItem } from "typescript/BasketItem"
import { MenuItem } from "typescript/MenuItem"
import { createNewItem } from "utils/businessLogic"

interface OrderContextValue {
  isModeAdmin?: boolean
  setIsModeAdmin: React.Dispatch<React.SetStateAction<boolean>>
  menuItems: MenuItem[]
  handleAdd: (itemCreated: MenuItem) => void
  handleDelete: (id: number | undefined) => void
  handleEdit: (itemToEdit: MenuItem) => void
  itemBeingSelected: MenuItem
  setItemBeingSelected: React.Dispatch<React.SetStateAction<MenuItem>>
  titleEditBoxRef: React.MutableRefObject<any>
  isAddFormVisible: boolean
  setIsAddFormVisible: React.Dispatch<React.SetStateAction<boolean>>
  isEditFormVisible: boolean
  setIsEditFormVisible: React.Dispatch<React.SetStateAction<boolean>>
  isCollapsed: boolean
  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>
  handleAddToBasket: (burger: MenuItem) => void
  basket: BasketItem[]
}

export default createContext<OrderContextValue>({
  isModeAdmin: false,
  setIsModeAdmin: () => {},
  menuItems: [],
  handleAdd: () => {},
  handleDelete: () => {},
  handleEdit: () => {},
  itemBeingSelected: createNewItem(),
  setItemBeingSelected: () => {},
  titleEditBoxRef: { current: undefined },
  isAddFormVisible: false,
  setIsAddFormVisible: () => {},
  isEditFormVisible: false,
  setIsEditFormVisible: () => {},
  isCollapsed: false,
  setIsCollapsed: () => {},
  handleAddToBasket: () => {},
  basket: [],
})
